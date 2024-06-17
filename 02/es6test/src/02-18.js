const d1 = new Date();
let name = '홍길동';
let r1 = `${ name } 님에게 ${ d1.toDateString() }에 연락했다.`;
console.log(r1);

let product = `아이폰`;
let price = 189000;
let str = `${ product }의 가격은 
${ price }원 입니다.`;
console.log(str);
