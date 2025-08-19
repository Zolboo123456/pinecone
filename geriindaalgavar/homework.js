
// document.addEventListener("DOMContentLoaded", () => {})
    // EXERCISE 1: Even or Odd Numbers
    // ================================================================================================================================================================================================
    // Loop from 1 to 20 and print whether each number is even or odd.

    //    for (let i = 1; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //         console.log(`${i} is even.`)
    //     } else {
    //         console.log(`${i} is odd.`)
    //     }
    // }

    // ================================================================================================================================================================================================
    // EXERCISE 2: Find the Largest Number in an Array
    // ==============================
    // Create a function that takes an array of numbers and returns the largest one.

    // const numbers = [4, 17, 9, 21, 5];

    /*const names = ["Bob", "Jonathan", "Ali", "Isabella", "Sue"];

    function findLargestNumber(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
        largest = nums[i];
        }
    }
    return largest;
    }

    console.log("Largest number:", findLargestNumber([4847894185694156, 1718654168541586, 5161023561464465, 2145864874895465, 5000001352103213]));*/

    // ================================================================================================================================================================================================
    // EXERCISE 3: Filter Long Names
    // ==============================
    // Given an array of names, print only the names that are longer than 5 characters.


    /*function findLongNames(names) {
        let result = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].length > 5){
                result.push(names[i]);
            }
        }
        return result;
    }

    console.log("Names longer than 5 charecters:", findLongNames(["Bob", "Jonathan", "Ali", "Isabella", "Sue"]));*/

    // ================================================================================================================================================================================================
    // EXERCISE 4: Count Vowels in a String
    // ==============================
    // Write a function that counts how many vowels are in a given string.

    // const text = "The quick brown fox";

    /*function countVowels(text) {
        let count = 0;
        let egshignuud = ['a', 'e', 'o', 'i', 'u'];
        for (let i = 0; i < text.length; i++){
            if (egshignuud.includes(text[i].toLowerCase())) {
                count++;
            }
        }
        return count;
    }
    console.log("Numbers of vowels:", countVowels("The quick brown fox."))*/

    // ================================================================================================================================================================================================
    // EXERCISE 5: Loop Through Object Properties
    // ==============================
    // Create an object with several properties and loop through it to print each key and value.

    /*const person = {
        Name: "Alice",
        Age: 30,
        Occcupation: "Engineer"
    };

    for (let key in person) {
        console.log(key + ": " + person[key])
    }*/

    // ================================================================================================================================================================================================
    // EXERCISE 6: Sum of Positive Numbers Only
    // ==============================
    // Write a function that receives an array of numbers and returns the sum of only the positive ones.

    // const mixedNumbers = [-5, 12, -3, 8, 0, -1, 4];

    /*function sumPositives(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i]
            }
        }
        return sum;
    }
    console.log("Sum of positive numvers:", sumPositives([-5, 12, -3, 8, 0, -1, 4]))*/

    // ================================================================================================================================================================================================
    // EXERCISE 7: Generate Even Numbers Array
    // ==============================
    // Create an array that contains all even numbers from 1 to 100 using a loop.

    /*let evenNumbers = []
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i)
        }
    }
    console.log("All even numbers from 1 tp 100:", evenNumbers)*/

    // ================================================================================================================================================================================================
    // EXERCISE 8: Count Word Occurrences
    // ==============================
    // Given an array of words, count how many times each word appears and store the result in an object.

    // const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

    /*function countWords(arr) {
        let wordCount = {}
        for (let i = 0; i < arr.length; i++){
            let word = arr[i]
            if (wordCount[word]) {
                wordCount[word]++
            } else {
                wordCount[word] = 1
            }
        }
        return wordCount
    }
    console.log("Word occurrences: ", countWords(words))*/

    // ================================================================================================================================================================================================

// 
