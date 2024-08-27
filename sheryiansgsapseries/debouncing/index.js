
// debouncing function
const inputEl = document.getElementById("search-field");

function handleSearch(e) {
  console.log("search text", e.target.value);
}

function magic(handlerFunction, delay) {
  let intervalId;
  return function () {
    const context = this;
    const prevArg = arguments;
    clearTimeout(intervalId);
    intervalId = setTimeout(() => {
      handlerFunction.apply(context, [...prevArg]);
      //   handlerFunction.call(this, e);
    }, delay);
  };
}

const superPower = magic(handleSearch, 300);

inputEl.addEventListener("keyup", superPower);

// throttle

function handleScroll(e) {
  console.log("scrolling");
}

function throttle(callback, timeLimit) {
  let isLimitExceed = true;
  return function () {
    const context = this;
    const args = arguments;
    if (isLimitExceed) {
      callback.apply(context, args);
      isLimitExceed = false;
      setTimeout(() => {
        isLimitExceed = true;
      }, timeLimit);
    }
  };
}

const newThrottleScroll = throttle(handleScroll, 300);

window.addEventListener("scroll", newThrottleScroll);


// bind method

// const userObj = { name: "Ritik" };

// function hello(rank, city, post) {
//   console.log(
//     `hello my name is ${this.name}. got ${rank} rank , at city ${city} and current at ${post} designation`
//   );
// }
// const param = [];
// hello();
// Function.prototype.newCall = function (context, ...args) {
//   const uniqueKey = Symbol();
//   context[uniqueKey] = this;
//   context[uniqueKey](...args);
//   delete context[uniqueKey];
// };

// Function.prototype.newBind = function (context, ...args) {
//   const callback = this;
//   return function (...newArgs) {
//     callback.newCall(context, ...args, ...newArgs);
//   };
// };

// const executable = hello.newBind(userObj, 2, "Indore");
// executable("Major");

// console.log('134' == 134)

// let a = 10;
// let b = new Number(10);
// console.log(a === b);
console.log(+"Sf");