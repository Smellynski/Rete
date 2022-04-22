import {app, ipcMain, BrowserWindow } from 'electron';

let mainWindow : BrowserWindow;

app.on('ready', createWindow);

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800, height: 700,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        show: false
    });

    mainWindow.loadFile('./html/index.html');
    mainWindow.on("ready-to-show", () => mainWindow.show());
}