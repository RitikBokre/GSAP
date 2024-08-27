// const trialObj = {
//   hello: () => {
//     console.log("chal nikal");
//   },
//   ritk(){

//   },
//   name: "preeti",
//   married: undefined,
//   asf: null,
//   numbers: [1, 3, 34],
// };

// console.log(JSON.parse(JSON.stringify(trialObj)));

// function deepCopy(obj) {
//   if (typeof obj != "object" || obj === "null") {
//     return obj;
//   }

//   let placeholder = Array.isArray(obj) ? [] : {};
//   const keys = Object.keys(obj);

//   for (let i = 0; i < keys.length; i++) {
//     placeholder[keys[i]] = deepCopy(obj[keys[i]]);
//   }

//   return placeholder;
// }

// const copiedObj = deepCopy(trialObj);
// console.log(copiedObj);

// const copy2 = Object.assign({}, trialObj);
// console.log(copy2);

// const copy3 = JSON.parse(JSON.stringify(trialObj));
// console.log(copy3);

// const arr = [1, 2, 3, 4];

// output: arr= [24,12,8,6]

// function a(){
//     let x= 34;
//     function b(){
//         console.log(x);
//     }
//     x++;
//     x++;
//     return b;
// }

// const c = a();
// c();

// function hello(x, y, z = "hero") {
//   console.log(this.a, "is", x, y,z);
// }

// const obj = {
//   a: "riitk",
// };

// const obj2 = {
//   a: "sonu",
// };

// hello.call(obj, "althele", "singer");

// hello.apply(obj2, ["developer", "husband", "awsrf"]);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 value");
//   }, 4000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2 value");
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 value");
//   }, 5000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// async function hello() {
//   const data = await p1;
//   console.log(data + "data then");
// }

// hello();

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   if (!!list?.next) {
//     printList(list.next);
//   }
//   if (list.hasOwnProperty("value")) {
//     console.log(list.value);
//   }
// }

// printList(list);

// if (true) {
//   var trial = "adsgjh";
//   function hello() {
//     console.log("hello boss");
//   }
// }

// console.log(trial);
// hello();

// let phrase = "Hello";

// if (true) {
//   if (true) {
//     let user = "John";
//     function sayHi() {
//       alert(`${phrase}, ${user}`);
//     }
//   }
// }

// sayHi();

// let newTry = new Promise((reject, resolve) => {
//   setTimeout(() => {
//     resolve("hello resolved");
//   }, 1000);
// });

// newTry
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error("dsds", err);
//   });

// function sum(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// console.log(sum(5)(12));

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(x, y) {
//   console.log(x, y);
//   return (item) => {
//     if (item > x && item < y) {
//       return true;
//     }
//   };
// }

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inArray(arrParam) {
//   return (item) => arrParam.includes(item);
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));
// console.log(users);

// function byField(str) {
//   return (a, b) => {
//     if (a[str] > b[str]) {
//       return 1;
//     } else return -1;
//   };
// }

// const byField = (str) => (a[str] > b[str] ? 1 : -1);

// (function hello() {
//   console.log("hello world");
//   var
// })();

// function trial() {
//   hello = "Sasdf";
//   console.log(hello);
// }

// trial();
// function shooters() {
//   let shooterArr = [];
//   let i = 0;
//   while (i < 10) {
//     let shoot = function () {
//       return i;
//     };
//     shooterArr.push(shoot);
//     i++;
//   }
//   return shooterArr;
// }

// let arr = shooters();

// console.log(arr[3]());

// (function () {
//   console.log("heelo");
//   var eef = "sff";
// })();

// ewrew = "fs";

// let arr = [2, 4, 74, 32, 42];

// Array.prototype.mapClone = function (logic) {
//   let placeholder = [];
//   for (let i = 0; i < this.length; i++) {
//     placeholder.push(logic(this[i], i, this));
//   }
//   return placeholder;
// };

// console.log(arr)
// console.log(arr.map((item) => item + 3));
// console.log(arr.mapClone((item, i) => item + i));

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return ++count;
//   }

//   counter.set = (value) => {
//     count = value;
//     return count;
//   };

//   counter.decrease = () => {
//     return --count;
//   };

//   return counter;
// }

// const instance = makeCounter();

// console.log(instance()); //1
// console.log(instance()); //2
// console.log(instance.decrease()); //1
// console.log(instance.decrease()); //0
// console.log(instance.set(6))//6
// console.log(instance())//7

// const newObj = {
//   namet: "Ritik",
//   getName: () => {
//     return this.namet;
//   },
//   getRealName: function (city, marks) {
//     return `${this.namet} lives in city ${city} has got ${marks} marks in jee mains`;
//   },
// };

// const girlObj = { namet: "priya" };

// // console.log(newObj.getRealName.call(girlObj, "dheradun", "257"));
// console.log(newObj.getName.bind(newObj));

// const hello = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("reject hua hai");
//   }, 3000);
// });

// hello
//   .then((res) => {
//     console.log(res, " resopne bhi aa gaya");
//   })
//   .catch((err) => {
//     console.warn(err, " warning samajh le");
//   });

const arrNew = [12, 34, [23, 45, 34, [4, 32, [34, 3]]]];

Array.prototype.newFlat = function (depth) {
  let placeholder = [];
  for (let i = 0; i < this.length; i++) {
    if (!Array.isArray(this[i])) {
      placeholder.push(this[i]);
    } else if (depth > 0) {
      placeholder.push(...this[i].newFlat(--depth));
    } else {
      placeholder.push(this[i]);
    }
  }
  return placeholder;
};

console.log(arrNew.newFlat(2));
