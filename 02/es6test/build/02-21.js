"use strict";

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var num = Math.random(); // 0~1 사이의 난수 발생
    num >= 0.8 && reject("\uC0DD\uC131\uB41C \uC22B\uC790\uAC00 0.8\uC774\uC0C1\uC784 - ".concat(num));
    resolve(num);
  }, 2000);
});
p.then(function (result) {
  console.log("\uCC98\uB9AC \uACB0\uACFC: ".concat(result));
});
p["catch"](function (error) {
  console.log("\uC624\uB958: ".concat(error));
});
console.log('## Promise 객체 생성!');