"use strict";
//Transform an array of words into a new array with the lengths of each word. The map function might be useful here.
Object.defineProperty(exports, "__esModule", { value: true });
const wordsArray = ["apple", "banana", "orange", "grape"];
const wordLengthsArray = wordsArray.map((word) => word.length);
console.log("Original Array:", wordsArray);
console.log("Words Lengths Array:", wordLengthsArray);
