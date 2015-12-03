"use strict";

let assert = require('assert'),
    fourth = require('../4');

describe('4', function() {
  describe('graph', function() {
    it('should add elements to graph', function() {
      let g = new fourth.Graph();
      let v1 = new fourth.Vertex('a');
      let v2 = new fourth.Vertex('b');
      g.addVertex(v1);
      g.addVertex(v2);
      g.addWeightedEdge(v1, v2, 1);

      assert.equal(1, g.vertices['a']['b']);
    });
  });

  describe('binary tree', function() {
    it('should add elements', function() {
      let bt = new fourth.BinaryTree();
      bt.push(5);
      bt.push(4);
      bt.push(6);
      bt.push(8);
      bt.push(7);
    });
    
    it('should return an array', function() {
      let bt = new fourth.BinaryTree();
      bt.push(5);
      bt.push(4);
      bt.push(6);
      bt.push(8);
      bt.push(7);

      let a = bt.toArray([]);
      assert.equal(5, a.length);
    });

    it('should clear tree', function() {
      let bt = new fourth.BinaryTree();
      bt.push(5);
      bt.push(4);
      bt.push(6);
      bt.push(8);
      bt.push(7);

      bt.clear();
      let a = bt.toArray([]);
      assert.equal(0, a.length);
    });

    it('should return the correct depth', function() {
      let bt = new fourth.BinaryTree();
      bt.push(5);
      bt.push(4);
      bt.push(6);
      bt.push(8);
      bt.push(7);

      let ldepth = bt.leftDepth(),
          rdepth = bt.rightDepth();

      assert.equal(1, ldepth);
      assert.equal(2, rdepth);
    });

  });

  describe('4.1', function() {
    /* Implement a function to check if a tree is balanced. For the purposes of this question,
     * a balanced tree is defined to be a tree such that no two leaf nodes differ in distance
     * from the root by more than one. */
    it('should discern if tree is balanced or nah', function() {
      let bt = new fourth.BinaryTree();
      bt.push(5);
      bt.push(4);
      bt.push(6);
      bt.push(8);
      bt.push(7);

      let ldepth = bt.leftDepth(),
          rdepth = bt.rightDepth();
      assert.equal(true, bt.isBalanced());
    });
  });

  describe('4.4', function() {
    /* Given a binary search tree, design an algorithm which creates a linked list of all the
     * nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).*/
    it('creates a linked list of nodes at each depth', function() {
      let bt = new fourth.BinaryTree();
      bt.push(1);
      bt.push(-1);
      bt.push(-2);
      bt.push(0);
      bt.push(4);
      bt.push(3);
      bt.push(5);
      let lls = bt.getLinkedListsAtEachDepth();
      assert.equal(3, lls.length);
    });

    it('creates a linked list of nodes recursively', function() {
      let bt = new fourth.BinaryTree();
      bt.push(1);
      bt.push(-1);
      bt.push(-2);
      bt.push(0);
      bt.push(4);
      bt.push(3);
      bt.push(5);
      let lls = bt.getLinkedListsAtEachDepthRec();
      assert.equal(3, lls.length);
    });
  });

  describe('4.2', function() {
    /*Given a directed graph, design an algorithm to find out whether there is a route be-
    tween two nodes.*/
    it('should find whether or not there is a route between two vertices', function() {
      let g = new fourth.Graph(),
          v1 = new fourth.Vertex('a'),
          v2 = new fourth.Vertex('b'),
          v3 = new fourth.Vertex('c'),
          v4 = new fourth.Vertex('d'),
          v5 = new fourth.Vertex('e'),
          v6 = new fourth.Vertex('f'),
          v7 = new fourth.Vertex('g');
      g.addWeightedEdge(v1, v2, 1);
      g.addWeightedEdge(v2, v3, 1);
      g.addWeightedEdge(v4, v4, 0);
      g.addWeightedEdge(v4, v3, 1);
      g.addWeightedEdge(v6, v7, 1);
      g.addWeightedEdge(v1, v7, 6);
      g.addWeightedEdge(v7, v4, 4);
      g.addWeightedEdge(v5, v5, 0);

      assert.equal(true, fourth.isRoute(g, v1, v2));
      assert.equal(true, fourth.isRoute(g, v2, v3));
      assert.equal(true, fourth.isRoute(g, v1, v4));
      assert.equal(false, fourth.isRoute(g, v5, v1));
      assert.equal(false, fourth.isRoute(g, v1, v5));
    });
  });
});
