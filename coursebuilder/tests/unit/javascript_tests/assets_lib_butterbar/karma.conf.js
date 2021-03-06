module.exports = function(config) {
  config.set({
    basePath: '../../../..',
    files: [
      'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
      'tests/unit/javascript_tests/assets_lib_butterbar/*.js',
      'modules/oeditor/resources/butterbar.js',
      {
        pattern: 'tests/unit/javascript_tests/assets_lib_butterbar/*.html',
        watched: true,
        included: false,
        served: true
      }
    ],
    exclude: ['**/karma.conf.js'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
