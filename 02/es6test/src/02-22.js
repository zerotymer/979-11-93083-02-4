/*
 * Promise Chain
 */

let p = new Promise((resolve, reject) => {
    resolve('first!');
});

p.then((msg) => {
    console.log(msg);
    throw new Error('error!');
    return 'second';
})
.then((msg) => {
    console.log(msg);
    return 'third';
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log(`오류 발생: ${ error.message }`);
});