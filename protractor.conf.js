exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ui-test/**/*.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  onPrepare: function() {
    // disable Angular watchers
    browser.ignoreSynchronization = true
  }
}; 
