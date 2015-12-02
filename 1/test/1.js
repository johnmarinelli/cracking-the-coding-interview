"use strict";

let assert = require('assert'),
    first = require('../1');

describe('1', function() {
/* Implement an algorithm to determine if a string has all unique characters. 
 * What if you can not use additional data structures? */
  describe('1.1', function() {
    it('should return false for string with non unique chars', function() {
      let str = 'aajdfdsajfkasmme';
      assert.equal(false, first.uniqueChars1(str));
      assert.equal(false, first.uniqueChars2(str));
    });

    it('should return true for string with non unique chars', function() {
      let str = 'abcdefghijklmnop';
      assert.equal(true, first.uniqueChars1(str));
      assert.equal(true, first.uniqueChars2(str));
    });
  });

/*Design an algorithm and write code to remove the duplicate characters in a string
  without using any additional buffer. NOTE: One or two additional variables are fine.
  An extra copy of the array is not */
  describe('1.3', function() {
    it('should return a string sans dupes', function() {
      let str = 'aaabbcddeeeffggheeelloooaaa',
        correctStr = 'abcdefghlo';

      assert.equal(correctStr, first.removeDupes(str));
    });

    it('should return a null for an empty string', function() {
      let str = '';

      assert.equal('', first.removeDupes(str));
    });

    it('should return same string for a string with no dupes', function() {
      let str = 'abcdefg',
        correctStr = 'abcdefg';

      assert.equal(correctStr, first.removeDupes(str));
    });
  });

/*Given an image represented by an NxN matrix, where each pixel in the image is 4
  bytes, write a method to rotate the image by 90 degrees. Can you do this in place?*/
  describe('1.6', function() {
    it('should rotate an NxN matrix 90 degrees clockwise', function() {
      let mtx = [ [1, 2, 3, 4, 5],
                  [6, 7, 8, 9, 10],
                  [11,12,13,14,15],
                  [16,17,18,19,20],
                  [21,22,23,24,25] ],
        rotated = [ [21, 16, 11, 6, 1],
                    [22, 17, 12, 7, 2],
                    [23, 18, 13, 8, 3],
                    [24, 19, 14, 9, 4],
                    [25, 20, 15, 10, 5] ];

      let rotatedq = first.rotateMatrix(mtx);

      assert.equal(JSON.stringify(rotated), JSON.stringify(rotatedq));
    });
  });
});

