module.exports = (function(settings) {
  settings.test_workers = false;
  settings.page_objects_path = './src/page-objects';
  return settings;
})(require('./nightwatch.json'));