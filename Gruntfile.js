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
      cleanup: ['tmp']
    },

    fontello_merge: {
      options: {
        fonts: 'tmp/fonts', // Where to extract the fonts,
        styles: 'tmp/styles',
        force: true,
        tmp: 'tmp/cache'
      },
      src: [
        'sample_config.json'
      ]
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'fontello_merge']);

};
