function accum(s) {
    var accumulation = [...s].map((c, k) => c.toUpperCase() + c.toLowerCase().repeat(k)).join('-');
    console.log(accumulation);
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");
