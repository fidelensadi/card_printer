const { app } = require('electron');
const { setupAppEvents } = require('./events/appEvents.cjs');
const { createMainWindow } = require('./windows/mainWindow.cjs');

async function initializeApp() {
  await app.whenReady();
  const mainWindow = createMainWindow();
  setupAppEvents(mainWindow);
}

initializeApp().catch(console.error);