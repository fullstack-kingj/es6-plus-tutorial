/* 
    使用const声明一个对象，对象的属性或方法依旧可以修改
    * const声明的对象表示对象存储的引用地址是不能改变的
    * 对象的属性和方法是存储在引用地址中的，是可以改变的
 */
const obj = {
  name: "不想成熟的大叔",
  age: 37,
  skill: {
    name: "coding",
    year: 15,
  },
};
/*
    通过Object的freeze()方法冻结指定对象，这样就不能再修改该对象的属性或方法
    需要注意的是：
    * freeze()方法只能冻结对象，不能冻结数组
    * 如果该对象的属性也是一个对象的话，freeze()方法是无法冻结该对象的这个属性的值的
 */
Object.freeze(obj);
obj.age = 18;
console.log(obj);

// 如果对象的某一个属性也是一个对象的话，也要冻结该属性的话，需要这样做
Object.freeze(obj.skill);
// 如果对象的某一个属性也是一个对象的话，那freeze()方法是无法冻结该属性的值
obj.skill.year = 20;
console.log(obj);

// 使用const声明一个数组，数组的元素依旧可以修改(与对象的情况一致)
const arr = ["ES5", "ES6", "ES7"];
arr.push("ES8");
console.log(arr);
