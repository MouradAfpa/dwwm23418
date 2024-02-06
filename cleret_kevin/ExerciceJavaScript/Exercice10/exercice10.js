function countArara(input) {
    const pair = imput % 2 === 0;
    const adak = "adak ".repeat(input / 2);
    const anane = pair ? "" : "anane";
    const result = `${adak} ${anane}`;
}

console.log(countArara(7));