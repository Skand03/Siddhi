import { Storage } from "@plasmohq/storage";

const storage = new Storage();

export interface IContextConfigItems {
   id: string; //The internal ID
   title?: string; //The display name
   contexts?: string[]; //Chrome Context (https://developer.chrome.com/docs/extensions/reference/api/contextMenus#enum)
   prompt?: string; //The prompt to be executed
   functionType?: string; //The functionality when you press the item (copyToClipboard, etc.)
   type?: string; //Used for the "separator"
   extraArgs?: any; //Used for the future
}

export async function initializeStorage() {
   //   https://unicode-table.com/

   if (process.env.NODE_ENV === "development") {
      //Useful to test a fresh-install
      // storage.removeAll();
   }

   const initState = await storage.get("contextMenuItems");

   if (initState) {
      return initState;
   }

   const contextMenuItems: IContextConfigItems[] = [
      {
         id: "postComment",
         title: "💬 Comment Post",
         contexts: ["selection"],
         prompt:
            "Create a short, engaging comment in response to this social media post. Keep it conversational and relevant. Provide only the comment text without quotation marks or extra formatting.\n\n",
         functionType: "callAI-copyClipboard",
      },
      {
         id: "grammarFixer",
         title: "❗Grammar Fixer",
         contexts: ["selection"],
         prompt: `Fix any grammar mistakes in this text. Keep the original style and tone. Provide only the corrected text without quotation marks, explanations, or extra formatting.

Text to fix:

`,
         functionType: "callAI-copyClipboard",
      },
      {
         id: "side_summariseText",
         title: "🔥 Summarise Text",
         contexts: ["selection"],
         prompt: `Create a clear and concise summary of the following text. Use proper paragraphs and formatting. Write naturally without placeholder text or brackets.

Text to summarize:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_codeAnalysis",
         title: "💻 Analyze Code",
         contexts: ["selection"],
         prompt: `Analyze this code and provide a complete analysis with proper formatting.

First, identify the programming language. If this is not code, respond with "NOT CODE" and stop.

Then provide:

1. A clear explanation of what the code does, its purpose, and any side effects
2. A refactored version with improvements and best practices

Use this exact format with proper markdown:

---

**Language:** (state the language here)

**Explanation:**

(Write a clear paragraph explaining the code)

**Refactored Code:**

\`\`\`language
(put the improved code here)
\`\`\`

**Improvements Made:**

- (list specific improvements)
- (use bullet points)

---

Code to analyze:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_actionChainFollowup",
         title: "📋 Create Follow-up",
         contexts: ["selection"],
         prompt: `Based on the following text, create a professional follow-up email that is ready to send. Identify actual names, topics, and details from the context. Do not use placeholders like [Name] or brackets.

Use this structure:

Subject: Follow-up on [specific topic from the text]

Hi [identify the actual recipient name from the text],

Following up on our discussion regarding [specific context]. Here are the key points and action items:

• [action item with specific details]
• [action item with specific details]
• [action item with specific details]

Please review and let me know your thoughts by [suggest appropriate deadline].

Best regards

Best regards

---

Text to create follow-up from:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_factCheck",
         title: "✅ Fact Check",
         contexts: ["selection"],
         prompt: `Verify the accuracy of the following claim or statement. Use your knowledge and reasoning to fact-check it.

Provide your response in this exact JSON format:

{
  "action_type": "FACT_CHECK",
  "result_data": {
    "claim_status": "[VERIFIED, REFUTED, or NEEDS_MORE_CONTEXT]",
    "verification_summary": "[One-sentence summary of the finding]",
    "source_citation": {
      "text": "[Title of reliable source]",
      "url": "[URL of reliable source if available, or 'General knowledge']"
    },
    "context_note": "[Brief explanation of why the claim is true/false/uncertain, and any important context]"
  }
}

Then, after the JSON, provide a detailed explanation in plain text.

Claim to verify:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_debugFix",
         title: "🐛 Debug & Fix",
         contexts: ["selection"],
         prompt: `You are analyzing a stack trace or error message. Return ONLY a single JSON object with no additional text, comments, or markdown.

The JSON must follow this exact schema with ONLY these 4 fields (do NOT include confidence_score):

{
  "action_type": "DEBUG_FIX",
  "result_data": {
    "error_summary": "[A concise, one-sentence summary of the root cause]",
    "explanation": "[Detailed explanation of why the error occurred]",
    "suggested_fix_code": "[Complete corrected code snippet or clear fix example]",
    "language": "[Programming language, e.g., Python, JavaScript]"
  }
}

Do not add any extra fields like confidence_score.

Error to analyze:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_codeConvert",
         title: "🔄 Convert Code",
         contexts: ["selection"],
         prompt: `You are converting a code snippet. Return ONLY a single JSON object with no additional text, comments, or markdown.

Assume the target language is JavaScript unless another language is explicitly mentioned in the code.

The JSON must follow this exact schema:

{
  "action_type": "CODE_CONVERT",
  "result_data": {
    "original_language": "[Original programming language]",
    "target_language": "[Target language, default to JavaScript]",
    "converted_code": "[Complete converted code snippet]",
    "notes": "[Brief note on changes or assumptions made]"
  }
}

Code to convert:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_generateDoc",
         title: "📝 Generate Docs",
         contexts: ["selection"],
         prompt: `Generate comprehensive documentation for the following code. Analyze the code and provide:

**Documentation:**
[Complete formatted docstring or comment block in the appropriate format - JSDoc for JavaScript/TypeScript, docstring for Python, JavaDoc for Java, etc.]

**Summary:**
[Brief one-sentence summary of what the code does]

**Parameters:**
[List and explain each parameter if applicable]

**Returns:**
[Describe what the function/method returns]

**Example Usage:**
[Show a practical example of how to use this code]

Code to document:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "callPhoneToTalkAboutSelection",
         title: "📱 Let's Talk about this",
         contexts: ["selection"],
         prompt: `Let's have a natural conversation about this text. Start by introducing what we're discussing, then I can help you with:

• Understanding and clarifying the content
• Explaining complex concepts
• Analyzing themes and arguments
• Generating ideas and solutions
• Providing additional information
• Answering your questions

Begin the conversation naturally and wait for my questions.

Text to discuss:

`,
         functionType: "callVoice-ExternalNumber",
      },
      {
         id: "linkedinPostEmoji",
         title: "👀 Comment using only Emoji",
         contexts: ["selection"],
         functionType: "callAI-copyClipboard",
         prompt: `Respond to this LinkedIn post using only emojis. Provide 3-5 relevant emojis without any text, quotation marks, or hashtags.

Post:

`,
      },
      {
         id: "separator1",
         type: "separator",
         contexts: ["all"],
      },
      {
         id: "configuration",
         title: "Setup Your Own Prompt",
         contexts: ["all"],
      },
   ];
   await storage.set("contextMenuItems", contextMenuItems);
   return await storage.get("contextMenuItems");
}
