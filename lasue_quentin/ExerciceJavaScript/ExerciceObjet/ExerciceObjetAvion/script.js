try {
  let objetVolant1 = new AvionsDeLigne("500L", 666, "237M", "38T");
  let objetVolant2 = new Jet("50L", 55, "107M", "300km/h");
  let objetVolant3 = new Helicoptere("100L", 10, "20M", "10h");
  let objetVolant4 = new Furtif("250L", 3, "50M", 10);
  let avions = new Avions("500L", 1111, "300M");
} catch (e) {
  console.log(e.message);
}
