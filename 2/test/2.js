"use strict";

let assert = require('assert'),
    second = require('../2');

describe('2', function() {
  /* Write code to remove duplicates from an unsorted linked list */
  describe('2.1', function() {
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
  });
});
