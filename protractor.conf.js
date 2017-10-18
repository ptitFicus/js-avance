exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/**/*.js'],
  onPrepare: function() {
    browser.ignoreSynchronization = true
  }
};