const obj = {
  name: "ritik",
  age: 24,
  hobbies: ["singing", "calisthenics", "music", "code"],
  movies: [
    {
      name: "shantala",
      actor: "ritu",
    },
    {
      movie: "sita ramam",
      actor: "mrunal dulquer",
    },
    {
      name: "crakk",
      actor: "vidyut",
    },
  ],
  address: { city: "Indore", state: "M.P.", country: "India" },
};

// const obj2 = JSON.parse(JSON.stringify(obj));

// const obj2 = Object.assign({}, obj);

// function deepCopy(tryObj) {
//   if (typeof tryObj != "object" || tryObj === "null") {
//     return tryObj;
//   }
//   let placeholder = Array.isArray(tryObj) ? [] : {};
//   let keys = Object.keys(tryObj);
//   for (let i = 0; i < keys.length; i++) {
//     placeholder[keys[i]] = deepCopy(tryObj[keys[i]]);
//   }
//   return placeholder;
// }

// const obj2 = deepCopy(obj);

// obj2.address.city = "nagpur";
// console.log(obj);
// console.log(obj2);

function deepClone(objec) {
  if (typeof objec !== "object" || objec === null) {
    return objec;
  }
  let placeholder = Array.isArray(objec) ? [] : {};
  const keys = Object.keys(objec);
  for (let i = 0; i < keys.length; i++) {
    placeholder[keys[i]] = deepClone(objec[keys[i]]);
  }
  return placeholder;
}

const obj2 = deepClone(obj);

obj2.address.city = "kurla";
obj2.movies[0] = { ...obj2.movies[0], actor: "ashlesha" };
console.log(obj2.movies[0]);
console.log(obj);
console.log(obj2);

// const arrsd = ["the", "boss", "is", "here"];

// arrsd[2] = "rtk";
// console.log(arrsd);
