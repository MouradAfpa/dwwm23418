function findLongest(numbers) {
    let longestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        if (currentNumber.toString().length > longestNumber.toString().length) {
            longestNumber = currentNumber;
        }
    }
    return longestNumber;
}


let findLongest1 = [1, 10, 100]
let findLongest2 = [9000, 8, 800] 
let findLongest3 = [8, 900, 500]

console.log(findLongest(findLongest1));
console.log(findLongest(findLongest2));
console.log(findLongest(findLongest3));