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
        this.mHead = null;
        return;
      }

      let traverser = this.mHead;
      while (traverser !== null) {
        let tmp = traverser;
        if (tmp.mNext.mId === node.mId) {
          tmp.mNext = tmp.mNext.mNext;
          break;
        }
        traverser = traverser.next;
      }
    }
  }

  toString() {
    if (this.mHead !== null) {
      let traverser = this.mHead;
      while (traverser !== null) {
        console.log(traverser.mValue);
        traverser = traverser.mNext;
      }
    }
  }

  empty() {
    return this.mHead === null;
  }
};

let removeDupes = (linkedList) => {
  if (linkedList.empty()) return;

  let prev = linkedList.mHead,
      current = linkedList.mHead.mNext;

  while (current !== null) {
    let runner = linkedList.mHead;

    while (runner.mId !== current.mId) {
      if (runner.mValue === current.mValue) {
        break;
      }
      runner = runner.mNext;
    }

    if (runner.mId === current.mId) {
      prev = current;
      current = prev.mNext;
    }
  }

  return linkedList;
};

let ll = new LinkedList();
ll.add(1);
ll.add(1);
ll.add(1);
ll.add(2);
ll.add(3);
let ll2 = removeDupes(ll);

module.exports = {
  LinkedList: LinkedList,
  removeDupes: removeDupes,
}
