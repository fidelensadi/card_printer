const { BrowserWindow } = require('electron');
const path = require('path');
const { createWindowConfig } = require('../config/windowConfig.cjs');
const { DEV_SERVER_URL } = require('../config/constants.cjs');

function createMainWindow() {
  const win = new BrowserWindow(createWindowConfig());

  // Handle window ready-to-show
  win.once('ready-to-show', () => {
    win.show();
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL(DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../../dist/index.html'));
  }

  return win;
}

module.exports = { createMainWindow };