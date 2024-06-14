var obj = { result: 0 };
obj.add = function(x, y) {

    window == this && console.log('outer is global'); // this is obj.
    window != this && console.log('outer is not global');

    function inner() {
        window == this && console.log('inner is global'); // this is global.
        window != this && console.log('inner is not global');
        this.result = x + y;
    }
    inner();
};
obj.add(3, 4);

console.log(obj);   // object not updated.
console.log(result); // global variable result is updated.