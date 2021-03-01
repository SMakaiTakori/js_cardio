// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hello there, my name is Sam') === 'there,'

function longestWord(sen) {
  //Create filtered array, take out punctuations
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  //If multiple words put into an array
  //Return true if the word length equals the first word's length in the sorted array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );
}
