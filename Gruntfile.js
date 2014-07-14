module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: karmaConfig(),
    jshint: jshintConfig(),
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('dev', ['jshint', 'karma:dev']);
  grunt.registerTask('ci', ['jshint', 'karma:continuous']);
  grunt.registerTask('default', ['karma']);
};

function karmaConfig() {
    var options, continuous, dev, config;
    options = {
        configFile: 'karma.conf.js',
        browsers: ['Chrome']
    };
    continuous = {
        singleRun: true
    };
    dev = {
        reporters: ['dots','coverage']
    };
    config = {
      options: options,
      continuous: continuous,
      dev: dev, 
    };
    return config;
}

function jshintConfig() {
    var code, spec, jshint;

    code = ['app/**/*.js'];
    spec = {
        files: {
            src: ['test/unit/*.js'],
        },
        options: {
            globals: {
                 describe: true,
                 it: true,
                 expect: true,
                 beforeEach: true,
                 inject: true,

            },

        },
    };
    jshint = {
          code: code,
          spec: spec,
          options: {
              indent: 4,
              trailing: true,
              latedef: "nofunc",
              maxdepth: 3,
              unused: true,
              nonbsp: true,
              freeze: true,
              reporter: require('jshint-stylish'),
          },
    };
    return jshint;
}
