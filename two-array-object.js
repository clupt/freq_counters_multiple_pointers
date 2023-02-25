"use strict";
/**
 * takeArrayObjects takes 2 arrays, one of keys and one of values
 * 
 * it returns an object created from those keys and values
 * 
 * excess keys have their value set to null
 * excess values are ignored
 */
function twoArrayObject(keys, values) {
    console.log(`twoArrayObject ${keys} ${values}`);
    const obj = {};
    //loop over keys
    for (let i in keys) {
        // set key value pair if we still have values
        if (i < values.length) {
            obj[keys[i]] = values[i];
        }
        // otherwise, set value to null
        else {
            obj[keys[i]] = null;
        }
    }
    console.log(obj);
    //return our object
    return obj;
}
