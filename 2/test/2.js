"use strict";

let assert = require('assert'),
    second = require('../2');

describe('2', function() {
  /* Write code to remove duplicates from an unsorted linked list */
  describe('2.1', function() {
    it('should return correct size after removing duplicates', function() {
      let ll = new second.LinkedList();
      ll.add(3);
      ll.add(4);
      ll.add(1);
      ll.add(6);
      ll.add(8);
      ll.add(2);
      ll.add(3);
      ll.add(4);
     
      let ll2 = second.removeDupes(ll);
      assert.equal(6, ll2.size());
    });
  });

  /* Implement an algorithm to find the nth to last element of a singly linked list. */
  describe('2.2', function() {
    it('should return a linked list without the 4th element (3rd from last)', function() {
      let ll = new second.LinkedList();
      ll.add(0);
      ll.add(1);
      ll.add(2);
      ll.add(3);
      ll.add(4);
      ll.add(5);
      ll.add(6);
      ll.add(7);

      let ll2 = second.removeNthFromLast(ll, 3);
      assert.equal(false, ll2.contains(3));
    });
  });

  /* You have two numbers represented by a linked list, where each node contains a sin-
    gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
    the list. Write a function that adds the two numbers and returns the sum as a linked
    list.
    EXAMPLE
    Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
    Output: 8 -> 0 -> 8 */
  describe('2.2', function() {
    it('should return the sum of two numbers', function() {
      let ll1 = new second.LinkedList();
      ll1.add(3);
      ll1.add(1);
      ll1.add(5);
      let ll2 = new second.LinkedList();
      ll2.add(5);
      ll2.add(9);
      ll2.add(2);
      let res = second.addTwoNums(ll1, ll2);
      assert.equal(808, res);
    });
  });
});
