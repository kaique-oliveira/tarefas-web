import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    resizable: false

  });


  win.loadURL(" http://localhost:5005/");
};

app.whenReady().then(() => {
  createWindow();
});
