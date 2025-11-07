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

**Subject:** Follow-up on [specific topic from the text]

**Email Body:**

Hi [identify the actual recipient name from the text],

Following up on our discussion regarding [specific context]. Here are the key points and action items:

• [action item with specific details]
• [action item with specific details]
• [action item with specific details]

Please review and let me know your thoughts by [suggest appropriate deadline].

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

Provide your response in this format:

**Claim Status:** [VERIFIED ✅ | REFUTED ❌ | NEEDS MORE CONTEXT ⚠️]

**Quick Summary:**
[One clear sentence about whether the claim is true, false, or uncertain]

**Detailed Explanation:**
[Explain why the claim is verified/refuted/uncertain. Include relevant facts, context, and reasoning]

**Sources & References:**
- [List any reliable sources that support this finding]
- [Include general knowledge if specific sources aren't available]

**Additional Context:**
[Any important nuances, limitations, or related information the user should know]

Claim to verify:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_debugFix",
         title: "🐛 Debug & Fix",
         contexts: ["selection"],
         prompt: `Analyze the following error or stack trace and provide a clear, helpful solution.

Provide your response in this format:

**Error Summary:**
[A clear one-sentence summary of what went wrong]

**Explanation:**
[Detailed explanation of why this error occurred, what causes it, and the underlying issue]

**Solution:**

\`\`\`[language]
[Complete corrected code snippet with the fix applied]
\`\`\`

**What Changed:**
- [Explain the specific fix applied]
- [Note any important changes or considerations]
- [Provide tips to avoid this error in the future]

Error to analyze:

`,
         functionType: "callAI-openSideBar",
      },
      {
         id: "side_codeConvert",
         title: "🔄 Convert Code",
         contexts: ["selection"],
         prompt: `Convert the following code to another programming language. Assume the target language is JavaScript unless another language is explicitly mentioned in the code.

Provide your response in this format:

**Original Language:** [Name of the original language]

**Target Language:** [Name of the target language]

**Converted Code:**

\`\`\`[target-language]
[Complete converted code here - fully functional and ready to use]
\`\`\`

**Key Changes:**
- [Explain important conversions or differences]
- [Note any assumptions made]
- [Highlight syntax or structure changes]

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
