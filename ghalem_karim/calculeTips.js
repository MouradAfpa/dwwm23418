// function calculateTip(d, e) {
//   return Math.round(
//     /exellent/.test(e.toLowerCase())
//       ? d * 0.2
//       : /great/.test(e.toLowerCase())
//       ? d * 0.15
//       : /good/.test(e.toLowerCase())
//       ? d * 0.1
//       : /poor/.test(e.toLowerCase())
//       ? d * 0.05
//       : /terrible/.test(e.toLowerCase())
//       ? 0
//       : 0
//   );cd
// }

function calculateTip(v, c) {
  return /excellent/i.test(c)
    ? Math.round((v * 20) / 100)
    : /great/i.test(c)
    ? Math.round((v * 15) / 100)
    : /good/i.test(c)
    ? Math.round((v * 10) / 100)
    : /poor/i.test(c)
    ? Math.round((v * 5) / 100)
    : /terrible/i.test(c)
    ? 0
    : "Rating not reconised";
}

console.log(calculateTip(26.95, "gOod"));
