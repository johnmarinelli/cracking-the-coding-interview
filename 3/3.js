"use strict";

class Node {
  constructor(val) {
    this.mValue = val;
    this.mNext = null;
    this.mId = Node.ID++;
  }
};

Node.ID = 0;

class Queue {
  constructor() {
    this.mHead = null;
  }

  peek() {
    if (this.mHead === null) return null;
    else {
      let t = this.mHead;
      while (t.mNext !== null) {
        t = t.mNext;
      }
      return t;
    }
  }

  enqueue(val) {
    let n = new Node(val);
    if (this.mHead === null) this.mHead = n;
    else {
      let t = this.mHead;
      while (t.mNext !== null) {
        t = t.mNext;
      }
      t.mNext = n;
    }
  }

  dequeue() {
    if (this.mHead === null) return null;
    if (this.mHead.mNext === null) {
      let val = this.mHead.mValue;
      this.mHead = null;
      return val;
    }
    else {
      let t = this.mHead,
          prev = t;

      while (t.mNext !== null) {
        prev = t;
        t = t.mNext;
      }

      let val = t.mValue;
      prev.mNext = null;
      return val;
    }
  }

  toString() {
    if (this.mHead === null) return '[]';
    else {
      let t = this.mHead,
          str = '['
      while (t !== null) {
        str += t.mValue + ', ';
        t = t.mNext;
      }
      str += ']';
      return str;
    }
  }

  get length() {
    if (this.mHead === null) return 0;
    else {
      let t = this.mHead,
          len = 0;
      while (t !== null) {
        len++;
        t = t.mNext;
      }

      return len;
    }
  }
}

class Stack {
  constructor() {
    this.mHead = null;
  }

  push(val) {
    let n = new Node(val);
    if (this.mHead === null) this.mHead = n;
    else {
      let t = this.mHead;
      this.mHead = n;
      n.mNext = t;
    }
  }

  pop() {
    if (this.mHead === null) return null;
    else {
      let val = this.mHead.mValue;
      this.mHead = this.mHead.mNext;
      return val;
    }
  }

  peek() {
    return this.mHead;
  }

  toString() {
    if (this.mHead === null) return '[]';
    else {
      let t = this.mHead,
          str = '[';
      while (t !== null) {
        str += t.mValue + ', ';
        t = t.mNext;
      }
      str += ']';
      return str;
    }
  }
}

class NodeWithMin extends Node {
  constructor(val, min) {
    super(val);
    this.mMin = min;
  }
}

class StackWithMin extends Stack {
  push(val) {
    let lastMin = this.getLastMin(),
        min = val < lastMin ? val : lastMin,
        n = new NodeWithMin(val, min);

    if (this.mHead === null) this.mHead = n;
    else {
      let t = this.mHead;
      this.mHead = n;
      n.mNext = t;
    }
  }

  getLastMin() { 
    return this.mHead === null ? Number.MAX_SAFE_INTEGER : this.peek().mMin;
  }
}


module.exports = {
  Stack: Stack,
  Queue: Queue,
  StackWithMin: StackWithMin
};
