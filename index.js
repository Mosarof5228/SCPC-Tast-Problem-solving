//problem 1: 
function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

const inputStr = "hello world";
const reversedStr = reverseString(inputStr);
console.log(reversedStr);

//problem 2 :

function sumPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            sum += numbersArray[i];
        }
    }
    return sum;
}

const numbers = [2, -5, 10, -3, 7];
const result2 = sumPositiveNumbers(numbers);
console.log(result2);

//problem-3:
function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result3 = findMostFrequentElement(inputArray);
console.log(result3);



//problem-4: 
function findTwoNumbersSum(arr, target) {
    const numMap = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (complement in numMap) {
            return [numMap[complement], i];
        }

        numMap[arr[i]] = i;
    }
    return [];
}

const inputArray4 = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersSum(inputArray4, targetValue);
console.log(result);


//problem-5: 
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

const num1 = 5;
const operator = '+';
const num2 = 3;

const result5 = calculate(num1, operator, num2);
console.log(result5);



//problem-6:
function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

//problem-7:
function romanToInteger(romanNumeral) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanNumeral[i];
        const currentValue = romanValues[currentSymbol];
        const nextValue = romanValues[romanNumeral[i + 1]];

        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}

const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";

console.log(romanToInteger(romanNumeral1));
console.log(romanToInteger(romanNumeral2));

//problem-8:
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "There is no second smallest element.";
    }

    return secondSmallest;
}

const numbersArray = [5, 3, 1, 4, 2];
const result8 = findSecondSmallest(numbersArray);
console.log(result8);
