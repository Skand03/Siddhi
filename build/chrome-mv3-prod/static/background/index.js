var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,r,a,o,n){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[o]&&s[o],l=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(e,r){if(!l[e]){if(!t[e]){var a="function"==typeof s[o]&&s[o];if(!r&&a)return a(e,!0);if(i)return i(e,!0);if(c&&"string"==typeof e)return c(e);var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}u.resolve=function(r){var a=t[e][1][r];return null!=a?a:r},u.cache={};var p=l[e]=new d.Module(e);t[e][0].call(p.exports,u,p,p.exports,this)}return l[e].exports;function u(e){var t=u.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=t,d.cache=l,d.parent=i,d.register=function(e,r){t[e]=[function(e,t){t.exports=r},{}]},Object.defineProperty(d,"root",{get:function(){return s[o]}}),s[o]=d;for(var p=0;p<r.length;p++)d(r[p]);if(a){var u=d(a);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof e&&e.amd?e(function(){return u}):n&&(this[n]=u)}}({kgW6q:[function(e,t,r){e("./messaging"),e("../../../background/index")},{"./messaging":"iG3ww","../../../background/index":"lSzt3"}],iG3ww:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("~background/messages/callOpenAIReturn"),n=a.interopDefault(o),s=e("~background/messages/copyTextToClipboard"),i=a.interopDefault(s),l=e("~background/messages/identity"),c=a.interopDefault(l),d=e("~background/messages/openOptionPage"),p=a.interopDefault(d),u=e("~background/messages/openSidePanel"),h=a.interopDefault(u),m=e("~background/messages/sendLoadingAction"),g=a.interopDefault(m),f=e("~background/messages/sendToSidepanel"),y=a.interopDefault(f);globalThis.__plasmoInternalPortMap=new Map,chrome.runtime.onMessageExternal.addListener((e,t,r)=>(e?.name,!0)),chrome.runtime.onMessage.addListener((e,t,r)=>{switch(e.name){case"callOpenAIReturn":(0,n.default)({...e,sender:t},{send:e=>r(e)});break;case"copyTextToClipboard":(0,i.default)({...e,sender:t},{send:e=>r(e)});break;case"identity":(0,c.default)({...e,sender:t},{send:e=>r(e)});break;case"openOptionPage":(0,p.default)({...e,sender:t},{send:e=>r(e)});break;case"openSidePanel":(0,h.default)({...e,sender:t},{send:e=>r(e)});break;case"sendLoadingAction":(0,g.default)({...e,sender:t},{send:e=>r(e)});break;case"sendToSidepanel":(0,y.default)({...e,sender:t},{send:e=>r(e)})}return!0}),chrome.runtime.onConnect.addListener(function(e){globalThis.__plasmoInternalPortMap.set(e.name,e),e.onMessage.addListener(function(t){e.name})})},{"~background/messages/callOpenAIReturn":"99mNV","~background/messages/copyTextToClipboard":"04wPx","~background/messages/identity":"eXBsh","~background/messages/openOptionPage":"aHbAy","~background/messages/openSidePanel":"p0m0B","~background/messages/sendLoadingAction":"66dgH","~background/messages/sendToSidepanel":"9HOql","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"99mNV":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var a=e("~lib/openAITypeCall");let o=async(e,t)=>{let{prompt:r,selectedText:o}=e.body,n=await (0,a.callOpenAIReturn)(r,o);t.send(n)};r.default=o},{"~lib/openAITypeCall":"axCYr","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],axCYr:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"callOpenAIReturn",()=>c);var o=e("@plasmohq/storage"),n=e("./clientUUID"),s=e("./anonymousTracking");async function i(e){let t=new o.Storage;if("localhost"===e){let e=await t.get("llmCustomEndpoint");return e}let r={Siddhi:void 0,openai:"https://api.openai.com/v1/chat/completions",groq:"https://api.groq.com/openai/v1/chat/completions",together:"https://api.together.xyz/v1/chat/completions",gemini:"https://generativelanguage.googleapis.com/v1beta/models/MODEL_NAME:generateContent"};return r[e]||r.groq}let l=async()=>{try{let e=await chrome.identity.getAuthToken({interactive:!0});return e?.token||"invalid"}catch(e){return console.error("Failed to get auth token:",e),"invalid"}};async function c(e,t,r,a){let c=new o.Storage;try{let o,d,p;let[u,h,m]=await Promise.all([c.get("llmModel").then(e=>e??"llama-3.1-70b-versatile"),c.get("llmProvider").then(e=>e??"Siddhi"),c.get("llmKeys").then(e=>e??"")]);try{await (0,s.insertStatisticsRow)("statistics",{llmModel:u,llmProvider:h,chromeUUID:await (0,n.getOrCreateClientUUID)()})}catch(e){console.error("Failed to insert statistics row:",e)}let g=r||u,f=a||h,y=m?m[f]:"",w=await i(f),b=new Headers({"Content-Type":"application/json"});"gemini"===f?(w=w.replace("MODEL_NAME",g),w=`${w}?key=${y}`,o=JSON.stringify({contents:[{parts:[{text:`${e}

${t}`}]}]})):(b.set("Authorization",`Bearer ${y||await l()}`),o=JSON.stringify({model:g,messages:[{role:"system",content:e},{role:"user",content:t}],stream:!1}));let x=await fetch(w,{method:"POST",headers:b,body:o});try{d=await x.json()}catch(e){throw console.error("Failed to parse response:",await x.text()),Error(`API returned invalid JSON (Status: ${x.status})`)}if(x.ok||console.error("API Error Details:",{status:x.status,statusText:x.statusText,vendor:f,model:g,endpoint:w.split("?")[0],responseData:d,requestBody:JSON.parse(o)}),401===x.status&&setTimeout(()=>{chrome.runtime.openOptionsPage()},2e3),403===x.status&&"Siddhi"===f&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){if(e[0]?.id)chrome.tabs.sendMessage(e[0].id,{action:"subscriptionLimitReached",text:"3000"});else throw Error("No active tab found.")}),!x.ok){let e="Unknown error";throw e=d.error?d.error.message||d.error.type||JSON.stringify(d.error):d.message?d.message:d.detail?d.detail:"string"==typeof d?d:`${x.statusText} - ${JSON.stringify(d)}`,Error(`API Error (${x.status}): ${e}`)}if("gemini"===f){if(!d.candidates?.length||!d.candidates[0].content?.parts?.length)throw Error("Unexpected response structure from Gemini API");p=d.candidates[0].content.parts[0].text}else{if(!d.choices?.length)throw Error("Unexpected response structure from API");p=d.choices[0].message.content}return{data:p}}catch(e){return console.error("API Call Error:",e),{errorMessage:e instanceof Error?e.message:String(e)}}}},{"@plasmohq/storage":"5Lu1Z","./clientUUID":"7R6fe","./anonymousTracking":"kQzcj","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"5Lu1Z":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"BaseStorage",()=>i),a.export(r,"Storage",()=>l);var o=e("pify"),n=a.interopDefault(o),s=()=>{try{let e=globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if("Chrome"===e[1])return 100>parseInt(e[2])||globalThis.chrome.runtime?.getManifest()?.manifest_version===2}catch{}return!1},i=class{#e;#t;get primaryClient(){return this.#t}#r;get secondaryClient(){return this.#r}#a;get area(){return this.#a}get hasWebApi(){try{return"u">typeof window&&!!window.localStorage}catch(e){return console.error(e),!1}}#o=new Map;#n;get copiedKeySet(){return this.#n}isCopied=e=>this.hasWebApi&&(this.allCopied||this.copiedKeySet.has(e));#s=!1;get allCopied(){return this.#s}getExtStorageApi=()=>globalThis.browser?.storage||globalThis.chrome?.storage;get hasExtensionApi(){try{return!!this.getExtStorageApi()}catch(e){return console.error(e),!1}}isWatchSupported=()=>this.hasExtensionApi;keyNamespace="";isValidKey=e=>e.startsWith(this.keyNamespace);getNamespacedKey=e=>`${this.keyNamespace}${e}`;getUnnamespacedKey=e=>e.slice(this.keyNamespace.length);serde={serializer:JSON.stringify,deserializer:JSON.parse};constructor({area:e="sync",allCopied:t=!1,copiedKeyList:r=[],serde:a={}}={}){this.setCopiedKeySet(r),this.#a=e,this.#s=t,this.serde={...this.serde,...a};try{this.hasWebApi&&(t||r.length>0)&&(this.#r=window.localStorage)}catch{}try{this.hasExtensionApi&&(this.#e=this.getExtStorageApi(),s()?this.#t=(0,n.default)(this.#e[this.area],{exclude:["getBytesInUse"],errorFirst:!1}):this.#t=this.#e[this.area])}catch{}}setCopiedKeySet(e){this.#n=new Set(e)}rawGetAll=()=>this.#t?.get();getAll=async()=>Object.entries(await this.rawGetAll()).filter(([e])=>this.isValidKey(e)).reduce((e,[t,r])=>(e[this.getUnnamespacedKey(t)]=r,e),{});copy=async e=>{let t=void 0===e;if(!t&&!this.copiedKeySet.has(e)||!this.allCopied||!this.hasExtensionApi)return!1;let r=this.allCopied?await this.rawGetAll():await this.#t.get((t?[...this.copiedKeySet]:[e]).map(this.getNamespacedKey));if(!r)return!1;let a=!1;for(let e in r){let t=r[e],o=this.#r?.getItem(e);this.#r?.setItem(e,t),a||=t!==o}return a};rawGet=async e=>this.hasExtensionApi?(await this.#t.get(e))[e]:this.isCopied(e)?this.#r?.getItem(e):null;rawSet=async(e,t)=>(this.isCopied(e)&&this.#r?.setItem(e,t),this.hasExtensionApi&&await this.#t.set({[e]:t}),null);clear=async(e=!1)=>{e&&this.#r?.clear(),await this.#t.clear()};rawRemove=async e=>{this.isCopied(e)&&this.#r?.removeItem(e),this.hasExtensionApi&&await this.#t.remove(e)};removeAll=async()=>{let e=Object.keys(await this.getAll());await Promise.all(e.map(this.remove))};watch=e=>{let t=this.isWatchSupported();return t&&this.#i(e),t};#i=e=>{for(let t in e){let r=this.getNamespacedKey(t),a=this.#o.get(r)?.callbackSet||new Set;if(a.add(e[t]),a.size>1)continue;let o=(e,t)=>{if(t!==this.area||!e[r])return;let a=this.#o.get(r);if(!a)throw Error(`Storage comms does not exist for nsKey: ${r}`);Promise.all([this.parseValue(e[r].newValue),this.parseValue(e[r].oldValue)]).then(([e,r])=>{for(let o of a.callbackSet)o({newValue:e,oldValue:r},t)})};this.#e.onChanged.addListener(o),this.#o.set(r,{callbackSet:a,listener:o})}};unwatch=e=>{let t=this.isWatchSupported();return t&&this.#l(e),t};#l(e){for(let t in e){let r=this.getNamespacedKey(t),a=e[t],o=this.#o.get(r);o&&(o.callbackSet.delete(a),0===o.callbackSet.size&&(this.#o.delete(r),this.#e.onChanged.removeListener(o.listener)))}}unwatchAll=()=>this.#c();#c(){this.#o.forEach(({listener:e})=>this.#e.onChanged.removeListener(e)),this.#o.clear()}async getItem(e){return this.get(e)}async setItem(e,t){await this.set(e,t)}async removeItem(e){return this.remove(e)}},l=class extends i{get=async e=>{let t=this.getNamespacedKey(e),r=await this.rawGet(t);return this.parseValue(r)};set=async(e,t)=>{let r=this.getNamespacedKey(e),a=this.serde.serializer(t);return this.rawSet(r,a)};remove=async e=>{let t=this.getNamespacedKey(e);return this.rawRemove(t)};setNamespace=e=>{this.keyNamespace=e};parseValue=async e=>{try{if(void 0!==e)return this.serde.deserializer(e)}catch(e){console.error(e)}}}},{pify:"9arDK","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"9arDK":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"default",()=>s);let o=(e,t,r,a)=>function(...o){let n=t.promiseModule;return new n((n,s)=>{t.multiArgs?o.push((...e)=>{t.errorFirst?e[0]?s(e):(e.shift(),n(e)):n(e)}):t.errorFirst?o.push((e,t)=>{e?s(e):n(t)}):o.push(n),Reflect.apply(e,this===r?a:this,o)})},n=new WeakMap;function s(e,t){t={exclude:[/.+(?:Sync|Stream)$/],errorFirst:!0,promiseModule:Promise,...t};let r=typeof e;if(!(null!==e&&("object"===r||"function"===r)))throw TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":r}\``);let a=(e,r)=>{let a=n.get(e);if(a||(a={},n.set(e,a)),r in a)return a[r];let o=e=>"string"==typeof e||"symbol"==typeof r?r===e:e.test(r),s=Reflect.getOwnPropertyDescriptor(e,r),i=void 0===s||s.writable||s.configurable,l=t.include?t.include.some(e=>o(e)):!t.exclude.some(e=>o(e)),c=l&&i;return a[r]=c,c},s=new WeakMap,i=new Proxy(e,{apply(e,r,a){let n=s.get(e);if(n)return Reflect.apply(n,r,a);let l=t.excludeMain?e:o(e,t,i,e);return s.set(e,l),Reflect.apply(l,r,a)},get(e,r){let n=e[r];if(!a(e,r)||n===Function.prototype[r])return n;let l=s.get(n);if(l)return l;if("function"==typeof n){let r=o(n,t,i,e);return s.set(n,r),r}return n}});return i}},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],hbR2Q:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"7R6fe":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"getOrCreateClientUUID",()=>n);var o=e("@plasmohq/storage");async function n(){let e=new o.Storage,t=await e.get("clientUUID");return t||(t=self.crypto.randomUUID(),await e.set("clientUUID",t)),t}},{"@plasmohq/storage":"5Lu1Z","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],kQzcj:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"insertStatisticsRow",()=>o);let o=async(e,t)=>{let r=void 0,a=void 0;if(!r||!a)return{success:!1,error:"no key spec"};try{let o=await fetch(`${r}/rest/v1/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`,apikey:a},body:JSON.stringify(t)});if(!o.ok){let e=await o.json();return console.error("Error inserting row:",e),{success:!1,error:`Error inserting row: ${o.status} ${o.statusText}`}}return{success:!0}}catch(e){return{success:!1,error:String(e)}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"04wPx":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");async function o(e){if(e.errorMessage)chrome.tabs.query({active:!0,currentWindow:!0},function(t){if(t[0]?.id)chrome.tabs.sendMessage(t[0].id,{action:"error",text:e.errorMessage});else throw Error("No active tab found.")});else try{chrome.tabs.query({active:!0,currentWindow:!0},function(t){if(t[0]?.id)chrome.tabs.sendMessage(t[0].id,{action:"copyToClipboard",text:e.data});else throw Error("No active tab found.")})}catch(e){console.error("Failed to copy text to clipboard:",e)}}a.defineInteropFlag(r),a.export(r,"copyTextToClipboardHandler",()=>o);let n=async(e,t)=>{o(e.body)};r.default=n},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],eXBsh:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let a=async(e,t)=>{let r=await chrome.identity.getProfileUserInfo({});t.send({data:r})};r.default=a},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],aHbAy:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"openOptionsPageHandler",()=>s);var o=e("@plasmohq/storage");let n=new o.Storage;async function s(){return await n.set("activeTab","promptFactory"),chrome.runtime.openOptionsPage(),{message:"Options page opened"}}let i=async(e,t)=>{let r=await s();t.send(r)};r.default=i},{"@plasmohq/storage":"5Lu1Z","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],p0m0B:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let a=async(e,t)=>{await chrome.sidePanel.open({tabId:e.sender.tab.id??void 0}),t.send("ok")};r.default=a},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"66dgH":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");async function o(){return chrome.tabs.query({active:!0,currentWindow:!0},function(e){if(e[0]?.id)chrome.tabs.sendMessage(e[0].id,{action:"loadingAction"});else throw Error("No active tab found.")}),{message:"Options page opened"}}a.defineInteropFlag(r),a.export(r,"sendLoadingActionHandler",()=>o);let n=async(e,t)=>{let r=await o();t.send(r)};r.default=n},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"9HOql":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let a=async(e,t)=>{try{await chrome.runtime.sendMessage({action:"send_to_sidepanel",payload:e.body.data,menuItemId:e.body.menuItemId,selectedText:e.body.selectedText,prompt:e.body.prompt})}catch(e){t.send("Ok")}t.send("Ok")};r.default=a},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],lSzt3:[function(e,t,r){var a=e("@plasmohq/storage"),o=e("~background/init"),n=e("~lib/cleanContextMenu"),s=e("~lib/openAITypeCall"),i=e("~lib/vapiOutbound"),l=e("./messages/openOptionPage"),c=e("./messages/sendLoadingAction"),d=e("./messages/copyTextToClipboard");let p=new a.Storage;chrome.runtime.onInstalled.addListener(async e=>{e.reason==chrome.runtime.OnInstalledReason.INSTALL?chrome.runtime.openOptionsPage():e.reason===chrome.runtime.OnInstalledReason.UPDATE&&console.log("Extension updated from version",e.previousVersion,"to",chrome.runtime.getManifest().version),chrome.runtime.setUninstallURL("/uninstall");let t=await (0,o.initializeStorage)(),r=(0,n.cleanProperties)(t);r.forEach(e=>{chrome.contextMenus.create(e)})}),chrome.contextMenus.onClicked.addListener((e,t)=>{let r=e.menuItemId;r.startsWith("side_")&&chrome.sidePanel.open({tabId:t.id??void 0})}),chrome.contextMenus.onClicked.addListener(async(e,t)=>{let r;let a=e.selectionText,o=await p.get("contextMenuItems"),n=o.find(t=>t.id===e.menuItemId);switch(e.menuItemId){case n.id:if("configuration"===n.id&&await (0,l.openOptionsPageHandler)(),"callAI-copyClipboard"===n.functionType){await (0,c.sendLoadingActionHandler)(),r=await (0,s.callOpenAIReturn)(n.prompt,a),await (0,d.copyTextToClipboardHandler)(r);break}if("callVoice-ExternalNumber"===n.functionType){await (0,i.createCall)(n.prompt,a,n.extraArgs?.vapiRecipientPhoneNumber??"Hi, this is your assistent calling. How can I help you?",n.extraArgs?.vapiFirstMessage??"");break}if("callAI-openSideBar"===n.functionType){r=await (0,s.callOpenAIReturn)(n.prompt,a);try{chrome.runtime.sendMessage({action:"send_to_sidepanel",payload:r.data})}catch(e){console.error("no sidebar")}}break;default:console.warn("Unhandled menu item:",e.menuItemId)}})},{"@plasmohq/storage":"5Lu1Z","~background/init":"kJyyQ","~lib/cleanContextMenu":"5xZs6","~lib/openAITypeCall":"axCYr","~lib/vapiOutbound":"fRXLL","./messages/openOptionPage":"aHbAy","./messages/sendLoadingAction":"66dgH","./messages/copyTextToClipboard":"04wPx"}],kJyyQ:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"initializeStorage",()=>s);var o=e("@plasmohq/storage");let n=new o.Storage;async function s(){let e=await n.get("contextMenuItems");if(e)return e;let t=[{id:"postComment",title:"\uD83D\uDCAC Comment Post",contexts:["selection"],prompt:`Read the following social media post carefully and create a thoughtful, relevant comment that directly responds to the content.

