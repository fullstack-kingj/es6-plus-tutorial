// 为什么需要块级作用域

// 1. 局部变量可能覆盖全局变量
var a = "a";
function fn() {
  console.log(a); // 输出undefined
  if (false) {
    var a = "b";
  }
}
fn();

// 2. 用来循环计数器的变量暴露为全局变量
for (var i = 0; i < 5; i++) {
  console.log("循环内：" + i); // 输出1、2、3、4
}
console.log("循环外：" + i); // 输出5

// 什么是块级作用域
if (true) {
  let b = "b";
}
console.log(b); // 报错，ReferenceError: b is not defined

// 块级作用域的注意事项

// 1. 使用let关键字声明块级作用域的变量时，必须存在"{}"
if (true) let c = 'c' // 报错，SyntaxError: Lexical declaration cannot appear in a single-statement context

// 正确的写法
if (true) {
  let c = "c";
}

// 块级作用域的作用

// 1. 替代匿名自调函数(IIFE)
(function(){
  var msg = 'this is IIFE.'
  console.log(msg)
})()

// 块级作用域的写法
{
  let msg = 'this is IIFE.'
  console.log(msg)
}

// 面试题：如何可以将以下代码的打印结果改为0、1、2
for (var i=0; i<5; i++) {
  setTimeout(function(){
    console.log(i)  // 输出3、3、3
  })
}

// ES5的解决方案：使用闭包
for (var i=0; i<5; i++) {
  (function(j){
    setTimeout(function(){
      console.log(j)
    })
  })(i)
}

// ES6的解决方案：使用let关键字
for (let i=0; i<5; i++) {
  setTimeout(function(){
    console.log(i)  // 输出3、3、3
  })
}

/*
    上述代码编译成ES5的代码如下
    var _loop = function _loop(i) {
      setTimeout(function () {
        console.log(i); // 输出3、3、3
      });
    };

    for (var i = 0; i < 5; i++) {
      _loop(i);
    }
 */