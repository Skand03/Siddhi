// ------------------------------------------------------------------------------------
// This file helps to connect to any of the API supporting the OPEN AI standards
// ------------------------------------------------------------------------------------

import { Storage } from "@plasmohq/storage";
import { getOrCreateClientUUID } from "./clientUUID";
import { insertStatisticsRow } from "./anonymousTracking";

// Function to map vendor names to their respective API endpoints
async function vendorToEndpoint(vendor: string): Promise<string> {
   const storage = new Storage();

   if (vendor === "localhost") {
      const customUrl = await storage.get("llmCustomEndpoint");
      return customUrl;
   }

   const endpoints: { [key: string]: string } = {
      "Siddhi": process.env.PLASMO_PUBLIC_EXTENSION_OS_API_ENDPOINT,
      openai: "https://api.openai.com/v1/chat/completions",
      groq: "https://api.groq.com/openai/v1/chat/completions",
      together: "https://api.together.xyz/v1/chat/completions",
      gemini: "https://generativelanguage.googleapis.com/v1beta/models/MODEL_NAME:generateContent",
   };

   return endpoints[vendor] || endpoints["groq"];
}

// Constants
const DEFAULT_MODEL = "llama-3.1-70b-versatile";
const DEFAULT_VENDOR = "Siddhi";

// TODO: move somewhere else
const getAccessToken = async (): Promise<string> => {
   try {
      const result = await chrome.identity.getAuthToken({ interactive: true });
      return result?.token || "invalid";
   } catch (error) {
      console.error("Failed to get auth token:", error);
      return "invalid";
   }
};

// The T is to enable us to pass different structure in the future. And the errorMessage, give us an idea of what's wrong; Even the error should have a structure.
export type ApiResponse<T> = {
   data?: T; // Optional data field for successful responses
   errorMessage?: string; // Optional error message for failed responses
};

// May change the signature and make it streamlined.
export async function callOpenAIReturn(
   systemPrompt: string,
   message: any,
   overrideModel?: string,
   overrideProvider?: string
): Promise<ApiResponse<any>> {
   const storage = new Storage();

   try {
      const [storedModel, storedVendor, llmKeys] = await Promise.all([
         storage.get("llmModel").then((model) => model ?? DEFAULT_MODEL),
         storage
            .get("llmProvider")
            .then((provider) => provider ?? DEFAULT_VENDOR),
         storage.get("llmKeys").then((key) => key ?? ""),
      ]);

      //Capture statistics, so that we can provide prioritarisation for features based on the provider/model most used.
      try {
         await insertStatisticsRow("statistics", {
            llmModel: storedModel,
            llmProvider: storedVendor,
            chromeUUID: await getOrCreateClientUUID(), //This is generated random; We want to track
         });
      } catch (error) {
         console.error("Failed to insert statistics row:", error); // Log the error
      }

      const openAIModel = overrideModel || storedModel;
      const vendor = overrideProvider || storedVendor;
      const apiKey = llmKeys ? llmKeys[vendor] : "";
      let openAIEndpoint = await vendorToEndpoint(vendor);

      const headers = new Headers({
         "Content-Type": "application/json",
      });

      let bodyReq;

      if (vendor === "gemini") {
         // Gemini uses its own native API format
         openAIEndpoint = openAIEndpoint.replace("MODEL_NAME", openAIModel);
         openAIEndpoint = `${openAIEndpoint}?key=${apiKey}`;
         
         bodyReq = JSON.stringify({
            contents: [{
               parts: [{
                  text: `${systemPrompt}\n\n${message}`
               }]
            }]
         });
      } else {
         // OpenAI-compatible format for other providers
         headers.set("Authorization", `Bearer ${apiKey || (await getAccessToken())}`);
         
         bodyReq = JSON.stringify({
            model: openAIModel,
            messages: [
               { role: "system", content: systemPrompt },
               { role: "user", content: message }
            ],
            stream: false,
         });
      }

      const response = await fetch(openAIEndpoint, {
         method: "POST",
         headers,
         body: bodyReq,
      });

      let data;
      try {
         data = await response.json();
      } catch (parseError) {
         console.error("Failed to parse response:", await response.text());
         throw new Error(`API returned invalid JSON (Status: ${response.status})`);
      }

      // Log detailed error information for debugging
      if (!response.ok) {
         console.error("API Error Details:", {
            status: response.status,
            statusText: response.statusText,
            vendor: vendor,
            model: openAIModel,
            endpoint: openAIEndpoint.split('?')[0], // Hide API key in logs
            responseData: data,
            requestBody: JSON.parse(bodyReq)
         });
      }

      //Open the option page if the request is unauthorised; Most of the time the user didn't insert the right API keys.
      if (response.status === 401) {
         setTimeout(() => {
            chrome.runtime.openOptionsPage();
         }, 2000);
      }

      //Extension-os.com || Free Tier Exhausted
      if (response.status === 403 && vendor === "Siddhi") {
         chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
               if (tabs[0]?.id) {
                  chrome.tabs.sendMessage(tabs[0].id, {
                     action: "subscriptionLimitReached",
                     text: "3000",
                  });
               } else {
                  throw new Error("No active tab found.");
               }
            }
         );
      }

      if (!response.ok) {
         // Get detailed error message - handle different API error formats
         let errorMsg = 'Unknown error';
         
         if (data.error) {
            // OpenAI, Groq format: { error: { message: "...", type: "..." } }
            errorMsg = data.error.message || data.error.type || JSON.stringify(data.error);
         } else if (data.message) {
            // Some APIs use { message: "..." }
            errorMsg = data.message;
         } else if (data.detail) {
            // Some APIs use { detail: "..." }
            errorMsg = data.detail;
         } else if (typeof data === 'string') {
            errorMsg = data;
         } else {
            errorMsg = `${response.statusText} - ${JSON.stringify(data)}`;
         }
         
         throw new Error(
            `API Error (${response.status}): ${errorMsg}`
         );
      }

      // Parse response based on vendor
      let responseText;
      if (vendor === "gemini") {
         // Gemini format: { candidates: [{ content: { parts: [{ text: "..." }] } }] }
         if (!data.candidates?.length || !data.candidates[0].content?.parts?.length) {
            throw new Error("Unexpected response structure from Gemini API");
         }
         responseText = data.candidates[0].content.parts[0].text;
      } else {
         // OpenAI format: { choices: [{ message: { content: "..." } }] }
         if (!data.choices?.length) {
            throw new Error("Unexpected response structure from API");
         }
         responseText = data.choices[0].message.content;
      }

      return { data: responseText };
   } catch (error) {
      console.error("API Call Error:", error);
      return {
         errorMessage: error instanceof Error ? error.message : String(error),
      };
   }
}
