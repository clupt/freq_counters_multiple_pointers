"use strict";

/** this function will serve as our frequency counter for the problems
 *
 * it will take in a an iterable
 *
 * it will return a hashmap of the frequencies of the values at the indices in
 * the iterable
 */

function frequencyCounter(iterable) {
  console.log("frequencyCounter=", frequencyCounter, "iterable=", iterable);
  const freqMap = {};
  //populate the map with the counts of the values in the iterable
  for (let value of iterable) {
    freqMap[value] = (freqMap[value] || 0) + 1;
  }
  console.log("freqMap=", freqMap);
  return freqMap;
}



/** this function will determine if a word input can be constructed by a letters
 * input
 *
 * it was take two strings - one a word and one letters
 *
 * it will return a boolean --whether or not the all of the letters are found
 * in the word the appropriate number of times
 *
 * */

function canConstructWord(word, letters) {
  console.log("canConstructWord", "word=", word, "letters=", letters);
  //short circuit to false if word is longer than letters
  if (word.length < letters.length) return false;

  //make a frequency counter for each two input
  const wordMap = frequencyCounter(word);
  console.log("wordMap=", wordMap);

  const lettersMap = frequencyCounter(letters);
  console.log("lettersMap=", lettersMap);

  //loop through the word counter and confirm that there are enough vals
  //at that key in the letters counter
  //short circuit if the key isnt in the letters counter at all
  for (let key in wordMap) {
    if (!(key in lettersMap)) {
      console.log("key=", key);
      return false;
    }
    else if (wordMap[key] < lettersMap[key]) {
      return false;
    }
  }
  //return true
  return true;
}
