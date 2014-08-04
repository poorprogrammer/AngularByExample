// Karma configuration
// Generated on Tue Jun 25 2013 13:36:03 GMT+0700 (SE Asia Standard Time)

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    // libraries
    'scripts/angular.min.js',
    'scripts/*.js',

    // our app
    'app/poc/*.js',
    'app/services/*.js',
    'app/weather/*.js',
    'app/*.js',

    // tests
    'test/unit/*',
    'test/weather/*',
    // templates

    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots','coverage'],

	preprocessors: {
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
      'app/**': ['coverage']
    },


    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage'
    },


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
