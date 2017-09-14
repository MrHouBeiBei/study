var aname = '小王';
console.log(aname);
var introduce = "he name is " + aname;
console.log(introduce);
// 数组
var arr1 = [1, 2];
var arr2 = ['a', 'b'];
var arr3 = [1, 2, 2];
console.log(arr1);
console.log(arr2);
console.log(arr3);
var x;
x = [1, 'abc'];
console.log(x);
console.log(x[1].substr(1));
x[2] = 'world';
console.log(x);
// 枚举
var color1;
(function (color1) {
    color1[color1["pink"] = 0] = "pink";
    color1[color1["green"] = 1] = "green";
    color1[color1["blue"] = 2] = "blue";
})(color1 || (color1 = {}));
console.log(color1);
var c = color1.pink;
console.log(c);
var color2;
(function (color2) {
    color2[color2["pink"] = 1] = "pink";
    color2[color2["green"] = 4] = "green";
    color2[color2["blue"] = 5] = "blue";
})(color2 || (color2 = {}));
var c2 = color2.pink;
var c3 = color2.green;
console.log(c2);
console.log(c3);
var colorName = color2[4];
console.log(colorName);
// 任意值
var notSure = 666;
notSure = 'aTest';
console.log(notSure);
notSure = true;
console.log(notSure);
notSure = 0.2;
console.log(notSure.toFixed());
var aNumber = 0.6;
console.log(aNumber.toFixed());
var aObj = 5.1;
console.log(aObj.toFixed());
console.log(1);
