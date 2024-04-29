

// #9 - Accumulation de lettres (7 kyu)


function accum(input) {
    
    const upperCase = input.toUpperCase();
    console.log(upperCase);

    const newTab = Array.from(upperCase).map((e, i) => {

        return e + e.toLowerCase().repeat(i);

    });

    const result = newTab.join('-');

    return result;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
