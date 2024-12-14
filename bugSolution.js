function myFunction(a, b) {
  const tolerance = 0.00001; // Adjust as needed
  return Math.abs(a - b) < tolerance ? 0 : a - b; // Returns 0 if within tolerance
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(0.1 + 0.2, 0.3)); // Output: 0 (due to floating point precision)
