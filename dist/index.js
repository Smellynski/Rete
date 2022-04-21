"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
electron_1.app.on('ready', createWindow);
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 500, height: 500,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        show: false
    });
    mainWindow.loadFile('./html/index.html');
    mainWindow.on("ready-to-show", () => mainWindow.show());
}
