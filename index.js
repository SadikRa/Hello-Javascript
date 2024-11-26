// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back
    return str.split('').reverse().join('');
  }
  
  // Test the function
  const input = "Hello, World!";
  const reversed = reverseString(input);
  
  console.log("Original String:", input);    // Output: "Hello, World!"
  console.log("Reversed String:", reversed); // Output: "!dlroW ,olleH"
  