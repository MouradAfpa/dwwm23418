// ----------------------------------------------
// EXO 10
// function countArara(i) {
//   const pair = i % 2 === 0;

//   const a = "adak ".repeat(i / 2);

//   const an = pair ? "" : "anane";

//   const result = `${a} ${an}`.trim();

//   return result;
// }

// console.log(countArara(1));
// console.log(countArara(3));
// console.log(countArara(8));

// ----------------------------------------------
// EXO 11
// function validatePin(input){
//   let number = /^(\d{4}|\d{6})$/g.test(input)
//   return number
//   }
//   console.log(validatePin("1234"));
// ----------------------------------------------
// EXO 12
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1, x.length))
    .join(" ");
};

console.log("ceci est une phrase".toJadenCase());
