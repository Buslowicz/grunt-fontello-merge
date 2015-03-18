'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.fontello_merge = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  merge_by_code: function(test) {
    var expected, actual;
    test.expect(4);

    actual = grunt.file.readJSON('test/tmp/code_aa.json');
    expected = grunt.file.readJSON('test/examples/a.json');
    test.deepEqual(actual.glyphs, expected.glyphs, 'Config merged with itself should not change');

    actual = grunt.file.readJSON('test/tmp/code_ab.json');
    expected = grunt.file.readJSON('test/expected/code_ab.json');
    test.deepEqual(actual.glyphs, expected.glyphs, 'Configs merged without conflict should concatenate');

    actual = grunt.file.readJSON('test/tmp/code_ac.json');
    expected = grunt.file.readJSON('test/expected/code_ac.json');
    test.deepEqual(actual.glyphs, expected.glyphs, 'Further configs should override any conflicted glyphs');

    actual = grunt.file.readJSON('test/tmp/code_ad.json');
    expected = grunt.file.readJSON('test/expected/code_ad.json');
    test.deepEqual(actual.glyphs, expected.glyphs, 'Conflicts should be resolved , non conflicted glyphs should append');

    test.done();
  }
  //merge_by_css: function(test) {
  //  // TODO: merge by css examples and tests
  //  test.done();
  //}
};
