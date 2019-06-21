// Verbal Questions
// #1
// A parameter acts as a variable inside the function
// when it is declared. The argument is the data that
// is passed back throught the functions when the
// function is called

// #2 Console.log will display the parameters in the
// console, but it doesn't actually return a real value.
// Return will actually cause the function to give a value,
// which will be stored. 

// #3 It helps keep the code clean and allows us to
// call previous functions within the code, inside new functions.


// // #2 Palindrome Again
const isThisPalindrome = (word) => {
	let splitWord = word.split('');
	let revWord = splitWord.reverse();
	let joinWord = revWord.join('');
	if (joinWord === isThisPalindrome) {
		return true
	} else {
		return false
	} 
}
console.log(isThisPalindrome(''));


// #3 NEEDS WORK 
// i understand that the question asks for numbers to be
// added together, but i coulnd't get this to work unless 
// i treated the numbers as a string and then converted them/
// back to numbers.

function CheckSum(num) {
	let newSum = 0;
	for (let i = num.length; i > 0; i--){
		newSum += parseInt(num.slice(i - 1, i));
	}
return newSum
} 

console.log(CheckSum('44'));

// this is my other atempt at the same problem. I was
// confused as to why this answer didnt work. I 
// const SumDigits = (num) =>{
// 	let NewSum = 0;
// 	for (let i = 0; i < num.length; i++){
// 		NewSum += num[i];
// 		}
// 		return NewSum;
// 	}
// console.log(SumDigits(182));



// #4
const pythag = (num1, num2) => {
	let c = Math.pow(num1, 2) + Math.pow(num2, 2); 
	let squareRootC = Math.sqrt(c);
	return squareRootC
}
console.log(pythag(3, 4));


// #5
const sunArray = (array) => {
	let total = 0;
	for (let i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
}
const array = [1,2,3,4,5,6];
console.log(sunArray(array));


// // #6
const checkPrimeNumbers = (num) => {
	for (let i = 2; i < num; i++){
		if(num % i === 0) {
			return false;
		} else {
			return true;
		}
	}
}

const printPrimes = (limit) => {
	for (let i = 0; i < limit; i++){
		console.log(checkPrimeNumbers(i), i);
	}
}

printPrimes(100);















