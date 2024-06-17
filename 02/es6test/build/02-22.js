"use strict";

/*
 * Promise Chain
 */

var p = new Promise(function (resolve, reject) {
  resolve('first!');
});
p.then(function (msg) {
  console.log(msg);
  throw new Error('error!');
  return 'second';
}).then(function (msg) {
  console.log(msg);
  return 'third';
}).then(function (msg) {
  console.log(msg);
})["catch"](function (error) {
  console.log("\uC624\uB958 \uBC1C\uC0DD: ".concat(error.message));
});