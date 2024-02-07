// exo 9
function accum(t) {
  return t
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("cwAt"));
