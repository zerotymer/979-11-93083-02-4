"use strict";

var add = function add(x, y) {
  this.result = x + y;
};
var obj = {};
// 1. apply() 사용
add.apply(obj, [3, 4]);
// 2. call() 사용
//add.call(obj, 3, 4);
// 3. bind() 사용
// var add2 = add.bind(obj);
// add2(3, 4);

console.log(obj); // { result: 7 }