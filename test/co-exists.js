/**
 * Module Dependencies
 */

var assert = require('assert');
var exists = require('../');

/**
 * Tests
 */

describe('co-exists', function() {
  it('should work with arrays', function*() {
    var path = yield exists(['index.js', 'Makefile']);
    assert('index.js' == path);
  })

  it('should return false if there are no matches', function*() {
    var path = yield exists(['zomg', 'lol']);
    assert(!path);
  })

  it('should return the first match', function*() {
    var path = yield exists(['zomg', 'index.js', 'Makefile']);
    assert('index.js' == path);
  })

  it('should work with strings', function*() {
    var path = yield exists('index.js');
    assert('index.js' == path);
    var path = yield exists('zomg');
    assert(!path);
  })

  it('should return false if empty', function*() {
    var path = yield exists();
    assert(!path);
  })
})
