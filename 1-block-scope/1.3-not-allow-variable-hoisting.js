// 1. var关键字声明的变量是允许变量提升的
// console.log(a); // 报错，ReferenceError: a is not defined

// console.log(b); // 输出undefined
// var b = "b";
// 上述代码等同于以下代码
var b;
console.log(b); // 输出undefined
b = "b";

// let关键字声明的变量是不允许变量提升的
console.log(c); // 报错，ReferenceError: Cannot access 'c' before initialization
let c = "c";
