"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  var _this = this;
  window == this && console.log('outer is global');
  window != this && console.log('outer is not global');
  var inner = function inner() {
    window == _this && console.log('inner is global');
    window != _this && console.log('inner is not global');
    console.log(_this); // function
    _this.result = x + y;
  };
  inner();
};
obj.add(3, 4);
console.log(obj);