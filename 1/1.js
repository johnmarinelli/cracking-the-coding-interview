"use strict";
/* 
1.1 
Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structures? 
*/

let uniqueChars1 = (str) => {
  let charSet = new Array(256).fill(0),
      unique = true;

  str.split('')
     .forEach((e) => {
       let idx = e.charCodeAt();
       if (charSet[idx] === 1) {
         unique = false;
       }
       charSet[idx] = 1;
     });

  return unique;
};

let uniqueChars2 = (str) => {
  let unique = true;
  // sort string, then cut it into pairs, then filter the empty arrays, then check if pairs are equal
  str.split('')
     .sort()
     .map((e, i, a) => {
        let pair = [];
        if (i % 2 === 0 && i > 0) {
          pair.push(a[i-2], a[i-1]);
        }
        return pair;
      })
     .filter((e) => e.length !== 0)
     .forEach((e) => {
       if (e[0] === e[1]) unique = false;
     });

  return unique;
};

/*Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer. NOTE: One or two additional variables are fine.
An extra copy of the array is not*/
let removeDupes = (str) => {
  let newStr = '';

  str.split('').forEach((e) => {
    if (newStr.indexOf(e) === -1) newStr += e;
  });

  return newStr;
};

/* Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place? */
let rotateMatrix = (mtx) => {
  let layers = mtx.length / 2,
      layer = 0,
      n = mtx.length;

  for (; layer < layers; ++layer) {
    let first = layer,
        last = n - 1 - layer,
        i = first;
    for (; i < last; ++i) {
      let offset = i - first,
          top = mtx[first][i];

      // left -> top
      mtx[first][i] = mtx[last - offset][first];

      // bottom -> left
      mtx[last - offset][first] = mtx[last][last - offset];

      // right -> bottom
      mtx[last][last - offset] = mtx[i][last];

      // top -> right
      mtx[i][last] = top;
    }
  }

  return mtx;
};

module.exports = {
  uniqueChars1: uniqueChars1,
  uniqueChars2: uniqueChars2,
  removeDupes: removeDupes,
  rotateMatrix: rotateMatrix
};
