/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-05
 */

const Ring = require('../lib/ring');

const ring = new Ring([0, 1, 2, 3, 4, 5, 6, 7, 8], 5);

ring.move(-6);

console.log(ring.length);

console.log(ring.getIndex());
