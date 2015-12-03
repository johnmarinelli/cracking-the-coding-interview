"use strict";

let assert = require('assert'),
    third = require('../3');

describe('3', function() {
  describe('stack', function() {
    it('should pop a value from a lifo tack', function() {
      let stack = new third.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(11);
      stack.push(22);
      let last = stack.pop();
      assert.equal(22, last);
    });

    it('should return the first element of the stack', function() {
      let stack = new third.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(11);
      stack.push(22);
      let last = stack.peek();
      assert.equal(22, last.mValue);
    });
  });

  describe('queue', function() {
    it('should dequeue the last element from the queue', function() {
      let queue = new third.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(11);
      queue.enqueue(22);
      let val = queue.dequeue();
      assert.equal(val, 22);
    });

    it('should dequeue until queue is empty', function() {
      let queue = new third.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(11);
      queue.enqueue(22);
      while (queue.peek() !== null) queue.dequeue();
      assert.equal('[]', queue.toString());
    });
    it('should return the last element of the queue', function() {
      let queue = new third.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(11);
      queue.enqueue(22);
      let last = queue.peek();
      assert.equal(last.mValue, 22);
    });
  });

  /* How would you design a stack which, in addition to push and pop, also has a function
   * min which returns the minimum element? Push, pop and min should all operate in
   * O(1) time. */
  describe('3.2', function() {
    it('returns the min of a queue in constant time', function() {
      let stack = new third.StackWithMin();
      stack.push(1);
      stack.push(2);
      stack.push(11);
      stack.push(22);
      stack.push(-3);
      stack.push(-.5);
      stack.push(1000);
      let val = stack.getLastMin();
      assert.equal(-3, val);
    });
  });

  
});
