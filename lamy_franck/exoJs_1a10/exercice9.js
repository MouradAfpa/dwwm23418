function accum(str) {
    // Convertir la chaîne en majuscules pour la première lettre de chaque bloc
    const uppercasedStr = str.toUpperCase();

    // Construire chaque bloc en utilisant la méthode map
    const result = uppercasedStr.split('').map((char, index) => {
        const repeatedChars = char.repeat(index + 1);
        return repeatedChars.charAt(0) + repeatedChars.slice(1).toLowerCase();
    });

    return result.join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
