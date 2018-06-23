// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),

      require('karma-phantomjs-launcher'),  /* add this line to disable the karma-phantomjs-launcher*/
      // require('@angular/cli/plugins/karma')
      require('karma-junit-reporter')/** juni reporter */,
      require('karma-htmlfile-reporter')/** html reporter */

    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    junitReporter    : {
      outputDir : require('path').join(__dirname, '../junit-report/test-result.xml'), /*'target/junit-reports/'*/
      outputFile : 'test-result.xml'
    },
    reporters: ['progress', 'kjhtml','html'],
    htmlReporter : {
      outputFile : require('path').join(__dirname, '../junit-html/unit.html'), /*'target/junit-reports/'*/
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
