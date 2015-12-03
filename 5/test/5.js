"use strict";

let assert = require('assert'),
    fifth = require('../5');

describe('5', function() {
  /* You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a
   * method to set all bits between i and j in N equal to M (e.g., M becomes a substring of
   * N located at i and starting at j).
   * EXAMPLE:
   * Input: N = 10000000000, M = 10101, i = 2, j = 6
   * Output: N = 10001010100*/
  describe('5.1', function() {
    it('should replace bits', function() {
      let n = 1024,
          m = 21;
      let nn = fifth.replaceBits(n, m, 2, 6);
      assert.equal('0', nn);
    });
  });
});
