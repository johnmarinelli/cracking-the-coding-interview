"use strict";

class Node {
  constructor(value) {
    this.mValue = value;
    this.mNext = null;
    this.mId = Node.ID++;
  }
}

Node.ID = 0;

class LinkedList {
  constructor() {
    this.mHead = null;
  }

  add(value) {
    let n = new Node(value);

    if (this.mHead === null) this.mHead = n;
    else {
      let traverser = this.mHead;
      while (traverser.mNext !== null) {
        traverser = traverser.mNext;
      }
      traverser.mNext = n;
    }
  }

  remove(node) {
    if (this.mHead !== null) {
      if (this.mHead.mId === node.mId) {
        this.mHead = this.mHead.mNext;
        return;
      }

      let traverser = this.mHead;
      while (traverser !== null) {
        let tmp = traverser;
        if (tmp.mNext.mId === node.mId) {
          tmp.mNext = tmp.mNext.mNext;
          break;
        }
        traverser = traverser.mNext;
      }
    }
  }

  toString() {
    let str = '[';
    if (this.mHead !== null) {
      let traverser = this.mHead;
      while (traverser !== null) {
        str += traverser.mValue + ', ';
        traverser = traverser.mNext;
      }
    }
    str += ']';
    return str;
  }

  empty() {
    return this.mHead === null;
  }

  size() {
    let size = 0,
        traverser = this.mHead;
    while (traverser !== null) {
      size++;
      traverser = traverser.mNext;
    }
    return size;
  }

  contains(data) {
    let traverser = this.mHead;
    while (traverser !== null) {
      if (traverser.mValue === data) return true;
      traverser = traverser.mNext;
    }
    return false;
  }
};

let removeDupes = (linkedList) => {
  if (linkedList.empty()) return;
  let runner = linkedList.mHead,
      cache = [];

  while (runner !== null) {
    if (cache.indexOf(runner.mValue) === -1) cache.push(runner.mValue);
    runner = runner.mNext;
  }

  let ll = new LinkedList();
  cache.forEach((e) => ll.add(e));

  return ll;
};

let removeNthFromLast = (linkedList, n) => {
  let size = linkedList.size() - 1,
      i = 0,
      span = size - n - 1,
      node = linkedList.mHead;

  if (span < 0) return null;
  
  while (i < span) {
    node = node.mNext;
    ++i;
  }

  linkedList.remove(node);
  return linkedList;
};

let addTwoNums = (ll1, ll2) => {
  let t1 = ll1.mHead,
      t2 = ll2.mHead,
      getNum = (traverser) => {
        let num = 0,
            iterator = 0;
        while (traverser !== null) {
          let d = traverser.mValue,
              exp = d * Math.pow(10, iterator);
          num += exp;
          traverser = traverser.mNext;
          ++iterator;
        }
        return num;
      };
  let num1 = getNum(t1),
      num2 = getNum(t2);
  return num1 + num2;
};

module.exports = {
  LinkedList: LinkedList,
  removeDupes: removeDupes,
  removeNthFromLast: removeNthFromLast,
  addTwoNums: addTwoNums
}
