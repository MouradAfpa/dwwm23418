String.prototype.toJadenCase = function() {  
    let words = this.split(" ");  
    let jadenCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return jadenCaseWords.join(" ");
};


console.log("Ceci est une phrase".toJadenCase()); 
