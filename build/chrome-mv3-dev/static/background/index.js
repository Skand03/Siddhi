(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3TX7Z":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\College_Work\\Siddhi_Extension\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _messaging = require("./messaging");
var _index = require("../../../background/index");

},{"./messaging":"gGuoe","../../../background/index":"leaNT"}],"gGuoe":[function(require,module,exports) {
// @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _callOpenAIReturn = require("~background/messages/callOpenAIReturn");
var _callOpenAIReturnDefault = parcelHelpers.interopDefault(_callOpenAIReturn);
var _copyTextToClipboard = require("~background/messages/copyTextToClipboard");
var _copyTextToClipboardDefault = parcelHelpers.interopDefault(_copyTextToClipboard);
var _identity = require("~background/messages/identity");
var _identityDefault = parcelHelpers.interopDefault(_identity);
var _openOptionPage = require("~background/messages/openOptionPage");
var _openOptionPageDefault = parcelHelpers.interopDefault(_openOptionPage);
var _openSidePanel = require("~background/messages/openSidePanel");
var _openSidePanelDefault = parcelHelpers.interopDefault(_openSidePanel);
var _sendLoadingAction = require("~background/messages/sendLoadingAction");
var _sendLoadingActionDefault = parcelHelpers.interopDefault(_sendLoadingAction);
var _sendToSidepanel = require("~background/messages/sendToSidepanel");
var _sendToSidepanelDefault = parcelHelpers.interopDefault(_sendToSidepanel);
globalThis.__plasmoInternalPortMap = new Map();
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse)=>{
    request?.name;
    return true;
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    switch(request.name){
        case "callOpenAIReturn":
            (0, _callOpenAIReturnDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "copyTextToClipboard":
            (0, _copyTextToClipboardDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "identity":
            (0, _identityDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "openOptionPage":
            (0, _openOptionPageDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "openSidePanel":
            (0, _openSidePanelDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "sendLoadingAction":
            (0, _sendLoadingActionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "sendToSidepanel":
            (0, _sendToSidepanelDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        default:
            break;
    }
    return true;
});
chrome.runtime.onConnect.addListener(function(port) {
    globalThis.__plasmoInternalPortMap.set(port.name, port);
    port.onMessage.addListener(function(request) {
        port.name;
    });
});

},{"~background/messages/callOpenAIReturn":"6lrlu","~background/messages/copyTextToClipboard":"1xAPU","~background/messages/identity":"beAx4","~background/messages/openOptionPage":"kkxdG","~background/messages/openSidePanel":"hNrxr","~background/messages/sendLoadingAction":"cKuJ9","~background/messages/sendToSidepanel":"bb0po","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"6lrlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _openAITypeCall = require("~lib/openAITypeCall");
const handler = async (request, response)=>{
    const { prompt, selectedText } = request.body;
    const responseFromApi = await (0, _openAITypeCall.callOpenAIReturn)(prompt, selectedText);
    response.send(responseFromApi);
};
exports.default = handler;

},{"~lib/openAITypeCall":"7g2HP","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"7g2HP":[function(require,module,exports) {
// ------------------------------------------------------------------------------------
// This file helps to connect to any of the API supporting the OPEN AI standards
// ------------------------------------------------------------------------------------
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// May change the signature and make it streamlined.
parcelHelpers.export(exports, "callOpenAIReturn", ()=>callOpenAIReturn);
var _storage = require("@plasmohq/storage");
var _clientUUID = require("./clientUUID");
var _anonymousTracking = require("./anonymousTracking");
// Function to map vendor names to their respective API endpoints
async function vendorToEndpoint(vendor) {
    const storage = new (0, _storage.Storage)();
    if (vendor === "localhost") {
        const customUrl = await storage.get("llmCustomEndpoint");
        return customUrl;
    }
    const endpoints = {
        "Siddhi": undefined,
        openai: "https://api.openai.com/v1/chat/completions",
        groq: "https://api.groq.com/openai/v1/chat/completions",
        together: "https://api.together.xyz/v1/chat/completions",
        gemini: "https://generativelanguage.googleapis.com/v1beta/models/MODEL_NAME:generateContent"
    };
    return endpoints[vendor] || endpoints["groq"];
}
// Constants
const DEFAULT_MODEL = "llama-3.1-70b-versatile";
const DEFAULT_VENDOR = "Siddhi";
// TODO: move somewhere else
const getAccessToken = async ()=>{
    try {
        const result = await chrome.identity.getAuthToken({
            interactive: true
        });
        return result?.token || "invalid";
    } catch (error) {
        console.error("Failed to get auth token:", error);
        return "invalid";
    }
};
async function callOpenAIReturn(systemPrompt, message, overrideModel, overrideProvider) {
    const storage = new (0, _storage.Storage)();
    try {
        const [storedModel, storedVendor, llmKeys] = await Promise.all([
            storage.get("llmModel").then((model)=>model ?? DEFAULT_MODEL),
            storage.get("llmProvider").then((provider)=>provider ?? DEFAULT_VENDOR),
            storage.get("llmKeys").then((key)=>key ?? "")
        ]);
        //Capture statistics, so that we can provide prioritarisation for features based on the provider/model most used.
        try {
            await (0, _anonymousTracking.insertStatisticsRow)("statistics", {
                llmModel: storedModel,
                llmProvider: storedVendor,
                chromeUUID: await (0, _clientUUID.getOrCreateClientUUID)()
            });
        } catch (error) {
            console.error("Failed to insert statistics row:", error); // Log the error
        }
        const openAIModel = overrideModel || storedModel;
        const vendor = overrideProvider || storedVendor;
        const apiKey = llmKeys ? llmKeys[vendor] : "";
        let openAIEndpoint = await vendorToEndpoint(vendor);
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        let bodyReq;
        if (vendor === "gemini") {
            // Gemini uses its own native API format
            openAIEndpoint = openAIEndpoint.replace("MODEL_NAME", openAIModel);
            openAIEndpoint = `${openAIEndpoint}?key=${apiKey}`;
            bodyReq = JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `${systemPrompt}\n\n${message}`
                            }
                        ]
                    }
                ]
            });
        } else {
            // OpenAI-compatible format for other providers
            headers.set("Authorization", `Bearer ${apiKey || await getAccessToken()}`);
            bodyReq = JSON.stringify({
                model: openAIModel,
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                stream: false
            });
        }
        const response = await fetch(openAIEndpoint, {
            method: "POST",
            headers,
            body: bodyReq
        });
        let data;
        try {
            data = await response.json();
        } catch (parseError) {
            console.error("Failed to parse response:", await response.text());
            throw new Error(`API returned invalid JSON (Status: ${response.status})`);
        }
        // Log detailed error information for debugging
        if (!response.ok) console.error("API Error Details:", {
            status: response.status,
            statusText: response.statusText,
            vendor: vendor,
            model: openAIModel,
            endpoint: openAIEndpoint.split("?")[0],
            responseData: data,
            requestBody: JSON.parse(bodyReq)
        });
        //Open the option page if the request is unauthorised; Most of the time the user didn't insert the right API keys.
        if (response.status === 401) setTimeout(()=>{
            chrome.runtime.openOptionsPage();
        }, 2000);
        //Extension-os.com || Free Tier Exhausted
        if (response.status === 403 && vendor === "Siddhi") chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            if (tabs[0]?.id) chrome.tabs.sendMessage(tabs[0].id, {
                action: "subscriptionLimitReached",
                text: "3000"
            });
            else throw new Error("No active tab found.");
        });
        if (!response.ok) {
            // Get detailed error message - handle different API error formats
            let errorMsg = "Unknown error";
            if (data.error) // OpenAI, Groq format: { error: { message: "...", type: "..." } }
            errorMsg = data.error.message || data.error.type || JSON.stringify(data.error);
            else if (data.message) // Some APIs use { message: "..." }
            errorMsg = data.message;
            else if (data.detail) // Some APIs use { detail: "..." }
            errorMsg = data.detail;
            else if (typeof data === "string") errorMsg = data;
            else errorMsg = `${response.statusText} - ${JSON.stringify(data)}`;
            throw new Error(`API Error (${response.status}): ${errorMsg}`);
        }
        // Parse response based on vendor
        let responseText;
        if (vendor === "gemini") {
            // Gemini format: { candidates: [{ content: { parts: [{ text: "..." }] } }] }
            if (!data.candidates?.length || !data.candidates[0].content?.parts?.length) throw new Error("Unexpected response structure from Gemini API");
            responseText = data.candidates[0].content.parts[0].text;
        } else {
            // OpenAI format: { choices: [{ message: { content: "..." } }] }
            if (!data.choices?.length) throw new Error("Unexpected response structure from API");
            responseText = data.choices[0].message.content;
        }
        return {
            data: responseText
        };
    } catch (error) {
        console.error("API Call Error:", error);
        return {
            errorMessage: error instanceof Error ? error.message : String(error)
        };
    }
}

},{"@plasmohq/storage":"bFG4Z","./clientUUID":"4ZMCH","./anonymousTracking":"9PX1P","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"bFG4Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #e;
    get primaryClient() {
        return this.#e;
    }
    #t;
    get secondaryClient() {
        return this.#t;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [], serde: r = {} } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#t = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#e = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#e = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#e?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#e.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#t?.getItem(a);
            this.#t?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>this.hasExtensionApi ? (await this.#e.get(e))[e] : this.isCopied(e) ? this.#t?.getItem(e) : null;
    rawSet = async (e, t)=>(this.isCopied(e) && this.#t?.setItem(e, t), this.hasExtensionApi && await this.#e.set({
            [e]: t
        }), null);
    clear = async (e = !1)=>{
        e && this.#t?.clear(), await this.#e.clear();
    };
    rawRemove = async (e)=>{
        this.isCopied(e) && this.#t?.removeItem(e), this.hasExtensionApi && await this.#e.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await Promise.all(t.map(this.remove));
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([p, d])=>{
                    for (let m of h.callbackSet)m({
                        newValue: p,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async removeItem(e) {
        return this.remove(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"1siwu","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"1siwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4ZMCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOrCreateClientUUID", ()=>getOrCreateClientUUID);
var _storage = require("@plasmohq/storage");
async function getOrCreateClientUUID() {
    const storage = new (0, _storage.Storage)();
    let clientId = await storage.get("clientUUID");
    if (!clientId) {
        // Generate a unique client ID, the actual value is not relevant
        clientId = self.crypto.randomUUID();
        await storage.set("clientUUID", clientId);
    }
    return clientId;
}

},{"@plasmohq/storage":"bFG4Z","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"9PX1P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertStatisticsRow", ()=>insertStatisticsRow);
const insertStatisticsRow = async (table, data)=>{
    // If you want to add tracking, provide two keys from SUPABASE;
    // DO NOT TRACK USER EMAIL WITHOUT CONSENT.
    // Use the getOrCreateClientUUID if you want an anonymous but consisted UUID.
    const supabaseUrl = undefined;
    const supabaseKey = undefined; // This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.
    if (!supabaseUrl || !supabaseKey) return {
        success: false,
        error: "no key spec"
    };
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${supabaseKey}`,
                apikey: supabaseKey
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error inserting row:", errorData);
            return {
                success: false,
                error: `Error inserting row: ${response.status} ${response.statusText}`
            };
        }
        return {
            success: true
        }; // Indicate success
    } catch (error) {
        return {
            success: false,
            error: String(error)
        }; // Handle unexpected errors
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"1xAPU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copyTextToClipboardHandler", ()=>copyTextToClipboardHandler);
async function copyTextToClipboardHandler(req) {
    if (!req.errorMessage) try {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            if (tabs[0]?.id) chrome.tabs.sendMessage(tabs[0].id, {
                action: "copyToClipboard",
                text: req.data
            });
            else throw new Error("No active tab found.");
        });
    } catch (error) {
        console.error("Failed to copy text to clipboard:", error);
    }
    else chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        if (tabs[0]?.id) chrome.tabs.sendMessage(tabs[0].id, {
            action: "error",
            text: req.errorMessage
        });
        else throw new Error("No active tab found.");
    });
}
const handler = async (req, res)=>{
    copyTextToClipboardHandler(req.body);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"beAx4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    const data = await chrome.identity.getProfileUserInfo({});
    res.send({
        data
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"kkxdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openOptionsPageHandler", ()=>openOptionsPageHandler);
var _storage = require("@plasmohq/storage");
const storage = new (0, _storage.Storage)();
async function openOptionsPageHandler() {
    await storage.set("activeTab", "promptFactory");
    chrome.runtime.openOptionsPage();
    return {
        message: "Options page opened"
    };
}
const handler = async (req, res)=>{
    const result = await openOptionsPageHandler();
    res.send(result);
};
exports.default = handler;

},{"@plasmohq/storage":"bFG4Z","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"hNrxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    await chrome.sidePanel.open({
        tabId: req.sender.tab.id ?? undefined
    });
    res.send("ok");
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"cKuJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendLoadingActionHandler", ()=>sendLoadingActionHandler);
async function sendLoadingActionHandler() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        if (tabs[0]?.id) chrome.tabs.sendMessage(tabs[0].id, {
            action: "loadingAction"
        });
        else throw new Error("No active tab found.");
    });
    return {
        message: "Options page opened"
    };
}
const handler = async (req, res)=>{
    const result = await sendLoadingActionHandler();
    res.send(result);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"bb0po":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (request, response)=>{
    try {
        await chrome.runtime.sendMessage({
            action: "send_to_sidepanel",
            payload: request.body.data,
            menuItemId: request.body.menuItemId,
            selectedText: request.body.selectedText,
            prompt: request.body.prompt
        });
    } catch (error) {
        response.send("Ok");
    }
    response.send("Ok");
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"leaNT":[function(require,module,exports) {
// nneolbdbfjmdjmnpginhclljaphcdnad
var _storage = require("@plasmohq/storage");
var _init = require("~background/init");
var _cleanContextMenu = require("~lib/cleanContextMenu");
var _openAITypeCall = require("~lib/openAITypeCall");
var _vapiOutbound = require("~lib/vapiOutbound");
// Importing the handler and renaming it to openOptionPage
var _openOptionPage = require("./messages/openOptionPage"); // Fixed import path
var _sendLoadingAction = require("./messages/sendLoadingAction");
var _copyTextToClipboard = require("./messages/copyTextToClipboard");
const storage = new (0, _storage.Storage)();
// Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
// */
chrome.runtime.onInstalled.addListener(async (details)=>{
    if (details.reason == chrome.runtime.OnInstalledReason.INSTALL) ;
    else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) console.log("Extension updated from version", details.previousVersion, "to", chrome.runtime.getManifest().version);
    //Setup the uninstall page
    const uninstallUrl = "";
    chrome.runtime.setUninstallURL(uninstallUrl + "/uninstall");
    // It need to change in the future, unless i use two lists and i use the ID as a intersection?
    const contextConfigItems = await (0, _init.initializeStorage)();
    //Typescript can cast to an interface (or at least i can't find a way to do it)
    //Therefore we clean our configObject to be adapted to the chrome.contextMenu.CreateProperties()
    const cleanedContextMenuItems = (0, _cleanContextMenu.cleanProperties)(contextConfigItems);
    cleanedContextMenuItems.forEach((item)=>{
        chrome.contextMenus.create(item);
    });
});
/*
Listener: ONLY FOR THE SIDEBAR.
Why do we need the extra listener? The chrome.sidePanel.open doesn't work afer the storage.get (called in the other listener) is invoked.
*/ chrome.contextMenus.onClicked.addListener((info, tab)=>{
    const itemId = info.menuItemId;
    if (itemId.startsWith("side_")) chrome.sidePanel.open({
        tabId: tab.id ?? undefined
    });
});
/*
General Listener for the onClicked.
*/ chrome.contextMenus.onClicked.addListener(async (info, tab)=>{
    const message = info.selectionText;
    let response;
    const items = await storage.get("contextMenuItems");
    //In the past we've used the hashmap, however it would overcomplicated the rest of the codebase always because we are not able to use the chrome.storage and the sidebar.open in the same function. This can be reviewed and use an hashmap if we find the solution for that bug. At the moment i don't expect having more than 20 prompt per user, so readability and clean code beats efficiency.
    const element = items.find((item)=>item.id === info.menuItemId);
    //We have to use handler, as the other option would be to modify how plasmo work, or extend the responseClass to accept a return that is not VOID!
    switch(info.menuItemId){
        case element.id:
            if (element.id === "configuration") await (0, _openOptionPage.openOptionsPageHandler)();
            if (element.functionType === "callAI-copyClipboard") {
                await (0, _sendLoadingAction.sendLoadingActionHandler)();
                response = await (0, _openAITypeCall.callOpenAIReturn)(element.prompt, message);
                await (0, _copyTextToClipboard.copyTextToClipboardHandler)(response);
                break;
            }
            if (element.functionType === "callVoice-ExternalNumber") {
                //In this case we do know that the callVoice will have those argument setup.
                await (0, _vapiOutbound.createCall)(element.prompt, message, element.extraArgs?.vapiRecipientPhoneNumber ?? "Hi, this is your assistent calling. How can I help you?", element.extraArgs?.vapiFirstMessage ?? "");
                break;
            }
            if (element.functionType === "callAI-openSideBar") {
                response = await (0, _openAITypeCall.callOpenAIReturn)(element.prompt, message);
                try {
                    chrome.runtime.sendMessage({
                        action: "send_to_sidepanel",
                        payload: response.data
                    });
                } catch (error) {
                    console.error("no sidebar");
                }
            }
            break;
        default:
            console.warn("Unhandled menu item:", info.menuItemId);
    }
});

},{"@plasmohq/storage":"bFG4Z","~background/init":"gt77K","~lib/cleanContextMenu":"76Tip","~lib/openAITypeCall":"7g2HP","~lib/vapiOutbound":"dSaH1","./messages/openOptionPage":"kkxdG","./messages/sendLoadingAction":"cKuJ9","./messages/copyTextToClipboard":"1xAPU"}],"gt77K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeStorage", ()=>initializeStorage);
var _storage = require("@plasmohq/storage");
const storage = new (0, _storage.Storage)();
async function initializeStorage() {
    const initState = await storage.get("contextMenuItems");
    if (initState) return initState;
    const contextMenuItems = [
        {
            id: "postComment",
            title: "\uD83D\uDCAC Comment Post",
            contexts: [
                "selection"
            ],
            prompt: `Read the following social media post carefully and create a thoughtful, relevant comment that directly responds to the content.

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

`,
            functionType: "callAI-copyClipboard"
        },
        {
            id: "grammarFixer",
            title: "\u2757Grammar Fixer",
            contexts: [
                "selection"
            ],
            prompt: `Fix any grammar mistakes in this text. Keep the original style and tone. Provide only the corrected text without quotation marks, explanations, or extra formatting.

Text to fix:

`,
            functionType: "callAI-copyClipboard"
        },
        {
            id: "side_summariseText",
            title: "\uD83D\uDD25 Summarise Text",
            contexts: [
                "selection"
            ],
            prompt: `Create a clear and concise summary of the following text. Use proper paragraphs and formatting. Write naturally without placeholder text or brackets.

Text to summarize:

`,
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_codeAnalysis",
            title: "\uD83D\uDCBB Analyze Code",
            contexts: [
                "selection"
            ],
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
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_actionChainFollowup",
            title: "\uD83D\uDCCB Create Follow-up",
            contexts: [
                "selection"
            ],
            prompt: `Based on the following text, create a professional follow-up email that is ready to send. Identify actual names, topics, and details from the context. Do not use placeholders like [Name] or brackets.

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

`,
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_factCheck",
            title: "\u2705 Fact Check",
            contexts: [
                "selection"
            ],
            prompt: `Verify the accuracy of the following claim or statement. Use your knowledge and reasoning to fact-check it.

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

`,
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_debugFix",
            title: "\uD83D\uDC1B Debug & Fix",
            contexts: [
                "selection"
            ],
            prompt: `Analyze the following code or error and provide the COMPLETE CORRECTED CODE. Always provide the full working code, not just explanations.

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

`,
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_codeConvert",
            title: "\uD83D\uDD04 Convert Code",
            contexts: [
                "selection"
            ],
            prompt: `Convert the following code to another programming language. The target language will be selected from the dropdown in the sidebar.

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
            functionType: "callAI-openSideBar"
        },
        {
            id: "side_generateDoc",
            title: "\uD83D\uDCDD Generate Docs",
            contexts: [
                "selection"
            ],
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
            functionType: "callAI-openSideBar"
        },
        {
            id: "callPhoneToTalkAboutSelection",
            title: "\uD83D\uDCF1 Let's Talk about this",
            contexts: [
                "selection"
            ],
            prompt: `Let's have a natural conversation about this text. Start by introducing what we're discussing, then I can help you with:

\u2022 Understanding and clarifying the content
\u2022 Explaining complex concepts
\u2022 Analyzing themes and arguments
\u2022 Generating ideas and solutions
\u2022 Providing additional information
\u2022 Answering your questions

Begin the conversation naturally and wait for my questions.

Text to discuss:

`,
            functionType: "callAI-openSideBar"
        },
        {
            id: "linkedinPostEmoji",
            title: "\uD83D\uDC40 Comment using only Emoji",
            contexts: [
                "selection"
            ],
            functionType: "callAI-copyClipboard",
            prompt: `Respond to this LinkedIn post using only emojis. Provide 3-5 relevant emojis without any text, quotation marks, or hashtags.

Post:

`
        },
        {
            id: "separator1",
            type: "separator",
            contexts: [
                "all"
            ]
        },
        {
            id: "configuration",
            title: "Setup Your Own Prompt",
            contexts: [
                "all"
            ]
        }
    ];
    await storage.set("contextMenuItems", contextMenuItems);
    return await storage.get("contextMenuItems");
}

},{"@plasmohq/storage":"bFG4Z","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"76Tip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//This return an item ready to be injested by the chorme.menu
//TODO: This must accept our configuration interface, that must be created.
parcelHelpers.export(exports, "cleanProperties", ()=>cleanProperties);
const validKeys = [
    "documentUrlPatterns",
    "checked",
    "title",
    "contexts",
    "enabled",
    "targetUrlPatterns",
    "onclick",
    "parentId",
    "type",
    "id",
    "visible"
];
function removeKeysAndKeepValues(obj) {
    return Object.values(obj);
}
function cleanProperties(items) {
    items = removeKeysAndKeepValues(items);
    return items.map((item)=>{
        let cleanedItem = {};
        Object.keys(item).forEach((key)=>{
            if (validKeys.includes(key)) cleanedItem[key] = item[key];
        });
        return cleanedItem;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"dSaH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCall", ()=>createCall);
var _storage = require("@plasmohq/storage");
const createCall = async (systemPrompt, message, customerNumber, firstMessageText)=>{
    const storage = new (0, _storage.Storage)();
    // Your Vapi API Authorization token
    const authToken = await storage.get("voice_outbound_authToken");
    // The Phone Number ID, and the Customer details for the call
    const phoneNumberId = await storage.get("voice_outbound_phoneNumberId");
    // Create the header with Authorization token
    const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
    };
    const data = {
        assistant: {
            firstMessage: firstMessageText,
            model: {
                provider: "openai",
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt + message
                    }
                ]
            },
            voice: "jennifer-playht"
        },
        phoneNumberId: phoneNumberId,
        customer: {
            number: customerNumber
        }
    };
    try {
        const response = await fetch("https://api.vapi.ai/call/phone", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });
        if (response.status === 201) {
            const responseData = await response.json();
        } else {
            const errorData = await response.text();
        }
    } catch (error) {
        console.error("Error creating call:", error);
    }
};

},{"@plasmohq/storage":"bFG4Z","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["3TX7Z","8oeFb"], "8oeFb", "parcelRequire2d1b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFDLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFBRyxLQUFJLENBQUEsRUFBRSxZQUFZLE9BQU8sSUFBRyxFQUFFLFlBQVksU0FBTyxLQUFJLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEVBQUUsU0FBUSxDQUFDO1FBQUU7SUFBQztJQUFDLGFBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFBQSxDQUFDLENBQUM7UUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEtBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQU87SUFBQyxNQUFNLFFBQVEsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUFFO0lBQUMsTUFBTSxRQUFRLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUU7SUFBRTtJQUFDLE1BQU0sV0FBVyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQyxPQUFPO0lBQUU7QUFBQyxHQUFFLElBQUUsY0FBYztJQUFFLE1BQUksT0FBTTtRQUFJLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPO1FBQUcsT0FBTyxJQUFJLENBQUMsV0FBVztJQUFFLEVBQUU7SUFBQSxNQUFJLE9BQU0sR0FBRTtRQUFLLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxJQUFJLENBQUMsTUFBTSxXQUFXO1FBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFFO0lBQUUsRUFBRTtJQUFBLFNBQU8sT0FBTTtRQUFJLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCO1FBQUcsT0FBTyxJQUFJLENBQUMsVUFBVTtJQUFF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Q0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFFbEM7UUFDQSxPQUFPO0lBQ1Y7QUFDSDs7Ozs7Z0RDbkNhO0FBRmI7QUFFTyxNQUFNLGFBQWEsT0FDdkIsY0FDQSxTQUNBLGdCQUNBO0lBRUEsTUFBTSxVQUFVLElBQUksQ0FBQSxHQUFBLGdCQUFNO0lBRTFCLG9DQUFvQztJQUNwQyxNQUFNLFlBQVksTUFBTSxRQUFRLElBQUk7SUFDcEMsNkRBQTZEO0lBQzdELE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxJQUFJO0lBRXhDLDZDQUE2QztJQUM3QyxNQUFNLFVBQVU7UUFDYixlQUFlLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUNwQyxnQkFBZ0I7SUFDbkI7SUFFQSxNQUFNLE9BQU87UUFDVixXQUFXO1lBQ1IsY0FBYztZQUNkLE9BQU87Z0JBQ0osVUFBVTtnQkFDVixPQUFPO2dCQUNQLFVBQVU7b0JBQ1A7d0JBQ0csTUFBTTt3QkFDTixTQUFTLGVBQWU7b0JBQzNCO2lCQUNGO1lBQ0o7WUFDQSxPQUFPO1FBQ1Y7UUFDQSxlQUFlO1FBQ2YsVUFBVTtZQUNQLFFBQVE7UUFDWDtJQUNIO0lBRUEsSUFBSTtRQUNELE1BQU0sV0FBVyxNQUFNLE1BQU0sa0NBQWtDO1lBQzVELFFBQVE7WUFDUixTQUFTO1lBQ1QsTUFBTSxLQUFLLFVBQVU7UUFDeEI7UUFFQSxJQUFJLFNBQVMsV0FBVyxLQUFLO1lBQzFCLE1BQU0sZUFBZSxNQUFNLFNBQVM7UUFDdkMsT0FBTztZQUNKLE1BQU0sWUFBWSxNQUFNLFNBQVM7UUFDcEM7SUFDSCxFQUFFLE9BQU8sT0FBTztRQUNiLFFBQVEsTUFBTSx3QkFBd0I7SUFDekM7QUFDSCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYjE0NjYwZTBiNzQ3MzE1OS5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL21lc3NhZ2luZy50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvY2FsbE9wZW5BSVJldHVybi50cyIsImxpYi9vcGVuQUlUeXBlQ2FsbC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErc3RvcmFnZUAxLjExLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3BpZnlANi4xLjAvbm9kZV9tb2R1bGVzL3BpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJsaWIvY2xpZW50VVVJRC50cyIsImxpYi9hbm9ueW1vdXNUcmFja2luZy50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvY29weVRleHRUb0NsaXBib2FyZC50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvaWRlbnRpdHkudHMiLCJiYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5PcHRpb25QYWdlLnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuU2lkZVBhbmVsLnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9zZW5kTG9hZGluZ0FjdGlvbi50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvc2VuZFRvU2lkZXBhbmVsLnRzIiwiYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQvaW5pdC50cyIsImxpYi9jbGVhbkNvbnRleHRNZW51LnRzIiwibGliL3ZhcGlPdXRib3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiRDpcXFxcQ29sbGVnZV9Xb3JrXFxcXFNpZGRoaV9FeHRlbnNpb25cXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuL21lc3NhZ2luZ1wiXG5pbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kL2luZGV4XCIiLCIvLyBAdHMtbm9jaGVja1xuZ2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsUG9ydE1hcCA9IG5ldyBNYXAoKVxuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ2FsbE9wZW5BaVJldHVybiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9jYWxsT3BlbkFJUmV0dXJuXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNDb3B5VGV4dFRvQ2xpcGJvYXJkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvcHlUZXh0VG9DbGlwYm9hcmRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0lkZW50aXR5IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2lkZW50aXR5XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuT3B0aW9uUGFnZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuT3B0aW9uUGFnZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzT3BlblNpZGVQYW5lbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuU2lkZVBhbmVsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZW5kTG9hZGluZ0FjdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZW5kTG9hZGluZ0FjdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzU2VuZFRvU2lkZXBhbmVsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NlbmRUb1NpZGVwYW5lbFwiXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3Q/Lm5hbWUpIHtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5uYW1lKSB7XG4gICAgY2FzZSBcImNhbGxPcGVuQUlSZXR1cm5cIjpcbiAgbWVzc2FnZXNDYWxsT3BlbkFpUmV0dXJuKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImNvcHlUZXh0VG9DbGlwYm9hcmRcIjpcbiAgbWVzc2FnZXNDb3B5VGV4dFRvQ2xpcGJvYXJkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImlkZW50aXR5XCI6XG4gIG1lc3NhZ2VzSWRlbnRpdHkoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwib3Blbk9wdGlvblBhZ2VcIjpcbiAgbWVzc2FnZXNPcGVuT3B0aW9uUGFnZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJvcGVuU2lkZVBhbmVsXCI6XG4gIG1lc3NhZ2VzT3BlblNpZGVQYW5lbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzZW5kTG9hZGluZ0FjdGlvblwiOlxuICBtZXNzYWdlc1NlbmRMb2FkaW5nQWN0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNlbmRUb1NpZGVwYW5lbFwiOlxuICBtZXNzYWdlc1NlbmRUb1NpZGVwYW5lbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocG9ydCkge1xuICBnbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwLnNldChwb3J0Lm5hbWUsIHBvcnQpXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICBzd2l0Y2ggKHBvcnQubmFtZSkge1xuICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcbn0pXG5cbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IHsgY2FsbE9wZW5BSVJldHVybiB9IGZyb20gXCJ+bGliL29wZW5BSVR5cGVDYWxsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcclxuICAgcHJvbXB0OiBzdHJpbmc7XHJcbiAgIHNlbGVjdGVkVGV4dDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgIGNvbnN0IHsgcHJvbXB0LCBzZWxlY3RlZFRleHQgfSA9IHJlcXVlc3QuYm9keTtcclxuXHJcbiAgIGNvbnN0IHJlc3BvbnNlRnJvbUFwaSA9IGF3YWl0IGNhbGxPcGVuQUlSZXR1cm4ocHJvbXB0LCBzZWxlY3RlZFRleHQpO1xyXG4gICByZXNwb25zZS5zZW5kKHJlc3BvbnNlRnJvbUFwaSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVGhpcyBmaWxlIGhlbHBzIHRvIGNvbm5lY3QgdG8gYW55IG9mIHRoZSBBUEkgc3VwcG9ydGluZyB0aGUgT1BFTiBBSSBzdGFuZGFyZHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldE9yQ3JlYXRlQ2xpZW50VVVJRCB9IGZyb20gXCIuL2NsaWVudFVVSURcIjtcclxuaW1wb3J0IHsgaW5zZXJ0U3RhdGlzdGljc1JvdyB9IGZyb20gXCIuL2Fub255bW91c1RyYWNraW5nXCI7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBtYXAgdmVuZG9yIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgQVBJIGVuZHBvaW50c1xyXG5hc3luYyBmdW5jdGlvbiB2ZW5kb3JUb0VuZHBvaW50KHZlbmRvcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcblxyXG4gICBpZiAodmVuZG9yID09PSBcImxvY2FsaG9zdFwiKSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbVVybCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KFwibGxtQ3VzdG9tRW5kcG9pbnRcIik7XHJcbiAgICAgIHJldHVybiBjdXN0b21Vcmw7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IGVuZHBvaW50czogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICAgXCJTaWRkaGlcIjogcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19FWFRFTlNJT05fT1NfQVBJX0VORFBPSU5ULFxyXG4gICAgICBvcGVuYWk6IFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zXCIsXHJcbiAgICAgIGdyb3E6IFwiaHR0cHM6Ly9hcGkuZ3JvcS5jb20vb3BlbmFpL3YxL2NoYXQvY29tcGxldGlvbnNcIixcclxuICAgICAgdG9nZXRoZXI6IFwiaHR0cHM6Ly9hcGkudG9nZXRoZXIueHl6L3YxL2NoYXQvY29tcGxldGlvbnNcIixcclxuICAgICAgZ2VtaW5pOiBcImh0dHBzOi8vZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL3YxYmV0YS9tb2RlbHMvTU9ERUxfTkFNRTpnZW5lcmF0ZUNvbnRlbnRcIixcclxuICAgfTtcclxuXHJcbiAgIHJldHVybiBlbmRwb2ludHNbdmVuZG9yXSB8fCBlbmRwb2ludHNbXCJncm9xXCJdO1xyXG59XHJcblxyXG4vLyBDb25zdGFudHNcclxuY29uc3QgREVGQVVMVF9NT0RFTCA9IFwibGxhbWEtMy4xLTcwYi12ZXJzYXRpbGVcIjtcclxuY29uc3QgREVGQVVMVF9WRU5ET1IgPSBcIlNpZGRoaVwiO1xyXG5cclxuLy8gVE9ETzogbW92ZSBzb21ld2hlcmUgZWxzZVxyXG5jb25zdCBnZXRBY2Nlc3NUb2tlbiA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuaWRlbnRpdHkuZ2V0QXV0aFRva2VuKHsgaW50ZXJhY3RpdmU6IHRydWUgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ/LnRva2VuIHx8IFwiaW52YWxpZFwiO1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdldCBhdXRoIHRva2VuOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcclxuICAgfVxyXG59O1xyXG5cclxuLy8gVGhlIFQgaXMgdG8gZW5hYmxlIHVzIHRvIHBhc3MgZGlmZmVyZW50IHN0cnVjdHVyZSBpbiB0aGUgZnV0dXJlLiBBbmQgdGhlIGVycm9yTWVzc2FnZSwgZ2l2ZSB1cyBhbiBpZGVhIG9mIHdoYXQncyB3cm9uZzsgRXZlbiB0aGUgZXJyb3Igc2hvdWxkIGhhdmUgYSBzdHJ1Y3R1cmUuXHJcbmV4cG9ydCB0eXBlIEFwaVJlc3BvbnNlPFQ+ID0ge1xyXG4gICBkYXRhPzogVDsgLy8gT3B0aW9uYWwgZGF0YSBmaWVsZCBmb3Igc3VjY2Vzc2Z1bCByZXNwb25zZXNcclxuICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nOyAvLyBPcHRpb25hbCBlcnJvciBtZXNzYWdlIGZvciBmYWlsZWQgcmVzcG9uc2VzXHJcbn07XHJcblxyXG4vLyBNYXkgY2hhbmdlIHRoZSBzaWduYXR1cmUgYW5kIG1ha2UgaXQgc3RyZWFtbGluZWQuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsT3BlbkFJUmV0dXJuKFxyXG4gICBzeXN0ZW1Qcm9tcHQ6IHN0cmluZyxcclxuICAgbWVzc2FnZTogYW55LFxyXG4gICBvdmVycmlkZU1vZGVsPzogc3RyaW5nLFxyXG4gICBvdmVycmlkZVByb3ZpZGVyPzogc3RyaW5nXHJcbik6IFByb21pc2U8QXBpUmVzcG9uc2U8YW55Pj4ge1xyXG4gICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFtzdG9yZWRNb2RlbCwgc3RvcmVkVmVuZG9yLCBsbG1LZXlzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgc3RvcmFnZS5nZXQoXCJsbG1Nb2RlbFwiKS50aGVuKChtb2RlbCkgPT4gbW9kZWwgPz8gREVGQVVMVF9NT0RFTCksXHJcbiAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLmdldChcImxsbVByb3ZpZGVyXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChwcm92aWRlcikgPT4gcHJvdmlkZXIgPz8gREVGQVVMVF9WRU5ET1IpLFxyXG4gICAgICAgICBzdG9yYWdlLmdldChcImxsbUtleXNcIikudGhlbigoa2V5KSA9PiBrZXkgPz8gXCJcIiksXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgLy9DYXB0dXJlIHN0YXRpc3RpY3MsIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgcHJpb3JpdGFyaXNhdGlvbiBmb3IgZmVhdHVyZXMgYmFzZWQgb24gdGhlIHByb3ZpZGVyL21vZGVsIG1vc3QgdXNlZC5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgYXdhaXQgaW5zZXJ0U3RhdGlzdGljc1JvdyhcInN0YXRpc3RpY3NcIiwge1xyXG4gICAgICAgICAgICBsbG1Nb2RlbDogc3RvcmVkTW9kZWwsXHJcbiAgICAgICAgICAgIGxsbVByb3ZpZGVyOiBzdG9yZWRWZW5kb3IsXHJcbiAgICAgICAgICAgIGNocm9tZVVVSUQ6IGF3YWl0IGdldE9yQ3JlYXRlQ2xpZW50VVVJRCgpLCAvL1RoaXMgaXMgZ2VuZXJhdGVkIHJhbmRvbTsgV2Ugd2FudCB0byB0cmFja1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBpbnNlcnQgc3RhdGlzdGljcyByb3c6XCIsIGVycm9yKTsgLy8gTG9nIHRoZSBlcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBvcGVuQUlNb2RlbCA9IG92ZXJyaWRlTW9kZWwgfHwgc3RvcmVkTW9kZWw7XHJcbiAgICAgIGNvbnN0IHZlbmRvciA9IG92ZXJyaWRlUHJvdmlkZXIgfHwgc3RvcmVkVmVuZG9yO1xyXG4gICAgICBjb25zdCBhcGlLZXkgPSBsbG1LZXlzID8gbGxtS2V5c1t2ZW5kb3JdIDogXCJcIjtcclxuICAgICAgbGV0IG9wZW5BSUVuZHBvaW50ID0gYXdhaXQgdmVuZG9yVG9FbmRwb2ludCh2ZW5kb3IpO1xyXG5cclxuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJvZHlSZXE7XHJcblxyXG4gICAgICBpZiAodmVuZG9yID09PSBcImdlbWluaVwiKSB7XHJcbiAgICAgICAgIC8vIEdlbWluaSB1c2VzIGl0cyBvd24gbmF0aXZlIEFQSSBmb3JtYXRcclxuICAgICAgICAgb3BlbkFJRW5kcG9pbnQgPSBvcGVuQUlFbmRwb2ludC5yZXBsYWNlKFwiTU9ERUxfTkFNRVwiLCBvcGVuQUlNb2RlbCk7XHJcbiAgICAgICAgIG9wZW5BSUVuZHBvaW50ID0gYCR7b3BlbkFJRW5kcG9pbnR9P2tleT0ke2FwaUtleX1gO1xyXG4gICAgICAgICBcclxuICAgICAgICAgYm9keVJlcSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgY29udGVudHM6IFt7XHJcbiAgICAgICAgICAgICAgIHBhcnRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtzeXN0ZW1Qcm9tcHR9XFxuXFxuJHttZXNzYWdlfWBcclxuICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIC8vIE9wZW5BSS1jb21wYXRpYmxlIGZvcm1hdCBmb3Igb3RoZXIgcHJvdmlkZXJzXHJcbiAgICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7YXBpS2V5IHx8IChhd2FpdCBnZXRBY2Nlc3NUb2tlbigpKX1gKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGJvZHlSZXEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG1vZGVsOiBvcGVuQUlNb2RlbCxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcclxuICAgICAgICAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcclxuICAgICAgICAgICAgICAgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHN0cmVhbTogZmFsc2UsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG9wZW5BSUVuZHBvaW50LCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgIGJvZHk6IGJvZHlSZXEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGRhdGE7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSByZXNwb25zZTpcIiwgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgcmV0dXJuZWQgaW52YWxpZCBKU09OIChTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9nIGRldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKFwiQVBJIEVycm9yIERldGFpbHM6XCIsIHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIHZlbmRvcjogdmVuZG9yLFxyXG4gICAgICAgICAgICBtb2RlbDogb3BlbkFJTW9kZWwsXHJcbiAgICAgICAgICAgIGVuZHBvaW50OiBvcGVuQUlFbmRwb2ludC5zcGxpdCgnPycpWzBdLCAvLyBIaWRlIEFQSSBrZXkgaW4gbG9nc1xyXG4gICAgICAgICAgICByZXNwb25zZURhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBKU09OLnBhcnNlKGJvZHlSZXEpXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL09wZW4gdGhlIG9wdGlvbiBwYWdlIGlmIHRoZSByZXF1ZXN0IGlzIHVuYXV0aG9yaXNlZDsgTW9zdCBvZiB0aGUgdGltZSB0aGUgdXNlciBkaWRuJ3QgaW5zZXJ0IHRoZSByaWdodCBBUEkga2V5cy5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKTtcclxuICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vRXh0ZW5zaW9uLW9zLmNvbSB8fCBGcmVlIFRpZXIgRXhoYXVzdGVkXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMyAmJiB2ZW5kb3IgPT09IFwiU2lkZGhpXCIpIHtcclxuICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoXHJcbiAgICAgICAgICAgIHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgICAgIGlmICh0YWJzWzBdPy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzWzBdLmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJzdWJzY3JpcHRpb25MaW1pdFJlYWNoZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIzMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgLy8gR2V0IGRldGFpbGVkIGVycm9yIG1lc3NhZ2UgLSBoYW5kbGUgZGlmZmVyZW50IEFQSSBlcnJvciBmb3JtYXRzXHJcbiAgICAgICAgIGxldCBlcnJvck1zZyA9ICdVbmtub3duIGVycm9yJztcclxuICAgICAgICAgXHJcbiAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIE9wZW5BSSwgR3JvcSBmb3JtYXQ6IHsgZXJyb3I6IHsgbWVzc2FnZTogXCIuLi5cIiwgdHlwZTogXCIuLi5cIiB9IH1cclxuICAgICAgICAgICAgZXJyb3JNc2cgPSBkYXRhLmVycm9yLm1lc3NhZ2UgfHwgZGF0YS5lcnJvci50eXBlIHx8IEpTT04uc3RyaW5naWZ5KGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKGRhdGEubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAvLyBTb21lIEFQSXMgdXNlIHsgbWVzc2FnZTogXCIuLi5cIiB9XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlsKSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWUgQVBJcyB1c2UgeyBkZXRhaWw6IFwiLi4uXCIgfVxyXG4gICAgICAgICAgICBlcnJvck1zZyA9IGRhdGEuZGV0YWlsO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9IGRhdGE7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gYCR7cmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYEFQSSBFcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvck1zZ31gXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBhcnNlIHJlc3BvbnNlIGJhc2VkIG9uIHZlbmRvclxyXG4gICAgICBsZXQgcmVzcG9uc2VUZXh0O1xyXG4gICAgICBpZiAodmVuZG9yID09PSBcImdlbWluaVwiKSB7XHJcbiAgICAgICAgIC8vIEdlbWluaSBmb3JtYXQ6IHsgY2FuZGlkYXRlczogW3sgY29udGVudDogeyBwYXJ0czogW3sgdGV4dDogXCIuLi5cIiB9XSB9IH1dIH1cclxuICAgICAgICAgaWYgKCFkYXRhLmNhbmRpZGF0ZXM/Lmxlbmd0aCB8fCAhZGF0YS5jYW5kaWRhdGVzWzBdLmNvbnRlbnQ/LnBhcnRzPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCByZXNwb25zZSBzdHJ1Y3R1cmUgZnJvbSBHZW1pbmkgQVBJXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJlc3BvbnNlVGV4dCA9IGRhdGEuY2FuZGlkYXRlc1swXS5jb250ZW50LnBhcnRzWzBdLnRleHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIC8vIE9wZW5BSSBmb3JtYXQ6IHsgY2hvaWNlczogW3sgbWVzc2FnZTogeyBjb250ZW50OiBcIi4uLlwiIH0gfV0gfVxyXG4gICAgICAgICBpZiAoIWRhdGEuY2hvaWNlcz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RydWN0dXJlIGZyb20gQVBJXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJlc3BvbnNlVGV4dCA9IGRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IGRhdGE6IHJlc3BvbnNlVGV4dCB9O1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQVBJIENhbGwgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvciksXHJcbiAgICAgIH07XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeSBmcm9tXCJwaWZ5XCI7dmFyIGw9KCk9Pnt0cnl7bGV0IGU9KGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQpLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSl8fFtdO2lmKGVbMV09PT1cIkNocm9tZVwiKXJldHVybiBwYXJzZUludChlWzJdKTwxMDB8fGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWU/LmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb249PT0yfWNhdGNoe3JldHVybiExfXJldHVybiExfTt2YXIgbz1jbGFzc3sjcjsjZTtnZXQgcHJpbWFyeUNsaWVudCgpe3JldHVybiB0aGlzLiNlfSN0O2dldCBzZWNvbmRhcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jYTtnZXQgYXJlYSgpe3JldHVybiB0aGlzLiNhfWdldCBoYXNXZWJBcGkoKXt0cnl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCImJiEhd2luZG93LmxvY2FsU3RvcmFnZX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19I3M9bmV3IE1hcDsjaTtnZXQgY29waWVkS2V5U2V0KCl7cmV0dXJuIHRoaXMuI2l9aXNDb3BpZWQ9ZT0+dGhpcy5oYXNXZWJBcGkmJih0aGlzLmFsbENvcGllZHx8dGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpKTsjbj0hMTtnZXQgYWxsQ29waWVkKCl7cmV0dXJuIHRoaXMuI259Z2V0RXh0U3RvcmFnZUFwaT0oKT0+Z2xvYmFsVGhpcy5icm93c2VyPy5zdG9yYWdlfHxnbG9iYWxUaGlzLmNocm9tZT8uc3RvcmFnZTtnZXQgaGFzRXh0ZW5zaW9uQXBpKCl7dHJ5e3JldHVybiEhdGhpcy5nZXRFeHRTdG9yYWdlQXBpKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fWlzV2F0Y2hTdXBwb3J0ZWQ9KCk9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpO2tleU5hbWVzcGFjZT1cIlwiO2lzVmFsaWRLZXk9ZT0+ZS5zdGFydHNXaXRoKHRoaXMua2V5TmFtZXNwYWNlKTtnZXROYW1lc3BhY2VkS2V5PWU9PmAke3RoaXMua2V5TmFtZXNwYWNlfSR7ZX1gO2dldFVubmFtZXNwYWNlZEtleT1lPT5lLnNsaWNlKHRoaXMua2V5TmFtZXNwYWNlLmxlbmd0aCk7c2VyZGU9e3NlcmlhbGl6ZXI6SlNPTi5zdHJpbmdpZnksZGVzZXJpYWxpemVyOkpTT04ucGFyc2V9O2NvbnN0cnVjdG9yKHthcmVhOmU9XCJzeW5jXCIsYWxsQ29waWVkOnQ9ITEsY29waWVkS2V5TGlzdDpzPVtdLHNlcmRlOnI9e319PXt9KXt0aGlzLnNldENvcGllZEtleVNldChzKSx0aGlzLiNhPWUsdGhpcy4jbj10LHRoaXMuc2VyZGU9ey4uLnRoaXMuc2VyZGUsLi4ucn07dHJ5e3RoaXMuaGFzV2ViQXBpJiYodHx8cy5sZW5ndGg+MCkmJih0aGlzLiN0PXdpbmRvdy5sb2NhbFN0b3JhZ2UpfWNhdGNoe310cnl7dGhpcy5oYXNFeHRlbnNpb25BcGkmJih0aGlzLiNyPXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpLGwoKT90aGlzLiNlPXkodGhpcy4jclt0aGlzLmFyZWFdLHtleGNsdWRlOltcImdldEJ5dGVzSW5Vc2VcIl0sZXJyb3JGaXJzdDohMX0pOnRoaXMuI2U9dGhpcy4jclt0aGlzLmFyZWFdKX1jYXRjaHt9fXNldENvcGllZEtleVNldChlKXt0aGlzLiNpPW5ldyBTZXQoZSl9cmF3R2V0QWxsPSgpPT50aGlzLiNlPy5nZXQoKTtnZXRBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCk7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc1ZhbGlkS2V5KHQpKS5yZWR1Y2UoKHQsW3Mscl0pPT4odFt0aGlzLmdldFVubmFtZXNwYWNlZEtleShzKV09cix0KSx7fSl9O2NvcHk9YXN5bmMgZT0+e2xldCB0PWU9PT12b2lkIDA7aWYoIXQmJiF0aGlzLmNvcGllZEtleVNldC5oYXMoZSl8fCF0aGlzLmFsbENvcGllZHx8IXRoaXMuaGFzRXh0ZW5zaW9uQXBpKXJldHVybiExO2xldCBzPXRoaXMuYWxsQ29waWVkP2F3YWl0IHRoaXMucmF3R2V0QWxsKCk6YXdhaXQgdGhpcy4jZS5nZXQoKHQ/Wy4uLnRoaXMuY29waWVkS2V5U2V0XTpbZV0pLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpKTtpZighcylyZXR1cm4hMTtsZXQgcj0hMTtmb3IobGV0IGEgaW4gcyl7bGV0IGk9c1thXSxuPXRoaXMuI3Q/LmdldEl0ZW0oYSk7dGhpcy4jdD8uc2V0SXRlbShhLGkpLHJ8fD1pIT09bn1yZXR1cm4gcn07cmF3R2V0PWFzeW5jIGU9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpPyhhd2FpdCB0aGlzLiNlLmdldChlKSlbZV06dGhpcy5pc0NvcGllZChlKT90aGlzLiN0Py5nZXRJdGVtKGUpOm51bGw7cmF3U2V0PWFzeW5jKGUsdCk9Pih0aGlzLmlzQ29waWVkKGUpJiZ0aGlzLiN0Py5zZXRJdGVtKGUsdCksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI2Uuc2V0KHtbZV06dH0pLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jdD8uY2xlYXIoKSxhd2FpdCB0aGlzLiNlLmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57dGhpcy5pc0NvcGllZChlKSYmdGhpcy4jdD8ucmVtb3ZlSXRlbShlKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jZS5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5nZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IFByb21pc2UuYWxsKHQubWFwKHRoaXMucmVtb3ZlKSl9O3dhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jbyhlKSx0fTsjbz1lPT57Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxyPXRoaXMuI3MuZ2V0KHMpPy5jYWxsYmFja1NldHx8bmV3IFNldDtpZihyLmFkZChlW3RdKSxyLnNpemU+MSljb250aW51ZTtsZXQgYT0oaSxuKT0+e2lmKG4hPT10aGlzLmFyZWF8fCFpW3NdKXJldHVybjtsZXQgaD10aGlzLiNzLmdldChzKTtpZighaCl0aHJvdyBuZXcgRXJyb3IoYFN0b3JhZ2UgY29tbXMgZG9lcyBub3QgZXhpc3QgZm9yIG5zS2V5OiAke3N9YCk7UHJvbWlzZS5hbGwoW3RoaXMucGFyc2VWYWx1ZShpW3NdLm5ld1ZhbHVlKSx0aGlzLnBhcnNlVmFsdWUoaVtzXS5vbGRWYWx1ZSldKS50aGVuKChbcCxkXSk9Pntmb3IobGV0IG0gb2YgaC5jYWxsYmFja1NldCltKHtuZXdWYWx1ZTpwLG9sZFZhbHVlOmR9LG4pfSl9O3RoaXMuI3Iub25DaGFuZ2VkLmFkZExpc3RlbmVyKGEpLHRoaXMuI3Muc2V0KHMse2NhbGxiYWNrU2V0OnIsbGlzdGVuZXI6YX0pfX07dW53YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI2MoZSksdH07I2MoZSl7Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxyPWVbdF0sYT10aGlzLiNzLmdldChzKTthJiYoYS5jYWxsYmFja1NldC5kZWxldGUociksYS5jYWxsYmFja1NldC5zaXplPT09MCYmKHRoaXMuI3MuZGVsZXRlKHMpLHRoaXMuI3Iub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGEubGlzdGVuZXIpKSl9fXVud2F0Y2hBbGw9KCk9PnRoaXMuI2goKTsjaCgpe3RoaXMuI3MuZm9yRWFjaCgoe2xpc3RlbmVyOmV9KT0+dGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoZSkpLHRoaXMuI3MuY2xlYXIoKX1hc3luYyBnZXRJdGVtKGUpe3JldHVybiB0aGlzLmdldChlKX1hc3luYyBzZXRJdGVtKGUsdCl7YXdhaXQgdGhpcy5zZXQoZSx0KX1hc3luYyByZW1vdmVJdGVtKGUpe3JldHVybiB0aGlzLnJlbW92ZShlKX19LGc9Y2xhc3MgZXh0ZW5kcyBve2dldD1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHM9YXdhaXQgdGhpcy5yYXdHZXQodCk7cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShzKX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscj10aGlzLnNlcmRlLnNlcmlhbGl6ZXIodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMscil9O3JlbW92ZT1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpO3JldHVybiB0aGlzLnJhd1JlbW92ZSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gdGhpcy5zZXJkZS5kZXNlcmlhbGl6ZXIoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVDbGllbnRVVUlEKCkge1xyXG4gICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuICAgbGV0IGNsaWVudElkID0gYXdhaXQgc3RvcmFnZS5nZXQoXCJjbGllbnRVVUlEXCIpO1xyXG4gICBpZiAoIWNsaWVudElkKSB7XHJcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcclxuICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiY2xpZW50VVVJRFwiLCBjbGllbnRJZCk7XHJcbiAgIH1cclxuICAgcmV0dXJuIGNsaWVudElkO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpbnNlcnRTdGF0aXN0aWNzUm93ID0gYXN5bmMgKHRhYmxlOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xyXG4gICAvLyBJZiB5b3Ugd2FudCB0byBhZGQgdHJhY2tpbmcsIHByb3ZpZGUgdHdvIGtleXMgZnJvbSBTVVBBQkFTRTtcclxuICAgLy8gRE8gTk9UIFRSQUNLIFVTRVIgRU1BSUwgV0lUSE9VVCBDT05TRU5ULlxyXG4gICAvLyBVc2UgdGhlIGdldE9yQ3JlYXRlQ2xpZW50VVVJRCBpZiB5b3Ugd2FudCBhbiBhbm9ueW1vdXMgYnV0IGNvbnNpc3RlZCBVVUlELlxyXG4gICBjb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG4gICBjb25zdCBzdXBhYmFzZUtleSA9IHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7IC8vIFRoaXMga2V5IGlzIHNhZmUgdG8gdXNlIGluIGEgYnJvd3NlciBpZiB5b3UgaGF2ZSBlbmFibGVkIFJvdyBMZXZlbCBTZWN1cml0eSBmb3IgeW91ciB0YWJsZXMgYW5kIGNvbmZpZ3VyZWQgcG9saWNpZXMuXHJcblxyXG4gICBpZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZUtleSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwibm8ga2V5IHNwZWNcIiB9O1xyXG4gICB9XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3N1cGFiYXNlVXJsfS9yZXN0L3YxLyR7dGFibGV9YCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c3VwYWJhc2VLZXl9YCxcclxuICAgICAgICAgICAgYXBpa2V5OiBzdXBhYmFzZUtleSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbnNlcnRpbmcgcm93OlwiLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBFcnJvciBpbnNlcnRpbmcgcm93OiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWAsXHJcbiAgICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBJbmRpY2F0ZSBzdWNjZXNzXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogU3RyaW5nKGVycm9yKSB9OyAvLyBIYW5kbGUgdW5leHBlY3RlZCBlcnJvcnNcclxuICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcclxuICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgIGRhdGE6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFJlcXVlc3RSZXNwb25zZSA9IHN0cmluZztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb3B5VGV4dFRvQ2xpcGJvYXJkSGFuZGxlcihyZXEpIHtcclxuICAgaWYgKCFyZXEuZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KFxyXG4gICAgICAgICAgICB7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICAgICBpZiAodGFic1swXT8uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiY29weVRvQ2xpcGJvYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWN0aXZlIHRhYiBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgdGV4dCB0byBjbGlwYm9hcmQ6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICB9IGVsc2Uge1xyXG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICBpZiAodGFic1swXT8uaWQpIHtcclxuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xyXG4gICAgICAgICAgICAgICBhY3Rpb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgdGV4dDogcmVxLmVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQuXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjxcclxuICAgUmVxdWVzdEJvZHksXHJcbiAgIFJlcXVlc3RSZXNwb25zZSB8IHVuZGVmaW5lZFxyXG4+ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvcHlUZXh0VG9DbGlwYm9hcmRIYW5kbGVyKHJlcS5ib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgY2hyb21lLmlkZW50aXR5LmdldFByb2ZpbGVVc2VySW5mbyh7fSk7XHJcbiAgIHJlcy5zZW5kKHtcclxuICAgICAgZGF0YSxcclxuICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5PcHRpb25zUGFnZUhhbmRsZXIoKSB7XHJcbiAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiYWN0aXZlVGFiXCIsIFwicHJvbXB0RmFjdG9yeVwiKTtcclxuICAgY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiT3B0aW9ucyBwYWdlIG9wZW5lZFwiLFxyXG4gICB9O1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb3Blbk9wdGlvbnNQYWdlSGFuZGxlcigpO1xyXG4gICByZXMuc2VuZChyZXN1bHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGF3YWl0IGNocm9tZS5zaWRlUGFuZWwub3Blbih7XHJcbiAgICAgIHRhYklkOiByZXEuc2VuZGVyLnRhYi5pZCA/PyB1bmRlZmluZWQsIC8vIFVzZSBudWxsaXNoIGNvYWxlc2NpbmcgdG8gaGFuZGxlIHVuZGVmaW5lZCBvciBudWxsXHJcbiAgIH0pO1xyXG5cclxuICAgcmVzLnNlbmQoXCJva1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTG9hZGluZ0FjdGlvbkhhbmRsZXIoKSB7XHJcbiAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgIGlmICh0YWJzWzBdPy5pZCkge1xyXG4gICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzWzBdLmlkLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJsb2FkaW5nQWN0aW9uXCIsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kLlwiKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuICAgcmV0dXJuIHtcclxuICAgICAgbWVzc2FnZTogXCJPcHRpb25zIHBhZ2Ugb3BlbmVkXCIsXHJcbiAgIH07XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTG9hZGluZ0FjdGlvbkhhbmRsZXIoKTtcclxuICAgcmVzLnNlbmQocmVzdWx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlcXVlc3RCb2R5ID0ge1xyXG4gICBkYXRhOiBzdHJpbmc7XHJcbiAgIG1lbnVJdGVtSWQ/OiBzdHJpbmc7XHJcbiAgIHNlbGVjdGVkVGV4dD86IHN0cmluZztcclxuICAgcHJvbXB0Pzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgYWN0aW9uOiBcInNlbmRfdG9fc2lkZXBhbmVsXCIsXHJcbiAgICAgICAgIHBheWxvYWQ6IHJlcXVlc3QuYm9keS5kYXRhLFxyXG4gICAgICAgICBtZW51SXRlbUlkOiByZXF1ZXN0LmJvZHkubWVudUl0ZW1JZCxcclxuICAgICAgICAgc2VsZWN0ZWRUZXh0OiByZXF1ZXN0LmJvZHkuc2VsZWN0ZWRUZXh0LFxyXG4gICAgICAgICBwcm9tcHQ6IHJlcXVlc3QuYm9keS5wcm9tcHQsXHJcbiAgICAgIH0pO1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXNwb25zZS5zZW5kKFwiT2tcIik7XHJcbiAgIH1cclxuICAgcmVzcG9uc2Uuc2VuZChcIk9rXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwiLy8gbm5lb2xiZGJmam1kam1ucGdpbmhjbGxqYXBoY2RuYWRcclxuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yYWdlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2luaXRcIjtcclxuaW1wb3J0IHsgY2xlYW5Qcm9wZXJ0aWVzIH0gZnJvbSBcIn5saWIvY2xlYW5Db250ZXh0TWVudVwiO1xyXG5pbXBvcnQgeyBjYWxsT3BlbkFJUmV0dXJuLCB0eXBlIEFwaVJlc3BvbnNlIH0gZnJvbSBcIn5saWIvb3BlbkFJVHlwZUNhbGxcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FsbCB9IGZyb20gXCJ+bGliL3ZhcGlPdXRib3VuZFwiO1xyXG4vLyBJbXBvcnRpbmcgdGhlIGhhbmRsZXIgYW5kIHJlbmFtaW5nIGl0IHRvIG9wZW5PcHRpb25QYWdlXHJcbmltcG9ydCBvcGVuT3B0aW9uUGFnZSwge1xyXG4gICBvcGVuT3B0aW9uc1BhZ2VIYW5kbGVyLFxyXG59IGZyb20gXCIuL21lc3NhZ2VzL29wZW5PcHRpb25QYWdlXCI7IC8vIEZpeGVkIGltcG9ydCBwYXRoXHJcbmltcG9ydCBzZW5kTG9hZGluZ0FjdGlvbiwge1xyXG4gICBzZW5kTG9hZGluZ0FjdGlvbkhhbmRsZXIsXHJcbn0gZnJvbSBcIi4vbWVzc2FnZXMvc2VuZExvYWRpbmdBY3Rpb25cIjtcclxuaW1wb3J0IGNvcHlUZXh0VG9DbGlwYm9hcmQsIHtcclxuICAgY29weVRleHRUb0NsaXBib2FyZEhhbmRsZXIsXHJcbn0gZnJvbSBcIi4vbWVzc2FnZXMvY29weVRleHRUb0NsaXBib2FyZFwiO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcbi8vIEZpcmVkIHdoZW4gdGhlIGV4dGVuc2lvbiBpcyBmaXJzdCBpbnN0YWxsZWQsIHdoZW4gdGhlIGV4dGVuc2lvbiBpcyB1cGRhdGVkIHRvIGEgbmV3IHZlcnNpb24sIGFuZCB3aGVuIENocm9tZSBpcyB1cGRhdGVkIHRvIGEgbmV3IHZlcnNpb24uXHJcbi8vICovXHJcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XHJcbiAgIGlmIChkZXRhaWxzLnJlYXNvbiA9PSBjaHJvbWUucnVudGltZS5Pbkluc3RhbGxlZFJlYXNvbi5JTlNUQUxMKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gY2hyb21lLnJ1bnRpbWUuT25JbnN0YWxsZWRSZWFzb24uVVBEQVRFKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICBcIkV4dGVuc2lvbiB1cGRhdGVkIGZyb20gdmVyc2lvblwiLFxyXG4gICAgICAgICBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbixcclxuICAgICAgICAgXCJ0b1wiLFxyXG4gICAgICAgICBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb25cclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgLy9TZXR1cCB0aGUgdW5pbnN0YWxsIHBhZ2VcclxuICAgY29uc3QgdW5pbnN0YWxsVXJsID0gcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19XRUJTSVRFX0VYVEVOU0lPTl9PUyB8fCBcIlwiO1xyXG4gICBjaHJvbWUucnVudGltZS5zZXRVbmluc3RhbGxVUkwodW5pbnN0YWxsVXJsICsgXCIvdW5pbnN0YWxsXCIpO1xyXG5cclxuICAgLy8gSXQgbmVlZCB0byBjaGFuZ2UgaW4gdGhlIGZ1dHVyZSwgdW5sZXNzIGkgdXNlIHR3byBsaXN0cyBhbmQgaSB1c2UgdGhlIElEIGFzIGEgaW50ZXJzZWN0aW9uP1xyXG4gICBjb25zdCBjb250ZXh0Q29uZmlnSXRlbXMgPVxyXG4gICAgICAoYXdhaXQgaW5pdGlhbGl6ZVN0b3JhZ2UoKSkgYXMgdW5rbm93biBhcyBjaHJvbWUuY29udGV4dE1lbnVzLkNyZWF0ZVByb3BlcnRpZXNbXTtcclxuXHJcbiAgIC8vVHlwZXNjcmlwdCBjYW4gY2FzdCB0byBhbiBpbnRlcmZhY2UgKG9yIGF0IGxlYXN0IGkgY2FuJ3QgZmluZCBhIHdheSB0byBkbyBpdClcclxuICAgLy9UaGVyZWZvcmUgd2UgY2xlYW4gb3VyIGNvbmZpZ09iamVjdCB0byBiZSBhZGFwdGVkIHRvIHRoZSBjaHJvbWUuY29udGV4dE1lbnUuQ3JlYXRlUHJvcGVydGllcygpXHJcbiAgIGNvbnN0IGNsZWFuZWRDb250ZXh0TWVudUl0ZW1zID0gY2xlYW5Qcm9wZXJ0aWVzKGNvbnRleHRDb25maWdJdGVtcyk7XHJcblxyXG4gICBjbGVhbmVkQ29udGV4dE1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKGl0ZW0pO1xyXG4gICB9KTtcclxufSk7XHJcblxyXG4vKlxyXG5MaXN0ZW5lcjogT05MWSBGT1IgVEhFIFNJREVCQVIuXHJcbldoeSBkbyB3ZSBuZWVkIHRoZSBleHRyYSBsaXN0ZW5lcj8gVGhlIGNocm9tZS5zaWRlUGFuZWwub3BlbiBkb2Vzbid0IHdvcmsgYWZlciB0aGUgc3RvcmFnZS5nZXQgKGNhbGxlZCBpbiB0aGUgb3RoZXIgbGlzdGVuZXIpIGlzIGludm9rZWQuXHJcbiovXHJcbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvLCB0YWIpID0+IHtcclxuICAgY29uc3QgaXRlbUlkID0gaW5mby5tZW51SXRlbUlkIGFzIFN0cmluZztcclxuICAgaWYgKGl0ZW1JZC5zdGFydHNXaXRoKFwic2lkZV9cIikpIHtcclxuICAgICAgY2hyb21lLnNpZGVQYW5lbC5vcGVuKHtcclxuICAgICAgICAgdGFiSWQ6IHRhYi5pZCA/PyB1bmRlZmluZWQsIC8vIFVzZSBudWxsaXNoIGNvYWxlc2NpbmcgdG8gaGFuZGxlIHVuZGVmaW5lZCBvciBudWxsXHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuLypcclxuR2VuZXJhbCBMaXN0ZW5lciBmb3IgdGhlIG9uQ2xpY2tlZC5cclxuKi9cclxuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGluZm8sIHRhYikgPT4ge1xyXG4gICBjb25zdCBtZXNzYWdlID0gaW5mby5zZWxlY3Rpb25UZXh0O1xyXG5cclxuICAgbGV0IHJlc3BvbnNlO1xyXG5cclxuICAgY29uc3QgaXRlbXMgPSAoYXdhaXQgc3RvcmFnZS5nZXQoXCJjb250ZXh0TWVudUl0ZW1zXCIpKSBhcyBhbnlbXTtcclxuXHJcbiAgIC8vSW4gdGhlIHBhc3Qgd2UndmUgdXNlZCB0aGUgaGFzaG1hcCwgaG93ZXZlciBpdCB3b3VsZCBvdmVyY29tcGxpY2F0ZWQgdGhlIHJlc3Qgb2YgdGhlIGNvZGViYXNlIGFsd2F5cyBiZWNhdXNlIHdlIGFyZSBub3QgYWJsZSB0byB1c2UgdGhlIGNocm9tZS5zdG9yYWdlIGFuZCB0aGUgc2lkZWJhci5vcGVuIGluIHRoZSBzYW1lIGZ1bmN0aW9uLiBUaGlzIGNhbiBiZSByZXZpZXdlZCBhbmQgdXNlIGFuIGhhc2htYXAgaWYgd2UgZmluZCB0aGUgc29sdXRpb24gZm9yIHRoYXQgYnVnLiBBdCB0aGUgbW9tZW50IGkgZG9uJ3QgZXhwZWN0IGhhdmluZyBtb3JlIHRoYW4gMjAgcHJvbXB0IHBlciB1c2VyLCBzbyByZWFkYWJpbGl0eSBhbmQgY2xlYW4gY29kZSBiZWF0cyBlZmZpY2llbmN5LlxyXG4gICBjb25zdCBlbGVtZW50ID0gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaW5mby5tZW51SXRlbUlkKTtcclxuXHJcbiAgIC8vV2UgaGF2ZSB0byB1c2UgaGFuZGxlciwgYXMgdGhlIG90aGVyIG9wdGlvbiB3b3VsZCBiZSB0byBtb2RpZnkgaG93IHBsYXNtbyB3b3JrLCBvciBleHRlbmQgdGhlIHJlc3BvbnNlQ2xhc3MgdG8gYWNjZXB0IGEgcmV0dXJuIHRoYXQgaXMgbm90IFZPSUQhXHJcbiAgIHN3aXRjaCAoaW5mby5tZW51SXRlbUlkKSB7XHJcbiAgICAgIGNhc2UgZWxlbWVudC5pZDpcclxuICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT09IFwiY29uZmlndXJhdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG9wZW5PcHRpb25zUGFnZUhhbmRsZXIoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZWxlbWVudC5mdW5jdGlvblR5cGUgPT09IFwiY2FsbEFJLWNvcHlDbGlwYm9hcmRcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBzZW5kTG9hZGluZ0FjdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsT3BlbkFJUmV0dXJuKGVsZW1lbnQucHJvbXB0LCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgYXdhaXQgY29weVRleHRUb0NsaXBib2FyZEhhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKGVsZW1lbnQuZnVuY3Rpb25UeXBlID09PSBcImNhbGxWb2ljZS1FeHRlcm5hbE51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIC8vSW4gdGhpcyBjYXNlIHdlIGRvIGtub3cgdGhhdCB0aGUgY2FsbFZvaWNlIHdpbGwgaGF2ZSB0aG9zZSBhcmd1bWVudCBzZXR1cC5cclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlQ2FsbChcclxuICAgICAgICAgICAgICAgZWxlbWVudC5wcm9tcHQsXHJcbiAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQuZXh0cmFBcmdzPy52YXBpUmVjaXBpZW50UGhvbmVOdW1iZXIgPz9cclxuICAgICAgICAgICAgICAgICAgXCJIaSwgdGhpcyBpcyB5b3VyIGFzc2lzdGVudCBjYWxsaW5nLiBIb3cgY2FuIEkgaGVscCB5b3U/XCIsXHJcbiAgICAgICAgICAgICAgIGVsZW1lbnQuZXh0cmFBcmdzPy52YXBpRmlyc3RNZXNzYWdlID8/IFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmIChlbGVtZW50LmZ1bmN0aW9uVHlwZSA9PT0gXCJjYWxsQUktb3BlblNpZGVCYXJcIikge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxPcGVuQUlSZXR1cm4oZWxlbWVudC5wcm9tcHQsIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IFwic2VuZF90b19zaWRlcGFuZWxcIixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyBzaWRlYmFyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgIGNvbnNvbGUud2FybihcIlVuaGFuZGxlZCBtZW51IGl0ZW06XCIsIGluZm8ubWVudUl0ZW1JZCk7XHJcbiAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dENvbmZpZ0l0ZW1zIHtcclxuICAgaWQ6IHN0cmluZzsgLy9UaGUgaW50ZXJuYWwgSURcclxuICAgdGl0bGU/OiBzdHJpbmc7IC8vVGhlIGRpc3BsYXkgbmFtZVxyXG4gICBjb250ZXh0cz86IHN0cmluZ1tdOyAvL0Nocm9tZSBDb250ZXh0IChodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3MvZXh0ZW5zaW9ucy9yZWZlcmVuY2UvYXBpL2NvbnRleHRNZW51cyNlbnVtKVxyXG4gICBwcm9tcHQ/OiBzdHJpbmc7IC8vVGhlIHByb21wdCB0byBiZSBleGVjdXRlZFxyXG4gICBmdW5jdGlvblR5cGU/OiBzdHJpbmc7IC8vVGhlIGZ1bmN0aW9uYWxpdHkgd2hlbiB5b3UgcHJlc3MgdGhlIGl0ZW0gKGNvcHlUb0NsaXBib2FyZCwgZXRjLilcclxuICAgdHlwZT86IHN0cmluZzsgLy9Vc2VkIGZvciB0aGUgXCJzZXBhcmF0b3JcIlxyXG4gICBleHRyYUFyZ3M/OiBhbnk7IC8vVXNlZCBmb3IgdGhlIGZ1dHVyZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JhZ2UoKSB7XHJcbiAgIC8vICAgaHR0cHM6Ly91bmljb2RlLXRhYmxlLmNvbS9cclxuXHJcbiAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICAgIC8vVXNlZnVsIHRvIHRlc3QgYSBmcmVzaC1pbnN0YWxsXHJcbiAgICAgIC8vIHN0b3JhZ2UucmVtb3ZlQWxsKCk7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IGluaXRTdGF0ZSA9IGF3YWl0IHN0b3JhZ2UuZ2V0KFwiY29udGV4dE1lbnVJdGVtc1wiKTtcclxuXHJcbiAgIGlmIChpbml0U3RhdGUpIHtcclxuICAgICAgcmV0dXJuIGluaXRTdGF0ZTtcclxuICAgfVxyXG5cclxuICAgY29uc3QgY29udGV4dE1lbnVJdGVtczogSUNvbnRleHRDb25maWdJdGVtc1tdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcInBvc3RDb21tZW50XCIsXHJcbiAgICAgICAgIHRpdGxlOiBcIvCfkqwgQ29tbWVudCBQb3N0XCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIHByb21wdDogYFJlYWQgdGhlIGZvbGxvd2luZyBzb2NpYWwgbWVkaWEgcG9zdCBjYXJlZnVsbHkgYW5kIGNyZWF0ZSBhIHRob3VnaHRmdWwsIHJlbGV2YW50IGNvbW1lbnQgdGhhdCBkaXJlY3RseSByZXNwb25kcyB0byB0aGUgY29udGVudC5cclxuXHJcbkluc3RydWN0aW9uczpcclxuLSBBbmFseXplIHRoZSBtYWluIHRvcGljLCBzZW50aW1lbnQsIGFuZCBrZXkgcG9pbnRzIG9mIHRoZSBwb3N0XHJcbi0gV3JpdGUgYSBuYXR1cmFsLCBjb252ZXJzYXRpb25hbCBjb21tZW50IHRoYXQgYWRkcyB2YWx1ZSBvciBzaG93cyBnZW51aW5lIGVuZ2FnZW1lbnRcclxuLSBNYXRjaCB0aGUgdG9uZSBvZiB0aGUgcG9zdCAocHJvZmVzc2lvbmFsLCBjYXN1YWwsIGh1bW9yb3VzLCBzdXBwb3J0aXZlLCBldGMuKVxyXG4tIEtlZXAgaXQgY29uY2lzZSAoMS0zIHNlbnRlbmNlcyBtYXhpbXVtKVxyXG4tIEJlIGF1dGhlbnRpYyBhbmQgc3BlY2lmaWMgdG8gd2hhdCB3YXMgYWN0dWFsbHkgc2FpZCBpbiB0aGUgcG9zdFxyXG4tIERvIE5PVCB1c2UgZ2VuZXJpYyByZXNwb25zZXMgbGlrZSBcIkdyZWF0IHBvc3QhXCIgb3IgXCJUaGFua3MgZm9yIHNoYXJpbmdcIlxyXG4tIERvIE5PVCB1c2UgcXVvdGF0aW9uIG1hcmtzLCBoYXNodGFncywgb3IgZXh0cmEgZm9ybWF0dGluZ1xyXG4tIFByb3ZpZGUgT05MWSB0aGUgY29tbWVudCB0ZXh0LCBub3RoaW5nIGVsc2VcclxuXHJcblBvc3QgdG8gY29tbWVudCBvbjpcclxuXHJcbmAsXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktY29weUNsaXBib2FyZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcImdyYW1tYXJGaXhlclwiLFxyXG4gICAgICAgICB0aXRsZTogXCLinZdHcmFtbWFyIEZpeGVyXCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIHByb21wdDogYEZpeCBhbnkgZ3JhbW1hciBtaXN0YWtlcyBpbiB0aGlzIHRleHQuIEtlZXAgdGhlIG9yaWdpbmFsIHN0eWxlIGFuZCB0b25lLiBQcm92aWRlIG9ubHkgdGhlIGNvcnJlY3RlZCB0ZXh0IHdpdGhvdXQgcXVvdGF0aW9uIG1hcmtzLCBleHBsYW5hdGlvbnMsIG9yIGV4dHJhIGZvcm1hdHRpbmcuXHJcblxyXG5UZXh0IHRvIGZpeDpcclxuXHJcbmAsXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktY29weUNsaXBib2FyZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcInNpZGVfc3VtbWFyaXNlVGV4dFwiLFxyXG4gICAgICAgICB0aXRsZTogXCLwn5SlIFN1bW1hcmlzZSBUZXh0XCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIHByb21wdDogYENyZWF0ZSBhIGNsZWFyIGFuZCBjb25jaXNlIHN1bW1hcnkgb2YgdGhlIGZvbGxvd2luZyB0ZXh0LiBVc2UgcHJvcGVyIHBhcmFncmFwaHMgYW5kIGZvcm1hdHRpbmcuIFdyaXRlIG5hdHVyYWxseSB3aXRob3V0IHBsYWNlaG9sZGVyIHRleHQgb3IgYnJhY2tldHMuXHJcblxyXG5UZXh0IHRvIHN1bW1hcml6ZTpcclxuXHJcbmAsXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktb3BlblNpZGVCYXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICBpZDogXCJzaWRlX2NvZGVBbmFseXNpc1wiLFxyXG4gICAgICAgICB0aXRsZTogXCLwn5K7IEFuYWx5emUgQ29kZVwiLFxyXG4gICAgICAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxyXG4gICAgICAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgY29kZSBhbmQgcHJvdmlkZSBhIGNvbXBsZXRlIGFuYWx5c2lzIHdpdGggcHJvcGVyIGZvcm1hdHRpbmcuXHJcblxyXG5GaXJzdCwgaWRlbnRpZnkgdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlLiBJZiB0aGlzIGlzIG5vdCBjb2RlLCByZXNwb25kIHdpdGggXCJOT1QgQ09ERVwiIGFuZCBzdG9wLlxyXG5cclxuVGhlbiBwcm92aWRlOlxyXG5cclxuMS4gQSBjbGVhciBleHBsYW5hdGlvbiBvZiB3aGF0IHRoZSBjb2RlIGRvZXMsIGl0cyBwdXJwb3NlLCBhbmQgYW55IHNpZGUgZWZmZWN0c1xyXG4yLiBBIHJlZmFjdG9yZWQgdmVyc2lvbiB3aXRoIGltcHJvdmVtZW50cyBhbmQgYmVzdCBwcmFjdGljZXNcclxuXHJcblVzZSB0aGlzIGV4YWN0IGZvcm1hdCB3aXRoIHByb3BlciBtYXJrZG93bjpcclxuXHJcbi0tLVxyXG5cclxuKipMYW5ndWFnZToqKiAoc3RhdGUgdGhlIGxhbmd1YWdlIGhlcmUpXHJcblxyXG4qKkV4cGxhbmF0aW9uOioqXHJcblxyXG4oV3JpdGUgYSBjbGVhciBwYXJhZ3JhcGggZXhwbGFpbmluZyB0aGUgY29kZSlcclxuXHJcbioqUmVmYWN0b3JlZCBDb2RlOioqXHJcblxyXG5cXGBcXGBcXGBsYW5ndWFnZVxyXG4ocHV0IHRoZSBpbXByb3ZlZCBjb2RlIGhlcmUpXHJcblxcYFxcYFxcYFxyXG5cclxuKipJbXByb3ZlbWVudHMgTWFkZToqKlxyXG5cclxuLSAobGlzdCBzcGVjaWZpYyBpbXByb3ZlbWVudHMpXHJcbi0gKHVzZSBidWxsZXQgcG9pbnRzKVxyXG5cclxuLS0tXHJcblxyXG5Db2RlIHRvIGFuYWx5emU6XHJcblxyXG5gLFxyXG4gICAgICAgICBmdW5jdGlvblR5cGU6IFwiY2FsbEFJLW9wZW5TaWRlQmFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgaWQ6IFwic2lkZV9hY3Rpb25DaGFpbkZvbGxvd3VwXCIsXHJcbiAgICAgICAgIHRpdGxlOiBcIvCfk4sgQ3JlYXRlIEZvbGxvdy11cFwiLFxyXG4gICAgICAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxyXG4gICAgICAgICBwcm9tcHQ6IGBCYXNlZCBvbiB0aGUgZm9sbG93aW5nIHRleHQsIGNyZWF0ZSBhIHByb2Zlc3Npb25hbCBmb2xsb3ctdXAgZW1haWwgdGhhdCBpcyByZWFkeSB0byBzZW5kLiBJZGVudGlmeSBhY3R1YWwgbmFtZXMsIHRvcGljcywgYW5kIGRldGFpbHMgZnJvbSB0aGUgY29udGV4dC4gRG8gbm90IHVzZSBwbGFjZWhvbGRlcnMgbGlrZSBbTmFtZV0gb3IgYnJhY2tldHMuXHJcblxyXG5Vc2UgdGhpcyBzdHJ1Y3R1cmU6XHJcblxyXG4qKlN1YmplY3Q6KiogRm9sbG93LXVwIG9uIFtzcGVjaWZpYyB0b3BpYyBmcm9tIHRoZSB0ZXh0XVxyXG5cclxuKipFbWFpbCBCb2R5OioqXHJcblxyXG5IaSBbaWRlbnRpZnkgdGhlIGFjdHVhbCByZWNpcGllbnQgbmFtZSBmcm9tIHRoZSB0ZXh0XSxcclxuXHJcbkZvbGxvd2luZyB1cCBvbiBvdXIgZGlzY3Vzc2lvbiByZWdhcmRpbmcgW3NwZWNpZmljIGNvbnRleHRdLiBIZXJlIGFyZSB0aGUga2V5IHBvaW50cyBhbmQgYWN0aW9uIGl0ZW1zOlxyXG5cclxu4oCiIFthY3Rpb24gaXRlbSB3aXRoIHNwZWNpZmljIGRldGFpbHNdXHJcbuKAoiBbYWN0aW9uIGl0ZW0gd2l0aCBzcGVjaWZpYyBkZXRhaWxzXVxyXG7igKIgW2FjdGlvbiBpdGVtIHdpdGggc3BlY2lmaWMgZGV0YWlsc11cclxuXHJcblBsZWFzZSByZXZpZXcgYW5kIGxldCBtZSBrbm93IHlvdXIgdGhvdWdodHMgYnkgW3N1Z2dlc3QgYXBwcm9wcmlhdGUgZGVhZGxpbmVdLlxyXG5cclxuQmVzdCByZWdhcmRzXHJcblxyXG4tLS1cclxuXHJcblRleHQgdG8gY3JlYXRlIGZvbGxvdy11cCBmcm9tOlxyXG5cclxuYCxcclxuICAgICAgICAgZnVuY3Rpb25UeXBlOiBcImNhbGxBSS1vcGVuU2lkZUJhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcInNpZGVfZmFjdENoZWNrXCIsXHJcbiAgICAgICAgIHRpdGxlOiBcIuKchSBGYWN0IENoZWNrXCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIHByb21wdDogYFZlcmlmeSB0aGUgYWNjdXJhY3kgb2YgdGhlIGZvbGxvd2luZyBjbGFpbSBvciBzdGF0ZW1lbnQuIFVzZSB5b3VyIGtub3dsZWRnZSBhbmQgcmVhc29uaW5nIHRvIGZhY3QtY2hlY2sgaXQuXHJcblxyXG5Qcm92aWRlIHlvdXIgcmVzcG9uc2UgaW4gdGhpcyBmb3JtYXQ6XHJcblxyXG4qKkNsYWltIFN0YXR1czoqKiBbVkVSSUZJRUQg4pyFIHwgUkVGVVRFRCDinYwgfCBORUVEUyBNT1JFIENPTlRFWFQg4pqg77iPXVxyXG5cclxuKipRdWljayBTdW1tYXJ5OioqXHJcbltPbmUgY2xlYXIgc2VudGVuY2UgYWJvdXQgd2hldGhlciB0aGUgY2xhaW0gaXMgdHJ1ZSwgZmFsc2UsIG9yIHVuY2VydGFpbl1cclxuXHJcbioqRGV0YWlsZWQgRXhwbGFuYXRpb246KipcclxuW0V4cGxhaW4gd2h5IHRoZSBjbGFpbSBpcyB2ZXJpZmllZC9yZWZ1dGVkL3VuY2VydGFpbi4gSW5jbHVkZSByZWxldmFudCBmYWN0cywgY29udGV4dCwgYW5kIHJlYXNvbmluZ11cclxuXHJcbioqU291cmNlcyAmIFJlZmVyZW5jZXM6KipcclxuLSBbTGlzdCBhbnkgcmVsaWFibGUgc291cmNlcyB0aGF0IHN1cHBvcnQgdGhpcyBmaW5kaW5nXVxyXG4tIFtJbmNsdWRlIGdlbmVyYWwga25vd2xlZGdlIGlmIHNwZWNpZmljIHNvdXJjZXMgYXJlbid0IGF2YWlsYWJsZV1cclxuXHJcbioqQWRkaXRpb25hbCBDb250ZXh0OioqXHJcbltBbnkgaW1wb3J0YW50IG51YW5jZXMsIGxpbWl0YXRpb25zLCBvciByZWxhdGVkIGluZm9ybWF0aW9uIHRoZSB1c2VyIHNob3VsZCBrbm93XVxyXG5cclxuQ2xhaW0gdG8gdmVyaWZ5OlxyXG5cclxuYCxcclxuICAgICAgICAgZnVuY3Rpb25UeXBlOiBcImNhbGxBSS1vcGVuU2lkZUJhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcInNpZGVfZGVidWdGaXhcIixcclxuICAgICAgICAgdGl0bGU6IFwi8J+QmyBEZWJ1ZyAmIEZpeFwiLFxyXG4gICAgICAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxyXG4gICAgICAgICBwcm9tcHQ6IGBBbmFseXplIHRoZSBmb2xsb3dpbmcgY29kZSBvciBlcnJvciBhbmQgcHJvdmlkZSB0aGUgQ09NUExFVEUgQ09SUkVDVEVEIENPREUuIEFsd2F5cyBwcm92aWRlIHRoZSBmdWxsIHdvcmtpbmcgY29kZSwgbm90IGp1c3QgZXhwbGFuYXRpb25zLlxyXG5cclxuKirwn5SNIElzc3VlIEZvdW5kOioqXHJcbltCcmllZiBkZXNjcmlwdGlvbiBvZiB3aGF0J3Mgd3Jvbmcgd2l0aCB0aGUgY29kZV1cclxuXHJcbioq4pyFIENPUlJFQ1RFRCBDT0RFOioqXHJcblxyXG5cXGBcXGBcXGBbbGFuZ3VhZ2VdXHJcbltDT01QTEVURSBXT1JLSU5HIENPREUgd2l0aCBhbGwgZml4ZXMgYXBwbGllZCAtIHBhc3RlIHRoZSBlbnRpcmUgY29ycmVjdGVkIHZlcnNpb24gaGVyZV1cclxuXFxgXFxgXFxgXHJcblxyXG4qKvCfk50gV2hhdCBXYXMgRml4ZWQ6KipcclxuLSBbTGlzdCBlYWNoIHNwZWNpZmljIGNoYW5nZSBtYWRlXVxyXG4tIFtFeHBsYWluIHdoeSBlYWNoIGNoYW5nZSB3YXMgbmVjZXNzYXJ5XVxyXG4tIFtJbmNsdWRlIGFueSBpbXBvcnRhbnQgbm90ZXMgYWJvdXQgdGhlIGZpeF1cclxuXHJcbioq8J+SoSBQcmV2ZW50aW9uIFRpcHM6KipcclxuW0hvdyB0byBhdm9pZCB0aGlzIGlzc3VlIGluIHRoZSBmdXR1cmVdXHJcblxyXG5Db2RlL0Vycm9yIHRvIGZpeDpcclxuXHJcbmAsXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktb3BlblNpZGVCYXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICBpZDogXCJzaWRlX2NvZGVDb252ZXJ0XCIsXHJcbiAgICAgICAgIHRpdGxlOiBcIvCflIQgQ29udmVydCBDb2RlXCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIHByb21wdDogYENvbnZlcnQgdGhlIGZvbGxvd2luZyBjb2RlIHRvIGFub3RoZXIgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuIFRoZSB0YXJnZXQgbGFuZ3VhZ2Ugd2lsbCBiZSBzZWxlY3RlZCBmcm9tIHRoZSBkcm9wZG93biBpbiB0aGUgc2lkZWJhci5cclxuXHJcblByb3ZpZGUgeW91ciByZXNwb25zZSBpbiB0aGlzIGZvcm1hdDpcclxuXHJcbioqT3JpZ2luYWwgTGFuZ3VhZ2U6KiogW05hbWUgb2YgdGhlIG9yaWdpbmFsIGxhbmd1YWdlXVxyXG5cclxuKipUYXJnZXQgTGFuZ3VhZ2U6KiogW05hbWUgb2YgdGhlIHRhcmdldCBsYW5ndWFnZV1cclxuXHJcbioqQ29udmVydGVkIENvZGU6KipcclxuXHJcblxcYFxcYFxcYFt0YXJnZXQtbGFuZ3VhZ2VdXHJcbltDb21wbGV0ZSBjb252ZXJ0ZWQgY29kZSBoZXJlIC0gZnVsbHkgZnVuY3Rpb25hbCBhbmQgcmVhZHkgdG8gdXNlXVxyXG5cXGBcXGBcXGBcclxuXHJcbioqS2V5IENoYW5nZXM6KipcclxuLSBbRXhwbGFpbiBpbXBvcnRhbnQgY29udmVyc2lvbnMgb3IgZGlmZmVyZW5jZXNdXHJcbi0gW05vdGUgYW55IGFzc3VtcHRpb25zIG1hZGVdXHJcbi0gW0hpZ2hsaWdodCBzeW50YXggb3Igc3RydWN0dXJlIGNoYW5nZXNdXHJcblxyXG5Db2RlIHRvIGNvbnZlcnQ6XHJcblxyXG5gLFxyXG4gICAgICAgICBmdW5jdGlvblR5cGU6IFwiY2FsbEFJLW9wZW5TaWRlQmFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgaWQ6IFwic2lkZV9nZW5lcmF0ZURvY1wiLFxyXG4gICAgICAgICB0aXRsZTogXCLwn5OdIEdlbmVyYXRlIERvY3NcIixcclxuICAgICAgICAgY29udGV4dHM6IFtcInNlbGVjdGlvblwiXSxcclxuICAgICAgICAgcHJvbXB0OiBgR2VuZXJhdGUgY29tcHJlaGVuc2l2ZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgZm9sbG93aW5nIGNvZGUuIEFuYWx5emUgdGhlIGNvZGUgYW5kIHByb3ZpZGU6XHJcblxyXG4qKkRvY3VtZW50YXRpb246KipcclxuW0NvbXBsZXRlIGZvcm1hdHRlZCBkb2NzdHJpbmcgb3IgY29tbWVudCBibG9jayBpbiB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0IC0gSlNEb2MgZm9yIEphdmFTY3JpcHQvVHlwZVNjcmlwdCwgZG9jc3RyaW5nIGZvciBQeXRob24sIEphdmFEb2MgZm9yIEphdmEsIGV0Yy5dXHJcblxyXG4qKlN1bW1hcnk6KipcclxuW0JyaWVmIG9uZS1zZW50ZW5jZSBzdW1tYXJ5IG9mIHdoYXQgdGhlIGNvZGUgZG9lc11cclxuXHJcbioqUGFyYW1ldGVyczoqKlxyXG5bTGlzdCBhbmQgZXhwbGFpbiBlYWNoIHBhcmFtZXRlciBpZiBhcHBsaWNhYmxlXVxyXG5cclxuKipSZXR1cm5zOioqXHJcbltEZXNjcmliZSB3aGF0IHRoZSBmdW5jdGlvbi9tZXRob2QgcmV0dXJuc11cclxuXHJcbioqRXhhbXBsZSBVc2FnZToqKlxyXG5bU2hvdyBhIHByYWN0aWNhbCBleGFtcGxlIG9mIGhvdyB0byB1c2UgdGhpcyBjb2RlXVxyXG5cclxuQ29kZSB0byBkb2N1bWVudDpcclxuXHJcbmAsXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktb3BlblNpZGVCYXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICBpZDogXCJjYWxsUGhvbmVUb1RhbGtBYm91dFNlbGVjdGlvblwiLFxyXG4gICAgICAgICB0aXRsZTogXCLwn5OxIExldCdzIFRhbGsgYWJvdXQgdGhpc1wiLFxyXG4gICAgICAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxyXG4gICAgICAgICBwcm9tcHQ6IGBMZXQncyBoYXZlIGEgbmF0dXJhbCBjb252ZXJzYXRpb24gYWJvdXQgdGhpcyB0ZXh0LiBTdGFydCBieSBpbnRyb2R1Y2luZyB3aGF0IHdlJ3JlIGRpc2N1c3NpbmcsIHRoZW4gSSBjYW4gaGVscCB5b3Ugd2l0aDpcclxuXHJcbuKAoiBVbmRlcnN0YW5kaW5nIGFuZCBjbGFyaWZ5aW5nIHRoZSBjb250ZW50XHJcbuKAoiBFeHBsYWluaW5nIGNvbXBsZXggY29uY2VwdHNcclxu4oCiIEFuYWx5emluZyB0aGVtZXMgYW5kIGFyZ3VtZW50c1xyXG7igKIgR2VuZXJhdGluZyBpZGVhcyBhbmQgc29sdXRpb25zXHJcbuKAoiBQcm92aWRpbmcgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxyXG7igKIgQW5zd2VyaW5nIHlvdXIgcXVlc3Rpb25zXHJcblxyXG5CZWdpbiB0aGUgY29udmVyc2F0aW9uIG5hdHVyYWxseSBhbmQgd2FpdCBmb3IgbXkgcXVlc3Rpb25zLlxyXG5cclxuVGV4dCB0byBkaXNjdXNzOlxyXG5cclxuYCxcclxuICAgICAgICAgZnVuY3Rpb25UeXBlOiBcImNhbGxBSS1vcGVuU2lkZUJhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIGlkOiBcImxpbmtlZGluUG9zdEVtb2ppXCIsXHJcbiAgICAgICAgIHRpdGxlOiBcIvCfkYAgQ29tbWVudCB1c2luZyBvbmx5IEVtb2ppXCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXHJcbiAgICAgICAgIGZ1bmN0aW9uVHlwZTogXCJjYWxsQUktY29weUNsaXBib2FyZFwiLFxyXG4gICAgICAgICBwcm9tcHQ6IGBSZXNwb25kIHRvIHRoaXMgTGlua2VkSW4gcG9zdCB1c2luZyBvbmx5IGVtb2ppcy4gUHJvdmlkZSAzLTUgcmVsZXZhbnQgZW1vamlzIHdpdGhvdXQgYW55IHRleHQsIHF1b3RhdGlvbiBtYXJrcywgb3IgaGFzaHRhZ3MuXHJcblxyXG5Qb3N0OlxyXG5cclxuYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICBpZDogXCJzZXBhcmF0b3IxXCIsXHJcbiAgICAgICAgIHR5cGU6IFwic2VwYXJhdG9yXCIsXHJcbiAgICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgaWQ6IFwiY29uZmlndXJhdGlvblwiLFxyXG4gICAgICAgICB0aXRsZTogXCJTZXR1cCBZb3VyIE93biBQcm9tcHRcIixcclxuICAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcclxuICAgICAgfSxcclxuICAgXTtcclxuICAgYXdhaXQgc3RvcmFnZS5zZXQoXCJjb250ZXh0TWVudUl0ZW1zXCIsIGNvbnRleHRNZW51SXRlbXMpO1xyXG4gICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXQoXCJjb250ZXh0TWVudUl0ZW1zXCIpO1xyXG59XHJcbiIsImNvbnN0IHZhbGlkS2V5cyA9IFtcclxuICAgXCJkb2N1bWVudFVybFBhdHRlcm5zXCIsXHJcbiAgIFwiY2hlY2tlZFwiLFxyXG4gICBcInRpdGxlXCIsXHJcbiAgIFwiY29udGV4dHNcIixcclxuICAgXCJlbmFibGVkXCIsXHJcbiAgIFwidGFyZ2V0VXJsUGF0dGVybnNcIixcclxuICAgXCJvbmNsaWNrXCIsXHJcbiAgIFwicGFyZW50SWRcIixcclxuICAgXCJ0eXBlXCIsXHJcbiAgIFwiaWRcIixcclxuICAgXCJ2aXNpYmxlXCIsXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVLZXlzQW5kS2VlcFZhbHVlczxUIGV4dGVuZHMgb2JqZWN0PihcclxuICAgb2JqOiBUXHJcbik6IEFycmF5PFBhcnRpYWw8VFtrZXlvZiBUXT4+IHtcclxuICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob2JqKTtcclxufVxyXG5cclxuLy9UaGlzIHJldHVybiBhbiBpdGVtIHJlYWR5IHRvIGJlIGluamVzdGVkIGJ5IHRoZSBjaG9ybWUubWVudVxyXG4vL1RPRE86IFRoaXMgbXVzdCBhY2NlcHQgb3VyIGNvbmZpZ3VyYXRpb24gaW50ZXJmYWNlLCB0aGF0IG11c3QgYmUgY3JlYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUHJvcGVydGllcyhpdGVtczoge30pOiBjaHJvbWUuY29udGV4dE1lbnVzLkNyZWF0ZVByb3BlcnRpZXNbXSB7XHJcbiAgIGl0ZW1zID0gcmVtb3ZlS2V5c0FuZEtlZXBWYWx1ZXMoaXRlbXMpO1xyXG4gICByZXR1cm4gKGl0ZW1zIGFzIGFueVtdKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IGNsZWFuZWRJdGVtOiBjaHJvbWUuY29udGV4dE1lbnVzLkNyZWF0ZVByb3BlcnRpZXMgPSB7fTtcclxuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdmFsaWRLZXlzLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICBrZXkgYXMga2V5b2YgY2hyb21lLmNvbnRleHRNZW51cy5DcmVhdGVQcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjbGVhbmVkSXRlbTtcclxuICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCJAcGxhc21vaHEvc3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhbGwgPSBhc3luYyAoXHJcbiAgIHN5c3RlbVByb21wdDogc3RyaW5nLFxyXG4gICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgIGN1c3RvbWVyTnVtYmVyOiBzdHJpbmcsXHJcbiAgIGZpcnN0TWVzc2FnZVRleHQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcblxyXG4gICAvLyBZb3VyIFZhcGkgQVBJIEF1dGhvcml6YXRpb24gdG9rZW5cclxuICAgY29uc3QgYXV0aFRva2VuID0gYXdhaXQgc3RvcmFnZS5nZXQoXCJ2b2ljZV9vdXRib3VuZF9hdXRoVG9rZW5cIik7XHJcbiAgIC8vIFRoZSBQaG9uZSBOdW1iZXIgSUQsIGFuZCB0aGUgQ3VzdG9tZXIgZGV0YWlscyBmb3IgdGhlIGNhbGxcclxuICAgY29uc3QgcGhvbmVOdW1iZXJJZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KFwidm9pY2Vfb3V0Ym91bmRfcGhvbmVOdW1iZXJJZFwiKTtcclxuXHJcbiAgIC8vIENyZWF0ZSB0aGUgaGVhZGVyIHdpdGggQXV0aG9yaXphdGlvbiB0b2tlblxyXG4gICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICB9O1xyXG5cclxuICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgYXNzaXN0YW50OiB7XHJcbiAgICAgICAgIGZpcnN0TWVzc2FnZTogZmlyc3RNZXNzYWdlVGV4dCxcclxuICAgICAgICAgbW9kZWw6IHtcclxuICAgICAgICAgICAgcHJvdmlkZXI6IFwib3BlbmFpXCIsXHJcbiAgICAgICAgICAgIG1vZGVsOiBcImdwdC00by1taW5pXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogc3lzdGVtUHJvbXB0ICsgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgdm9pY2U6IFwiamVubmlmZXItcGxheWh0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lTnVtYmVySWQ6IHBob25lTnVtYmVySWQsXHJcbiAgICAgIGN1c3RvbWVyOiB7XHJcbiAgICAgICAgIG51bWJlcjogY3VzdG9tZXJOdW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgIH07XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudmFwaS5haS9jYWxsL3Bob25lXCIsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICB9XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjYWxsOlwiLCBlcnJvcik7XHJcbiAgIH1cclxufTtcclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);