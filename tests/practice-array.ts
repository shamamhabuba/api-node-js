//AARAAYS  Create an array with three integers.
const numbers1 = [1, 2, 3];
console.log(numbers1);
console.log("Length:", numbers1.length);

//Create an array with two strings. Add one more.
const words1 = ["hello", "world"];
words1.push("typescript");
console.log(words1);
console.log("Length:", words1.length);

// Remove the last element from an array.
const words2 = ["a", "b", "c"];
words2.pop();
console.log(words2);
console.log("Length:", words2.length);

//Add numbers to an empty array and print length.
const numbers2: number[] = [];
numbers2.push(10);
console.log("Length after 1st push:", numbers2.length);
numbers2.push(20);
console.log("Length after 2nd push:", numbers2.length);


//LOOPs
//print each element of an array.
const loopNumbers1 = [10, 20, 30, 40, 50];
for (let i = 0; i < loopNumbers1.length; i++) {
    console.log(loopNumbers1[i]);
}

//Calculate and print the sum.
const loopNumbers2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < loopNumbers2.length; i++) {
    sum += loopNumbers2[i];
}
console.log("Sum:", sum);

//Multiply each element by 2 into a new array.
const original = [2, 4, 6];
const doubled: number[] = [];
for (let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log("Doubled:", doubled);

//Print elements in reverse order.
const reverseArray = [1, 2, 3];
for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log(reverseArray[i]);
}


// TYPICAL INTERVIEW TASKS
const arrMax = [7, 3, 9, 2];
let max = arrMax[0];
for (let i = 1; i < arrMax.length; i++) {
    if (arrMax[i] > max) {
        max = arrMax[i];
    }
}
console.log("Max:", max);

//Find the minimum number
const arrMin = [7, 3, 9, 2];
let min = arrMin[0];
for (let i = 1; i < arrMin.length; i++) {
    if (arrMin[i] < min) {
        min = arrMin[i];
    }
}
console.log("Min:", min);

//Count even numbers
const arrEven = [1, 2, 4, 5, 6];
let evenCount = 0;
for (let i = 0; i < arrEven.length; i++) {
    if (arrEven[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers count:", evenCount);

//Create array from positive numbers
const arrMixed = [-2, 3, 0, 5, -1];
const positives: number[] = [];
for (let i = 0; i < arrMixed.length; i++) {
    if (arrMixed[i] > 0) {
        positives.push(arrMixed[i]);
    }
}
console.log("Positive numbers:", positives);
