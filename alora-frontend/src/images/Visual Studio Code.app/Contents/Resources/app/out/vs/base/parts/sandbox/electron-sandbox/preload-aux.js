(function(){"use strict";const{ipcRenderer:o,webFrame:n,contextBridge:s}=require("electron");function t(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}const i={ipcRenderer:{send(e,...r){t(e)&&o.send(e,...r)},invoke(e,...r){return t(e),o.invoke(e,...r)}},webFrame:{setZoomLevel(e){typeof e=="number"&&n.setZoomLevel(e)}}};try{s.exposeInMainWorld("vscode",i)}catch(e){console.error(e)}})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/903b1e9d8990623e3d7da1df3d33db3e42d80eda/core/vs/base/parts/sandbox/electron-sandbox/preload-aux.js.map
