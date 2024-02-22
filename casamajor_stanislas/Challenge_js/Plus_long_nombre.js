function findLongest(numbers) {
    return numbers.reduce((longest, current) => {

        const longestLength = `${longest}`.length;
        const currentLength = `${current}`.length;
        let i = 0;

        if (currentLength > longestLength || (currentLength === longestLength && current[i] < longest[i])) {
            return current;
        } else {
            return longest;
        }
    });
}

console.log(findLongest([1, 10, 100])); 
console.log(findLongest([9000, 8, 800])); 
console.log(findLongest([8, 900, 500]));  
console.log(findLongest([8,500,900]));

