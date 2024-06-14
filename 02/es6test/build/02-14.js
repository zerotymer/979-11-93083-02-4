"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  window == this && console.log('outer is global');
  window != this && console.log('outer is not global');
  function inner() {
    window == this && console.log('inner is global');
    window != this && console.log('inner is not global');
    this.result = x + y;
  }
  inner = inner.bind(this);
  inner();
};
obj.add(3, 4);
console.log(obj);