Instructions:
- Analyze the main topic, sentiment, and key points of the post
- Write a natural, conversational comment that adds value or shows genuine engagement
- Match the tone of the post (professional, casual, humorous, supportive, etc.)
- Keep it concise (1-3 sentences maximum)
- Be authentic and specific to what was actually said in the post
- Do NOT use generic responses like "Great post!" or "Thanks for sharing"
- Do NOT use quotation marks, hashtags, or extra formatting
- Provide ONLY the comment text, nothing else

Post to comment on:

`,functionType:"callAI-copyClipboard"},{id:"grammarFixer",title:"\u2757Grammar Fixer",contexts:["selection"],prompt:`Fix any grammar mistakes in this text. Keep the original style and tone. Provide only the corrected text without quotation marks, explanations, or extra formatting.

Text to fix:

`,functionType:"callAI-copyClipboard"},{id:"side_summariseText",title:"\uD83D\uDD25 Summarise Text",contexts:["selection"],prompt:`Create a clear and concise summary of the following text. Use proper paragraphs and formatting. Write naturally without placeholder text or brackets.

Text to summarize:

`,functionType:"callAI-openSideBar"},{id:"side_codeAnalysis",title:"\uD83D\uDCBB Analyze Code",contexts:["selection"],prompt:`Analyze this code and provide a complete analysis with proper formatting.

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

