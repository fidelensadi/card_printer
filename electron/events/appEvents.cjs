const { app, BrowserWindow } = require('electron');
const { createMainWindow } = require('../windows/mainWindow.cjs');

function setupAppEvents(mainWindow) {
  // Handle window activation
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

  // Handle window close
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // Handle window focus
  mainWindow.on('focus', () => {
    // Add any focus-related logic here
  });
}

module.exports = { setupAppEvents };