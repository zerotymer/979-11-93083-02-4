var obj = { result: 0 };
obj.add = function(x, y) {

    window == this && console.log('outer is global');
    window != this && console.log('outer is not global');

    const inner = () => {
        window == this && console.log('inner is global');
        window != this && console.log('inner is not global');
        console.log(this); // function
        this.result = x + y;
    };
    inner();
};
obj.add(3, 4);

console.log(obj);