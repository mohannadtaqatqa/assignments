// Test 2
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

const average = sum / numbers.length;

console.log("Total Sum:", sum);
console.log("Average:", average);

// Test 3
function removeDuplicates(array) {
  return [...new Set(array)];
}

