/*
 * grunt-fontello-merge
 * https://github.com/Draccoz/grunt-fontello-merge
 *
 * Copyright (c) 2015 Daniel Busłowicz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var path = require('path');

  function doMerge(file) {
    // A bit of caching
    var options = this;
    var mf = options.mergeFactor;
    var srcList = file.src;  // list of config files to merge

    var glyphs = [];


    // Looping over configs to merge them together
    srcList.forEach(function (el) {
      var currentConfig = grunt.file.readJSON(path.resolve(el)).glyphs;
      var map = {};

      // First we need to get list of all icon codes
      glyphs.forEach(function (el, index) {
        map[el[mf]] = {
          glyph: el,
          index: index
        };
      });

      // Now the proper merge
      currentConfig.forEach(function (el) {
        var mappedElement = map[el[mf]];
        if (mappedElement) {                               // If there is an icon with that code, override it
          glyphs.splice(mappedElement.index, 1, el);
        } else {                                               // Else append it to the end
          glyphs.push(el);
        }
      });
    });


    var filepath = file.dest;

    // Write new config to file (temporarily) and run the fontello task
    options.configJson.glyphs = glyphs;
    grunt.file.write(filepath, JSON.stringify(options.configJson));

    grunt.log.writeln('`' + filepath + '` created');
  }

  grunt.registerMultiTask('fontello_merge', 'Merge multiple fontello config files based on icon code', function () {

    // Default config.json settings
    var defaultConfigJson = {
      "name": "",
      "css_prefix_text": "icon-",
      "css_use_suffix": false,
      "hinting": true,
      "units_per_em": 1000,
      "ascent": 850
    };


    // Task options & defaults
    var options = this.options({
      mergeFactor: 'code',
      configJson: defaultConfigJson
    });


    // Override default fontello config.json
    for (var attr in options.configJson) {
      if (!options.configJson.hasOwnProperty(attr)) {
        continue;
      }
      defaultConfigJson[attr] = options.configJson[attr];
    }


    this.files.forEach(doMerge.bind(options));
  });

};
