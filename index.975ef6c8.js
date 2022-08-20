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
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _indexScss = require("./index.scss");
var _authorization = require("./pages/auth/authorization");
var _registration = require("./pages/auth/registration");
var _500 = require("./pages/errors/500");
var _404 = require("./pages/errors/404");
var _main = require("./pages/profile/main");
var _modal = require("./modules/modal");
var _identity = require("./utils/identity");
const main = document.querySelector("main");
document.querySelector("body").className = "scroll scroll-bold";
window.addEventListener("DOMContentLoaded", function() {
    const navigation = document.querySelectorAll("header a");
    navigation.forEach(function(item) {
        item.onclick = function(e) {
            e.preventDefault();
            viewPage(this.getAttribute("href"));
        };
    });
    let currentUrl = window.location.pathname.trim().replace("/", "");
    viewPage(currentUrl);
});
function viewPage(url) {
    url = url.trim().replace("/", "");
    main.innerHTML = "";
    switch(url){
        case "registration":
            main.append((0, _registration.getRegistration)());
            break;
        case "authorization":
            main.append((0, _authorization.getAuthorization)());
            break;
        case "profile":
            main.append((0, _main.getProfileMain)());
            break;
        case "404":
            main.append((0, _404.getPage404)());
            break;
        case "500":
            main.append((0, _500.getPage500)());
            break;
        case "modal":
            main.append((0, _modal.getModal)());
            break;
        default:
            main.append((0, _404.getPage404)());
    }
} //console.log(isEmpty([1,2,3]));

},{"./index.scss":"lJZlQ","./pages/auth/authorization":"bvOgT","./pages/auth/registration":"lOMzM","./pages/errors/500":"5NQl4","./pages/errors/404":"kSg7o","./pages/profile/main":"bhUSd","./modules/modal":"ewqAa","./utils/identity":"eYpgc"}],"lJZlQ":[function() {},{}],"bvOgT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAuthorization", ()=>getAuthorization);
var _index = require("../index");
function getAuthorization() {
    const context = {
        headPage: "Вход",
        inputs: [
            {
                idInput: "login_input",
                labelText: "Логин",
                nameInput: "login"
            },
            {
                idInput: "password_input",
                labelText: "Пароль",
                nameInput: "password"
            }
        ],
        buttons: [
            {
                classButton: "btn-primary",
                typeButton: "button",
                textButton: "Войти"
            }
        ],
        links: [
            {
                hrefLink: "auth/authorization",
                textLink: "Нет аккаунта?"
            }
        ]
    };
    return (0, _index.getAuth)(context);
}

},{"../index":"g8NmV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8NmV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAuth", ()=>getAuth);
var _authTmpl = require("./auth.tmpl");
function getAuth(context) {
    return (0, _authTmpl.templateAuth)(context);
}

},{"./auth.tmpl":"5ImxP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ImxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateAuth", ()=>templateAuth);
var _generator = require("../../templator/generator");
var _input = require("../../components/input");
var _button = require("../../components/button");
var _link = require("../../components/link");
function templateAuth(context) {
    const tree = {
        tag: "section",
        attributes: [
            {
                attr: "class",
                val: "section-auth"
            }
        ],
        nest: [
            {
                tag: "H1",
                text: "{% headPage %}"
            }
        ]
    };
    let blockAuthorization = new (0, _generator.Generator)(context);
    const auth = blockAuthorization.template(tree);
    if (context) {
        if (Array.isArray(context.inputs)) context.inputs.map((item)=>auth.append((0, _input.getInput)(item)));
        if (Array.isArray(context.buttons)) context.buttons.map((item)=>auth.append((0, _button.getButton)(item)));
        if (Array.isArray(context.links)) context.links.map((item)=>auth.append((0, _link.getLink)(item)));
    }
    return auth;
}

},{"../../templator/generator":"0ZwRY","../../components/input":"8Cm93","../../components/button":"f08eE","../../components/link":"5bTod","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0ZwRY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Generator", ()=>Generator);
var _element = require("./element");
class Generator {
    constructor(ElementContext){
        this._ElementContext = ElementContext;
    }
    template(tree) {
        return this._createElement(tree);
    }
    _createElement(tree) {
        let newElement;
        newElement = (0, _element.element)(this._ElementContext, tree);
        if (tree.nest) tree.nest.map((item)=>newElement.append(this._createElement(item)));
        return newElement;
    }
}

},{"./element":"5eYkI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eYkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "element", ()=>element);
var _replaceBrace = require("./replace_brace");
function element(context = false, element) {
    const result = document.createElement(element.tag);
    if (element.attributes) {
        let val = "";
        element.attributes.forEach(function(item) {
            val = (0, _replaceBrace.replaceBrace)(context, item.val);
            result.setAttribute(item.attr, val);
        });
    }
    if (element.text) result.innerText = (0, _replaceBrace.replaceBrace)(context, element.text);
    return result;
}

},{"./replace_brace":"5S2hh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5S2hh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "replaceBrace", ()=>replaceBrace);
var _getContext = require("./get_context");
function replaceBrace(context, str) {
    const TEMPLATE_REGEXP = /\{%(.*?)%}/gi;
    const regEx = RegExp(TEMPLATE_REGEXP, "gi");
    let ctx = null;
    if (context) {
        while(ctx = regEx.exec(str))if (ctx[1]) str = str.replaceAll(new RegExp(ctx[0], "gi"), (0, _getContext.getContext)(context, ctx[1].trim(), null));
    }
    return str;
}

},{"./get_context":"6F4DE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6F4DE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContext", ()=>getContext);
function getContext(context, str, defaultValue) {
    let keys = "";
    let result = context;
    keys = str.split(".");
    for (let key of keys){
        result = context[key];
        if (result === undefined) return defaultValue;
    }
    return result ?? defaultValue;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"8Cm93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInput", ()=>getInput);
