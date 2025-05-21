//DSA Question: Missing Number , Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:


//For numbers from 0 to n, the sum of all numbers is:
//sum = n * (n + 1) / 2
//If we subtract the sum of the given array from the expected total sum, the result is the missing number.

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1]));    // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
