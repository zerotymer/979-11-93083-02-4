"use strict";

/*
 * Proxy
 */
var obj = {
  name: '홍길동',
  age: 20
};
var proxy = new Proxy(obj, {
  get: function get(target, key) {
    console.log("## get ".concat(key));
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4."));
    return target[key];
  },
  set: function set(target, key, value) {
    console.log("## set ".concat(key, " = ").concat(value));
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4."));
    target[key] = value;
  }
});
console.log(proxy.name);
proxy.name = '이몽룡';
proxy.age = 30;