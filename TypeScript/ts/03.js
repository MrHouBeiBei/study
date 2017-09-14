var firstC = (function () {
    function firstC(b) {
        this.a = b;
    }
    firstC.prototype.fn = function () {
        return 'hello,' + this.a;
    };
    return firstC;
}());
var re = new firstC("world");
console.log(re.fn());
