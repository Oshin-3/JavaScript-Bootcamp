//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

// let val = prompt('Enter any number');
// numb(val);
function numb(val)
{
    if (val < 0)
    {
        console.log(val + ' : Negative number');
    }
    else if (val > 0)
    {
        console.log(val + ' : Positive number');
    }
    else if (val == 0)
    {
        console.log(val + ' : Zero');
    }
}

//Assignment 2:
//Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
// let v = prompt('Enter the number');
// let ans = factorial(v);
// console.log('Factorial of ' + v + ' = ' + ans);
function factorial(val)
{
    let product = 1;
    for (let i = 2; i <= val; i++)
    {
        product *= i;
    }
    return product;
}

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
// let a = prompt('Enter 1st number');
// let b = prompt('Enter 2nd number');
// console.log('1st number = ' + a + ', 2nd number = ' + b);
// console.log('Larger number = ' + largerNum(a, b));
function largerNum(val1, val2)
{
    if (val1 >= val2)
    {
        return val1;
    }
    
    return val2;
}

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
// let str = prompt('Enter a string');
// isPalindrom(str) ? console.log(str + " is a Palindrom") : console.log(str + " is not a Palindrom");
function isPalindrom(str)
{
    let len = str.length;
    for (let i = 0; i < len/2; i++)
    {
        if (str[i] !== str[len-1-i])
            return false;
    }

    return true;
}
//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// let n = prompt('Enter any number');
// console.log('All prime numbers till ' + n + ' = ' + primeNumbers(n));
function primeNumbers(val)
{
    let arr = [];
    for (let i = 2; i <= val; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0)
                count += 1;            
        }
        if (count === 2)
        {
            arr.push(i);
        }
    }

    return arr;
}
//Assignment 6:
//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
// let num1 = parseFloat(prompt('Enter 1st number'));
// let op = prompt('Enter operation');
// let num2 = parseFloat(prompt('Enter 2nd number'));
// console.log(num1 + op + num2 + ' = ' + calculator(num1, num2, op));
function calculator(num1, num2, op)
{
    let ans = 0;
    if (op == '+')
        ans = num1 + num2;
    else if (op == '-')
        ans = num1 - num2;
    else if (op == '*')
        ans = num1 * num2;
    else
        ans = num1 / num2;

    return ans;
}
//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
// let str = prompt('Enter a string');
// console.log('Count of vowel in ' + str + ' = ' + vowelCount(str));
function vowelCount(str)
{
    str = str.toLowerCase();
    let n = str.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            count += 1;
    }
    return count;
}
//Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
// let n = prompt('Enter any number');
// perfectNumber(n);
function perfectNumber(num)
{
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i == 0)
        {
            sum += i;
        }      
    }
    (sum == num && sum != 0) ? console.log(num + " is a Perfect number") : console.log(num + " is not a Perfect number");
}
//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
// let n = prompt('Enter any number');
// fibonacci(n);
function fibonacci(val)
{    
    let arr = [0, 1];
    for (let i = 2; i < val; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    console.log('Fibonacci series = ' + arr);
}
//Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
// let n = prompt('Enter any number');
// tenMultiplication(n);
function tenMultiplication(val)
{
    for (let i = 1; i <= 10; i++) {
        console.log(val + ' * ' + i + ' = ' + val * i);
    }
}