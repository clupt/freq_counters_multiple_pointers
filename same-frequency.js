"use strict";
/**
 * sameFrequency takes 2 numbers and returns true of both of them
 * have the same frequency of digits
 * 
 * 
 */
function sameFrequency(num1, num2) {
    console.log(`sameFrequency ${num1} ${num2}`);
    // convert numbers to strings
    let numsAsString = num1.toString() + num2.toString()
    // frequency counter on numbers as string
    console.log(`numsAsString ${numsAsString}`)
    let freqs = frequencyCounter(numsAsString);
    for (let key in freqs)
    {
        // if 2 numbers have the same frequency of digits, each digit should
        //have a "pair" in the other number.
        // if there is an odd number value in the frequency counter object
        // return false
        if (freqs[key]%2 !== 0){
            return false;
        }
    }
    //otherwise, return true
    return true;
}


/**
 * this function is called frequencyCounter
 * this function will serve as our frequency counter for the problems
 *
 * it will take in a an iterable
 *
 * it will return a hashmap of the frequencies of the values at the indices in
 * the iterable
 */

function frequencyCounter(iterable) {
    console.log("frequencyCounter=", frequencyCounter, "iterable=", iterable);
    const freqs = {};
    //populate the map with the counts of the values in the iterable
    for (let value of iterable) {
      freqs[value] = (freqs[value] || 0) + 1;
    }
    console.log("freqs=", freqs);
    return freqs;
  }