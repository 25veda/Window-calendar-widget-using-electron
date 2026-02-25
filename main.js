const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    title: "My little calendar",
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",

    alwaysOnTop: true,   // ⭐ stays visible
    skipTaskbar: true,   // ⭐ no taskbar icon
    hasShadow: false,    // ⭐ cleaner widget look

    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);



app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
