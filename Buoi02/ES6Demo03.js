let obj1 = {
  a: 1,
  b: 9,
  c: 3,
};
let obj2 = {
  ...obj1,
  d: 4,
};
console.log(obj1);
console.log(obj2);
obj1.a = 100;
console.log(obj1);
console.log(obj2);
let obj3 = { ...obj1, a: 101, e: 5 };
console.log(obj3);
