const { WINDOW_DEFAULTS } = require('./constants.cjs');

function createWindowConfig() {
  return {
    ...WINDOW_DEFAULTS,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
      webSecurity: true,
    },
    // Additional window features
    show: false, // Don't show until ready-to-show
    backgroundColor: '#ffffff',
    center: true,
  };
}

module.exports = { createWindowConfig };