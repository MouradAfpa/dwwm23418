function transforme(texte) {
    return texte.split('').map((lettre, index) => lettre.toUpperCase() + lettre.toLowerCase().repeat(index)).join('-');
}

console.log(transforme('abcd'));