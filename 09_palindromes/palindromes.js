const alphabet = "qwertyuiopasdfghjklzxcvbnm1234567890";
const alphabetToArray = alphabet.split("");
const palindromes = function (sentence) {
  let cleanSentence = sentence.toLowerCase()
  .split("")
  .filter(item => alphabetToArray.includes(item))
  .reverse();
  
  if (JSON.stringify(cleanSentence) == JSON.stringify(cleanSentence.reverse())) {
    return true;
  } else {
    return false;
  };
};
// Do not edit below this line
module.exports = palindromes;
