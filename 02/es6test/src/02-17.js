let p1 = {
    name: '아이패드',
    price: 2000000,
    quntity: 2,
    order: function() {
        this.amount = this.amount ? this.amount : this.price * this.quntity;
        console.log(`주문금액 : ${this.amount}원`);
    },
    discount(rate) {
        this.amount = (rate > 0 && rate < 0.8 ) ? (1 - rate) * this.price * this.quntity : this.amount;
        console.log(`${rate * 100}% 할인된 금액으로 구매합니다.`);
    }
};

p1.discount(0.2);
p1.order();