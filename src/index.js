module.exports = function reverse(n) {
    wNum = n * -1;
    num = +wNum.toString().split("").reverse().join("");
    num1 = +n.toString().split("").reverse().join("");
    return n < 0 ? num : num1;
};
