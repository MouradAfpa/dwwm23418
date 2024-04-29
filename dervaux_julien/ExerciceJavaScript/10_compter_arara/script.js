

// #10 - Compter en Arara (7 kyu)


function countArara(input) {

    const pair = input % 2 === 0;

    const adak = "adak ".repeat(input / 2);

    const anane = pair ? "" : "anane";

    const result = `${adak} ${anane}`;

    return result;
}

console.log(countArara(1));
console.log(countArara(3));
console.log(countArara(8));