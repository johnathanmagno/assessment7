const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
// insert 39.4 μs, append 91.9 μs
const smallArray = getSizedArray(100);
// insert 51.5 μs, append 109.3 μs
const mediumArray = getSizedArray(1000);
// insert 178.4 μs, append 131.5 μs
const largeArray = getSizedArray(10000);
//insert 8.7 ms, append 486.2 μs
const extraLargeArray = getSizedArray(100000);
// insert 1.0585604 s, append 2.7209 ms



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// The "push" method is faster than the "unshift" method because it takes the same amount of time regardless of the size of the array, while the "unshift" method takes longer as the array gets bigger. The "Insert" function may be faster for smaller arrays, but it becomes much slower than the "Append" function as the array grows larger. This is because the "Insert" function takes more time to complete as the array gets bigger, while the "Append" function stays consistently fast.