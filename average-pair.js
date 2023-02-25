"use strict";

/**
 * function called averagePair
 * This function calculates if there is a pair of numbers within an array
 * that can make the target average
 *
 * it takes in a sorted array of numbers and a target average
 *
 * it returns a true if it can and false it can't such find a pair
 */

function averagePair(nums, targetAvg) {
  console.log("averagePair=", averagePair, "nums=", nums, "targetAvg=", targetAvg);
  //check to see if nums is empty (edge case)
  if (!nums.length) return false;
  //make a left and right pointer
  let left = 0;
  let right = nums.length - 1;
  //loop while the left pointer is less than the right pointer
  while (left < right) {
    //store the average
    let average = (nums[left] + nums[right]) / 2;
    console.log("average=", average);
    console.log("targetAverage=", targetAvg);
    console.log("left=", left);
    console.log("right=", right);
    console.assert(([1, 2, 3], 2.5) === true);
    //if their average is the target average return true
    if (average === targetAvg) {
      return true;
    }
    //if the average is too small, move the left pointer
    else if (average < targetAvg) {
      left++;
    }
    //if the average it too large, move the right pointer
    else {
      right--;
    }
  }
  //outside of the loop, return false
  return false;
}

// averagePair()

