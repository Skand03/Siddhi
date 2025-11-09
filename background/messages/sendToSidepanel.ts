import type { PlasmoMessaging } from "@plasmohq/messaging";

export type RequestBody = {
   data: string;
   menuItemId?: string;
   selectedText?: string;
   prompt?: string;
};

const handler: PlasmoMessaging.MessageHandler = async (request, response) => {
   try {
      await chrome.runtime.sendMessage({
         action: "send_to_sidepanel",
         payload: request.body.data,
         menuItemId: request.body.menuItemId,
         selectedText: request.body.selectedText,
         prompt: request.body.prompt,
      });
   } catch (error) {
      response.send("Ok");
   }
   response.send("Ok");
};

export default handler;
