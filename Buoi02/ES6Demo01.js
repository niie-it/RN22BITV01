function tenHam() {
  console.log("Hello World");
}

function tinhToan(a, b) {
  return a + b;
}

//Arrow function => ES6
const tenHam2 = () => {
  console.log("Hello World");
};
const calculate = (a, b) => a + b;
const calculate2 = (a, b, c) => {
  let d = a * b;
  return d + c;
};

tenHam();
console.log(calculate2(2, 3, 9));
