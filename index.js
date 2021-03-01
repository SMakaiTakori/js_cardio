// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hello there, my name is Sam') === 'there,'

function longestWord(sen) {
  //Create filtered array, take out punctuations
  const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);
}
