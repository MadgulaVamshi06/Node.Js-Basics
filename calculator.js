
// Import the crypto module
const crypto = require('crypto');

// Retrieve command line arguments
const args = process.argv.slice(2);
const operation = args[0];

// Function to perform the mathematical operations
function calculate(operation, args) {
  let result;
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'mult':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      break;
    case 'sin':
      result = Math.sin(num1);
      break;
    case 'cos':
      result = Math.cos(num1);
      break;
    case 'tan':
      result = Math.tan(num1);
      break;
    case 'random':
      // Check if the length for random number generation is provided
      if (args[1]) {
        const length = parseInt(args[1], 10);
        const randomBytes = crypto.randomBytes(length);
        result = parseInt(randomBytes.toString('hex'), 16);
      } else {
        console.log('Provide length for random number generation.');
        return;
      }
      break;
    default:
      console.log('Invalid operation');
      return;
  }

  // Output the result
  console.log(result);
}

// Perform the calculation or random number generation
calculate(operation, args);
