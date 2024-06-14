"use strict";

var p1 = {
  name: '아이패드',
  price: 2000000,
  quntity: 2,
  order: function order() {
    this.amount = this.amount ? this.amount : this.price * this.quntity;
    console.log("\uC8FC\uBB38\uAE08\uC561 : ".concat(this.amount, "\uC6D0"));
  },
  discount: function discount(rate) {
    this.amount = rate > 0 && rate < 0.8 ? (1 - rate) * this.price * this.quntity : this.amount;
    console.log("".concat(rate * 100, "% \uD560\uC778\uB41C \uAE08\uC561\uC73C\uB85C \uAD6C\uB9E4\uD569\uB2C8\uB2E4."));
  }
};
p1.discount(0.2);
p1.order();