`,functionType:"callAI-openSideBar"},{id:"side_actionChainFollowup",title:"\uD83D\uDCCB Create Follow-up",contexts:["selection"],prompt:`Based on the following text, create a professional follow-up email that is ready to send. Identify actual names, topics, and details from the context. Do not use placeholders like [Name] or brackets.

Use this structure:

**Subject:** Follow-up on [specific topic from the text]

**Email Body:**

Hi [identify the actual recipient name from the text],

Following up on our discussion regarding [specific context]. Here are the key points and action items:

\u2022 [action item with specific details]
\u2022 [action item with specific details]
\u2022 [action item with specific details]

Please review and let me know your thoughts by [suggest appropriate deadline].

Best regards

---

Text to create follow-up from:

`,functionType:"callAI-openSideBar"},{id:"side_factCheck",title:"\u2705 Fact Check",contexts:["selection"],prompt:`Verify the accuracy of the following claim or statement. Use your knowledge and reasoning to fact-check it.

Provide your response in this format:

**Claim Status:** [VERIFIED \u2705 | REFUTED \u274c | NEEDS MORE CONTEXT \u26a0\ufe0f]

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

`,functionType:"callAI-openSideBar"},{id:"side_debugFix",title:"\uD83D\uDC1B Debug & Fix",contexts:["selection"],prompt:`Analyze the following code or error and provide the COMPLETE CORRECTED CODE. Always provide the full working code, not just explanations.

