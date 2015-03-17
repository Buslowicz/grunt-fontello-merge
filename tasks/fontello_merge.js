/*
 * grunt-fontello-merge
 * https://github.com/Draccoz/grunt-fontello-merge
 *
 * Copyright (c) 2015 Daniel Busłowicz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-fontello');
  grunt.registerMultiTask('fontello_merge', 'Merge multiple fontello config files based on icon code and download the bundle font set', function () {
    var path = require('path');

    // Default config.json settings
    var fontelloDefaults = {
      "name": "",
      "css_prefix_text": "icon-",
      "css_use_suffix": false,
      "hinting": true,
      "units_per_em": 1000,
      "ascent": 850,
      "glyphs": []
    };


    // Task options & defaults
    var options = this.options({
      fonts: 'fonts/fontello',
      tmp: '.tmp'
    });


    // Setting up fontello task
    grunt.config.merge({
      fontello: {
        dist: {
          options: {
            fonts: options.fonts,
            styles: options.tmp,
            config: path.join(options.tmp, 'fontello.config.json')
          }
        }
      }
    });


    // Override default fontello config.json
    for (var attr in options.fontello) {
      if (!options.fontello.hasOwnProperty(attr)) {
        continue;
      }
      fontelloDefaults[attr] = options.fontello[attr];
    }


    var glyphs = fontelloDefaults.glyphs;
    var srcList = this.files[0].src;  // list of config files to merge


    // Looping over configs to merge them together
    srcList.forEach(function (el) {
      var currentConfig = require(path.resolve(el));
      var codesMap = {};

      // First we need to get list of all icon codes
      glyphs.forEach(function (el, index) {
        codesMap[el.code] = {
          glyph: el,
          index: index
        };
      });

      // Now the proper merge
      currentConfig.glyphs.forEach(function (el) {
        if (codesMap[el.code]) {                               // If there is an icon with that code, override it
          glyphs.splice(codesMap[el.code].index, 1, el);
        } else {                                               // Else append it to the end
          glyphs.push(el);
        }
      });
    });


    // Write new config to file (temporarily) and run the fontello task
    grunt.file.write('.tmp/fontello.config.json', JSON.stringify(fontelloDefaults));
    grunt.task.run('fontello:dist');
  });

};
