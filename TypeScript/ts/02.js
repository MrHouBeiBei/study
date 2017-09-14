for (var i = 0; i < 5; i++) {
    console.log(i);
}
var _loop_1 = function (m) {
    setTimeout(function () {
        console.log(m);
    }, 100);
};
for (var m = 0; m < 5; m++) {
    _loop_1(m);
}
for (var n = 0; n < 5; n++) {
    (function () {
        setTimeout(function () {
            console.log(n);
        }, 100);
    })();
}
var _loop_2 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_2(i_1);
}
var _loop_3 = function (i_2) {
    setTimeout(function () { console.log(i_2); }, 100);
};
for (var i_2 = 0; i_2 < 5; i_2++) {
    _loop_3(i_2);
}
