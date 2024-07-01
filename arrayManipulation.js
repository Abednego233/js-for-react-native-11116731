//processArray function; Task 1

function processArray(nums) {
    return nums.map(number => {
        if (number % 2 === 0) {
            console.log("number is even")
            return number ** 2
        } else {
            console.log("number is odd")
            return number * 3;
        }
    });
}

// processArray nums:
let nums = [3, 4, 5, 6, 7, 8];
console.log(processArray(nums)); // [9, 16, 25, 36, 49, 64]




// formatArrayStrings; Task 2

function formatArrayStrings(strings, processedNums) {
    return strings.map((string, index) => {
        if (processedNums[index] % 2 === 0) {
            return string.toUpperCase();
        } else {
            return string.toLowerCase();
        }
    });
}

// formatArrayStrings :
let strs = ['Dan', 'Forson', 'Solomon', 'Nasir', 'Nusa', 'Mensah'];
let processedNums = processArray([9, 16, 25, 36, 29, 64]);
console.log(formatArrayStrings(strs, processedNums)); // ['dan', 'FORSON', 'solomon', 'NASIR', 'nusa', 'MENSAH']

