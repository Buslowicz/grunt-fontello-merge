/*
 * grunt-fontello-merge
 * https://github.com/Draccoz/grunt-fontello-merge
 *
 * Copyright (c) 2015 Daniel Busłowicz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      cleanup: ['test/tmp']
    },

    fontello_merge: {
      merge_by_code: {
        files: {
          'test/tmp/code_aa.json': ['test/examples/a.json', 'test/examples/a.json'],
          'test/tmp/code_ab.json': ['test/examples/a.json', 'test/examples/b.json'],
          'test/tmp/code_ac.json': ['test/examples/a.json', 'test/examples/c.json'],
          'test/tmp/code_ad.json': ['test/examples/a.json', 'test/examples/d.json']
        }
      }
      //merge_by_css: {
      //  files: {
      //    'output.json': ['sample_config.json']
      //  }
      //}
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'fontello_merge:merge_by_code', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
