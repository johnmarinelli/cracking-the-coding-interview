"use strict";

let Queue = require('../3/3').Queue;

class Node {
  constructor(val) {
    this.mValue = val;
    this.mLeft = null;
    this.mRight = null;
  }
}

class BinaryTree {
  constructor() {
    this.mHead = null;
  }

  push(val) {
    let n = new Node(val);

    if (this.mHead === null) this.mHead = n;
    else {
      let t = this.mHead,
          prev = null;

      while (t !== null) {
        prev = t;
        if (val < t.mValue) t = t.mLeft;
        else if (val >= t.mValue) t = t.mRight;
      }

      if (val < prev.mValue) prev.mLeft = n;
      else prev.mRight = n;
    }
  }

  leftDepth(t) {
    if (t === undefined) t = this.mHead;
    if (t.mLeft === null) return 0;
    return 1 + this.leftDepth(t.mLeft);
  }

  rightDepth(t) {
    if (t === undefined) t = this.mHead;
    if (t.mRight === null) return 0;
    return 1 + this.rightDepth(t.mRight);
  }

  inOrder(node) {
    if (node === undefined) node = this.mHead;
    if (node === null) return;
    this.inOrder(node.mLeft);
    console.log(node.mValue);
    this.inOrder(node.mRight);
  }
  
  preOrder(node) {
    if (node === undefined) node = this.mHead;
    if (node === null) return;
    this.preOrder(node.mLeft);
    this.preOrder(node.mRight);
    console.log(node.mValue);
  }

  postOrder(node) {
    if (node === undefined) node = this.mHead;
    if (node === null) return;
    console.log(node.mValue);
    this.postOrder(node.mLeft);
    this.postOrder(node.mRight);
  }

  toArray(ary, node) {
    if (ary === undefined) ary = [];
    if (node === undefined) node = this.mHead;
    if (node === null) return [];
    this.toArray(ary, node.mLeft);
    ary.push(node.mValue);
    this.toArray(ary, node.mRight);
    return ary;
  }

  clear(node) {
    if (node === undefined) node = this.mHead;
    if (node === null) return;
    this.clear(node.mLeft);
    this.clear(node.mRight);
    node.mLeft = null;
    node.mRight = null;
    this.mHead = null;
  }

  isBalanced() {
    return Math.abs(this.leftDepth() - this.rightDepth()) <= 1;
  }

  getLinkedListsAtEachDepthRec(node, lls, lvl) {
    if (lls == undefined) lls = Array.from({ length: Math.max(this.leftDepth(), this.rightDepth()) + 1 }, () => []);
    if (node === undefined) node = this.mHead;
    if (lvl === undefined) lvl = 0;

    if (node === null) return;

    lls[lvl].push(node);
    lvl++;
    this.getLinkedListsAtEachDepthRec(node.mLeft, lls, lvl);
    this.getLinkedListsAtEachDepthRec(node.mRight, lls, lvl);

    return lls;
  }

  getLinkedListsAtEachDepth() {
    if (this.mHead === null) return [];

    let lls = [],
        level = 0,
        level0 = [this.mHead];

    lls.push(level0);

    while (true) {
      let levelN = [];

      for (var i = 0; i < lls[level].length; ++i) {
        let tmp = lls[level][i];
        if (tmp !== null) {
          if (tmp.mLeft !== null) levelN.push(tmp.mLeft);
          if (tmp.mRight !== null) levelN.push(tmp.mRight);
        }
      }
      if (levelN.length > 0) lls.push(levelN);
      else break;
      level++;
    }

    return lls;
  }
}

class Vertex {
  constructor(val) {
    this.mValue = val;
    this.mId = Vertex.ID++;
  }
}

Vertex.ID = 0;

class Graph {
  constructor() {
    this.mVertices = {};
  }

  addVertex(vtx) {
    this.mVertices[vtx.mValue] = this.mVertices[vtx.mValue] || {};
  }

  addWeightedEdge(v1, v2, w) {
    if (this.mVertices[v1.mValue] === undefined) this.addVertex(v1);
    if (this.mVertices[v2.mValue] === undefined) this.addVertex(v2);
    this.mVertices[v1.mValue][v2.mValue] = w;
    // uncomment for bidirectional
    //this.mVertices[v2.mValue][v1.mValue] = w;
  }

  get vertices() {
    return this.mVertices;
  }
}

let isRoute = (g, v1, v2) => {
  if (v1.mValue === v2.mValue) return true;
  let v1neighbors = g.vertices[v1.mValue];
  for (var n in v1neighbors) {
    // prevent inf recursion
    if (n !== v1.mValue) {
      let exists = isRoute(g, new Vertex(n), v2);
      if (exists) return true;
    }
  }

  return false;
};

module.exports = {
  BinaryTree: BinaryTree,
  Graph: Graph,
  Vertex: Vertex,
  isRoute: isRoute
};
