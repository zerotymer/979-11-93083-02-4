var obj = { result: 0 };
obj.add = function (x, y) {
  this.result = x + y;
};

var add2 = obj.add;
console.log(add2 === obj.add); // true. 동일한 함수

add2(3, 4);                 // 전역변수 result에 7이 할당됨

console.log(obj);
console.log(result);         // 7