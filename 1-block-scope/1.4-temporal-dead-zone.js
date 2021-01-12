// 1. let关键字声明的变量存在暂时性死区（Temporal dead zone，简称TDZ）
// var a = "a";
// if (true) {
//   console.log(a); // 报错，ReferenceError: Cannot access 'a' before initialization
//   // let关键字声明的变量，直到执行定义语句时才会被初始化
//   let a = "b";
// }

// 2. 暂时性死区的过程
// if (true) {
//   // 暂时性死区开始
//   console.log(b); // 报错，ReferenceError: Cannot access 'a' before initialization

//   let b;
//   // 暂时性死区结束

//   console.log(b); // 输出undefined
//   b = "b";
//   console.log(b); // 输出b
// }

// 3. 暂时性死区导致typeof运算符不再是一个百分之百安全的操作
if (true) {
  console.log(typeof c); // 报错，ReferenceError: Cannot access 'a' before initialization
  let c;
}