var _inputTmpl = require("./input.tmpl");
function getInput(context) {
    return (0, _inputTmpl.templateInput)(context);
}

},{"./input.tmpl":"867JV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"867JV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateInput", ()=>templateInput);
var _generator = require("../../templator/generator");
function templateInput(context) {
    const tree = {
        tag: "div",
        attributes: [
            {
                attr: "class",
                val: "div_input"
            }
        ],
        nest: [
            {
                tag: "label",
                attributes: [
                    {
                        attr: "for",
                        val: "{% idInput %}"
                    }
                ],
                text: "{% labelText %}"
            },
            {
                tag: "input",
                attributes: [
                    {
                        attr: "id",
                        val: "{% idInput %}"
                    },
                    {
                        attr: "name",
                        val: "{% nameInput %}"
                    }
                ]
            }
        ]
    };
    let textArea = new (0, _generator.Generator)(context);
    return textArea.template(tree);
}

},{"../../templator/generator":"0ZwRY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f08eE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getButton", ()=>getButton);
var _buttonTmpl = require("./button.tmpl");
function getButton(context) {
    return (0, _buttonTmpl.templateButton)(context);
}

},{"./button.tmpl":"lPo9h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPo9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateButton", ()=>templateButton);
var _generator = require("../../templator/generator");
function templateButton(context) {
    const tree = {
        tag: "button",
        attributes: [
            {
                attr: "class",
                val: "{% classButton %}"
            },
            {
                attr: "type",
                val: "{% typeButton %}"
            }, 
        ],
        text: "{% textButton %}"
    };
    let textArea = new (0, _generator.Generator)(context);
    return textArea.template(tree);
}

},{"../../templator/generator":"0ZwRY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bTod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLink", ()=>getLink);
var _linkTmpl = require("./link.tmpl");
function getLink(context) {
    return (0, _linkTmpl.templateLink)(context);
}

},{"./link.tmpl":"jDvWl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDvWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateLink", ()=>templateLink);
var _generator = require("../../templator/generator");
function templateLink(context) {
    const tree = {
        tag: "a",
        attributes: [
            {
                attr: "href",
                val: "{% hrefLink %}"
            }
        ],
        text: "{% textLink %}"
    };
    let link = new (0, _generator.Generator)(context);
    return link.template(tree);
}

},{"../../templator/generator":"0ZwRY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOMzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRegistration", ()=>getRegistration);
var _index = require("../index");
function getRegistration() {
    const context = {
        headPage: "Регистрация",
        inputs: [
            {
                idInput: "login_input",
                labelText: "Имя",
                nameInput: "first_name"
            },
            {
                idInput: "login_input",
                labelText: "Фамилия",
                nameInput: "second_name"
            },
            {
                idInput: "login_input",
                labelText: "Логин",
                nameInput: "login"
            },
            {
                idInput: "login_input",
                labelText: "E-mail",
                nameInput: "email"
            },
            {
                idInput: "login_input",
                labelText: "Пароль",
                nameInput: "password"
            },
            {
                idInput: "password_input",
                labelText: "Телефон",
                nameInput: "phone"
            }
        ],
        buttons: [
            {
                classButton: "btn-danger",
                typeButton: "button",
                textButton: "Регистрация"
            }
        ]
    };
    return (0, _index.getAuth)(context);
}

},{"../index":"g8NmV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NQl4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPage500", ()=>getPage500);
var _index = require("../index");
function getPage500() {
    const context = {
        errorPageHead: "500",
        errorPageText: "Мы уже фиксим"
    };
    return (0, _index.getErrorsPage)(context);
}

},{"../index":"b3ydn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ydn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getErrorsPage", ()=>getErrorsPage);
var _errorsTmpl = require("./errors.tmpl");
function getErrorsPage(context) {
    return (0, _errorsTmpl.templateErrors)(context);
}

},{"./errors.tmpl":"erbfw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erbfw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateErrors", ()=>templateErrors);
var _generator = require("../../templator/generator");
function templateErrors(context) {
    const tree = {
        tag: "section",
        attributes: [
            {
                attr: "class",
                val: "section-error"
            }, 
        ],
        nest: [
            {
                tag: "H1",
                text: "{% errorPageHead %}"
            },
            {
                tag: "span",
                text: "{% errorPageText %}"
            },
            {
                tag: "a",
                attributes: [
                    {
                        attr: "href",
                        val: "list_chats"
                    }
                ],
                text: "Назад к чатам"
            }, 
        ]
    };
    let pageError = new (0, _generator.Generator)(context);
    return pageError.template(tree);
}

},{"../../templator/generator":"0ZwRY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSg7o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPage404", ()=>getPage404);
var _index = require("../index");
function getPage404() {
    const context = {
        errorPageHead: "404",
        errorPageText: "Нет такой страницы"
    };
    return (0, _index.getErrorsPage)(context);
}

},{"../index":"b3ydn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhUSd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProfileMain", ()=>getProfileMain);
var _index = require("../index");
function getProfileMain() {
    const context = {
        errorPageHead: "500",
        errorPageText: "Мы уже фиксим",
        inputs: [
            {
                idInput: "login_input",
                labelText: "Имя",
                nameInput: "first_name"
            },
            {
                idInput: "login_input",
                labelText: "Фамилия",
                nameInput: "second_name"
            },
            {
                idInput: "login_input",
                labelText: "Логин",
                nameInput: "login"
            },
            {
                idInput: "login_input",
                labelText: "E-mail",
                nameInput: "email"
            },
            {
                idInput: "login_input",
                labelText: "Пароль",
                nameInput: "password"
            },
            {
                idInput: "password_input",
                labelText: "Телефон",
                nameInput: "phone"
            }
        ]
    };
    return (0, _index.extendsProfile)(context);
}

},{"../index":"14hhl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14hhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extendsProfile", ()=>extendsProfile);
var _profileTmpl = require("./profile.tmpl");
function extendsProfile(context) {
    return (0, _profileTmpl.templateProfile)(context);
}

},{"./profile.tmpl":"5NXVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NXVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateProfile", ()=>templateProfile);
var _generator = require("../../templator/generator");
var _input = require("../../components/input");
var _button = require("../../components/button");
var _link = require("../../components/link");
var _buttons = require("./components/buttons");
var _avatar = require("./components/avatar");
function templateProfile(context) {
    const tree = {
        tag: "section",
        attributes: [
            {
                attr: "class",
                val: "section-profile"
            }
        ]
    };
    let profile = new (0, _generator.Generator)(context);
    const tmplProfile = profile.template(tree);
    tmplProfile.prepend((0, _avatar.getProfileAvatar)());
    if (context) {
        if (Array.isArray(context.inputs)) context.inputs.map((item)=>tmplProfile.append((0, _input.getInput)(item)));
    }
    tmplProfile.append((0, _buttons.getProfileButtons)());
    return tmplProfile;
}

},{"../../templator/generator":"0ZwRY","../../components/input":"8Cm93","../../components/button":"f08eE","../../components/link":"5bTod","./components/buttons":"58j4f","./components/avatar":"e0942","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58j4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProfileButtons", ()=>getProfileButtons);
var _profileButtonsTmpl = require("./profile_buttons.tmpl");
function getProfileButtons() {
    const context = [
        {
            classButton: "btn-primary",
            typeButton: "button",
            textButton: "Редактировать"
        },
        {
            classButton: "btn-primary",
            typeButton: "button",
            textButton: "Сменить пароль"
        },
        {
            classButton: "btn-danger",
            typeButton: "button",
            textButton: "Выход"
        }
    ];
    return (0, _profileButtonsTmpl.templateProfileButtons)(context);
}

},{"./profile_buttons.tmpl":"gYVUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYVUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateProfileButtons", ()=>templateProfileButtons);
var _generator = require("../../../../templator/generator");
var _button = require("../../../../components/button");
function templateProfileButtons(context) {
    const tree = {
        tag: "div",
        attributes: [
            {
                attr: "class",
                val: "section-profile__profile-buttons"
            }, 
        ]
    };
    let profileButton = new (0, _generator.Generator)().template(tree);
    context.map((item)=>profileButton.append((0, _button.getButton)(item)));
    return profileButton;
}

},{"../../../../templator/generator":"0ZwRY","../../../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0942":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProfileAvatar", ()=>getProfileAvatar);
var _avatarTmpl = require("./avatar.tmpl");
function getProfileAvatar() {
    const context = {
        profileAvatar: "src/images/profile.jpg",
        avatarAlt: ""
    };
    return (0, _avatarTmpl.templateProfileAvatar)(context);
}

},{"./avatar.tmpl":"5Qhcu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Qhcu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateProfileAvatar", ()=>templateProfileAvatar);
var _generator = require("../../../../templator/generator");
function templateProfileAvatar(context) {
    const tree = {
        tag: "div",
        attributes: [
            {
                attr: "class",
                val: "div-avatar"
            }
        ],
        nest: [
            {
                tag: "div",
                attributes: [
                    {
                        attr: "class",
                        val: "div-avatar__container-img"
                    }
                ],
                nest: [
                    {
                        tag: "img",
                        attributes: [
                            {
                                attr: "img",
                                val: "{% profileAvatar %}"
                            },
                            {
                                attr: "alt",
                                val: "{% avatarAlt %}"
                            }
                        ]
                    }
                ]
            },
            {
                tag: "a",
                attributes: [
                    {
                        attr: "href",
                        val: "qwer"
                    }
                ],
                text: "Сменить фото"
            }
        ]
    };
    return new (0, _generator.Generator)(context).template(tree);
}

},{"../../../../templator/generator":"0ZwRY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewqAa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getModal", ()=>getModal);
var _modalTmpl = require("./modal.tmpl");
function getModal() {
    const context = {
        modalHeader: "Загрузите файл",
        modalBody: "Выбрать файл с компьютера",
        modalButton: {
            classButton: "btn-primary",
            typeButton: "button",
            textButton: "Поменять"
        }
    };
    return (0, _modalTmpl.templateModal)(context);
}

},{"./modal.tmpl":"iCLP4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLP4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateModal", ()=>templateModal);
var _generator = require("../../templator/generator");
var _button = require("../../components/button");
function templateModal(context) {
    const tree = {
        tag: "div",
        attributes: [
            {
                attr: "class",
                val: "div-modal"
            }, 
        ],
        nest: [
            {
                tag: "div",
                attributes: [
                    {
                        attr: "class",
                        val: "div-modal__modal"
                    }
                ],
                nest: [
                    {
                        tag: "h3",
                        attributes: [
                            {
                                attr: "class",
                                val: "div-modal__modal_header"
                            }
                        ],
                        text: "{% modalHeader %}"
                    },
                    {
                        tag: "a",
                        attributes: [
                            {
                                attr: "class",
                                val: "div-modal__modal_body"
                            },
                            {
                                attr: "href",
                                val: "src/action"
                            }
                        ],
                        text: "{% modalBody %}"
                    },
                    {
                        tag: "div",
                        attributes: [
                            {
                                attr: "class",
                                val: "div-modal__modal_footer"
                            }
                        ]
                    }, 
                ]
            }, 
        ]
    };
    let modal = new (0, _generator.Generator)(context).template(tree);
    modal.querySelector(".div-modal__modal_footer").append((0, _button.getButton)(context.modalButton));
    return modal;
}

},{"../../templator/generator":"0ZwRY","../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYpgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
function identity(value) {
    return value;
}
function last(array) {
    if (Array.isArray(array)) return array[array.length - 1];
    else return undefined;
}
function first(array) {
    if (Array.isArray(array)) return array[0];
    else return undefined;
}
function range(start = 0, end, step = 1, isRight = true) {
    let result = [];
    if (end === undefined) {
        end = start;
        start = 0;
    }
    for(let n = Math.abs(start); n < Math.abs(end); n += Math.abs(step === 0 ? 1 : step))if (step === 0) result.push(start);
    else result.push(n);
    if (start < 0 || end < 0 || step < 0) result = result.map((item)=>item !== 0 ? -Math.abs(item) : item);
    if (isRight) result = result.reverse();
    return result;
}
function isEmpty(variable) {
    const type = typeof variable;
    if (variable == null || variable === Number || variable === Set || variable === Map || variable === Array || variable === Object) return true;
    if (type === "boolean") return true;
    if (type === "string") return !variable;
    if (type === "number") return true;
    if (Array.isArray(variable)) return !variable.length;
    if (type === "object") return !Object.keys(variable).length;
    return !variable;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequirefc40")

//# sourceMappingURL=index.975ef6c8.js.map
