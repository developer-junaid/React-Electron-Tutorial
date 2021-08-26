const { app, BrowserWindow } = require("electron");

// Initialize IPC
require("@electron/remote/main").initialize();

// Create Browser Window on load
function createWindow() {
  // Create window logic
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  // Load React App URL
  win.loadURL("http://localhost:3000");
}

// Run On Ready
app.on("ready", createWindow);
