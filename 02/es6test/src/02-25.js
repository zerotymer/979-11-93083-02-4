/*
 * Proxy
 */

const arr = [ 1, 2, 3 ];
const proxy = new Proxy(arr, {
    get: function(target, key) {
        console.log(`## get ${ key }`);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${ key })입니다.`);
        return target[key];
    },
    set: function(target, key, value) {
        console.log(`## set ${ key } = ${ value }`);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${ key })입니다.`);
        target[key] = value;
    }
});
proxy[1] = 99;