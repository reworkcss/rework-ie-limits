'use strict';

/**
 * Test dependencies
 */

var assert = require('assert');
var fs = require('fs');
var selectorLimit = require('../.');
var rework = require('rework');

/**
 * Tests
 */

describe('IE selector limit plugin', function () {
  var underLimit = fs.readFileSync('test/fixtures/4095.css', 'utf-8').toString();
  var overLimit = fs.readFileSync('test/fixtures/4096.css', 'utf-8').toString();

  it('should not throw an Error when the selector limit is not exceeded', function () {
    var output = function () {
      rework(underLimit).use(selectorLimit);
    };

    assert.doesNotThrow(output);
  });

  it('should throw an Error when the selector limit is exceeded', function () {
    var output = function () {
      rework(overLimit).use(selectorLimit);
    };

    assert.throws(output);
  });
});