**\ud83d Issue Found:**
[Brief description of what's wrong with the code]

**\u2705 CORRECTED CODE:**

\`\`\`[language]
[COMPLETE WORKING CODE with all fixes applied - paste the entire corrected version here]
\`\`\`

**\ud83d What Was Fixed:**
- [List each specific change made]
- [Explain why each change was necessary]
- [Include any important notes about the fix]

**\ud83d Prevention Tips:**
[How to avoid this issue in the future]

Code/Error to fix:

`,functionType:"callAI-openSideBar"},{id:"side_codeConvert",title:"\uD83D\uDD04 Convert Code",contexts:["selection"],prompt:`Convert the following code to another programming language. The target language will be selected from the dropdown in the sidebar.

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

`,functionType:"callAI-openSideBar"},{id:"side_generateDoc",title:"\uD83D\uDCDD Generate Docs",contexts:["selection"],prompt:`Generate comprehensive documentation for the following code. Analyze the code and provide:

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

`,functionType:"callAI-openSideBar"},{id:"callPhoneToTalkAboutSelection",title:"\uD83D\uDCF1 Let's Talk about this",contexts:["selection"],prompt:`Let's have a natural conversation about this text. Start by introducing what we're discussing, then I can help you with:

\u2022 Understanding and clarifying the content
\u2022 Explaining complex concepts
\u2022 Analyzing themes and arguments
\u2022 Generating ideas and solutions
\u2022 Providing additional information
\u2022 Answering your questions

Begin the conversation naturally and wait for my questions.

Text to discuss:

`,functionType:"callAI-openSideBar"},{id:"linkedinPostEmoji",title:"\uD83D\uDC40 Comment using only Emoji",contexts:["selection"],functionType:"callAI-copyClipboard",prompt:`Respond to this LinkedIn post using only emojis. Provide 3-5 relevant emojis without any text, quotation marks, or hashtags.

Post:

`},{id:"separator1",type:"separator",contexts:["all"]},{id:"configuration",title:"Setup Your Own Prompt",contexts:["all"]}];return await n.set("contextMenuItems",t),await n.get("contextMenuItems")}},{"@plasmohq/storage":"5Lu1Z","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],"5xZs6":[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"cleanProperties",()=>n);let o=["documentUrlPatterns","checked","title","contexts","enabled","targetUrlPatterns","onclick","parentId","type","id","visible"];function n(e){return(e=Object.values(e)).map(e=>{let t={};return Object.keys(e).forEach(r=>{o.includes(r)&&(t[r]=e[r])}),t})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],fRXLL:[function(e,t,r){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"createCall",()=>n);var o=e("@plasmohq/storage");let n=async(e,t,r,a)=>{let n=new o.Storage,s=await n.get("voice_outbound_authToken"),i=await n.get("voice_outbound_phoneNumberId"),l={Authorization:`Bearer ${s}`,"Content-Type":"application/json"};try{let o=await fetch("https://api.vapi.ai/call/phone",{method:"POST",headers:l,body:JSON.stringify({assistant:{firstMessage:a,model:{provider:"openai",model:"gpt-4o-mini",messages:[{role:"system",content:e+t}]},voice:"jennifer-playht"},phoneNumberId:i,customer:{number:r}})});201===o.status?await o.json():await o.text()}catch(e){console.error("Error creating call:",e)}}},{"@plasmohq/storage":"5Lu1Z","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}]},["kgW6q"],"kgW6q","parcelRequire2d1b"),globalThis.define=t;