"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * 전개 연산자
 */

var obj1 = {
  name: '박문수',
  age: 29
};
var obj2 = obj1; // shallow copy! obj1, obj2는 같은 객체를 참조
var obj3 = _objectSpread({}, obj1); // deep copy! 객체 내부의 값은 복사하지만, obj3, obj1은 다른 객체를 참조
var obj4 = _objectSpread(_objectSpread({}, obj1), {}, {
  email: 'mspark@gmail.com'
}); // 새로운 속성 추가

obj2.age = 19;
console.log(obj1); // { name: '박문수', age: 19 }
console.log(obj2); // { name: '박문수', age: 19 }
console.log(obj3); // { name: '박문수', age: 29 }    age가 바뀌지 않음
console.log(obj1 == obj2); // true
console.log(obj1 == obj3); // false

var arr1 = [100, 200, 300];
var arr2 = ['hello'].concat(arr1, ['world']);
console.log(arr1); // [ 100, 200, 300 ]
console.log(arr2); // [ 'hello', 100, 200, 300, 'world' ]