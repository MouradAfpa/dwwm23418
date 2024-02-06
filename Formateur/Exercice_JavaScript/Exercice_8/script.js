
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
  
  console.log(calculateTip(20, "ExcellEnt") );
  console.log(calculateTip(26.95, "gOod"));
  console.log(calculateTip(20, "hi") );