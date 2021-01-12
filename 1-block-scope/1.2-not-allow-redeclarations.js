// var关键字声明的变量是允许重复声明的
var a = "a";
var a = "b";
console.log(a); // 输出b

// let关键字声明的变量是不允许重复声明的
let c = "c";
let c = "d";
console.log(c); // 报错，SyntaxError: Identifier 'c' has already been declared
