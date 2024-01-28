//Transform an array of words into a new array with the lengths of each word. The map function might be useful here.

import { toASCII } from "punycode";

const wordsArray: string[] =["apple","banana","orange","grape"];
const wordLengthsArray:number[] = wordsArray.map((word)=> word.length);

console.log("Original Array:",wordsArray);
console.log("Words Lengths Array:", wordLengthsArray);