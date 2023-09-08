function fibonacci(num) {
  if (num <= 0) {
        return 0; // First term of the Fibonacci sequence
    } else if (num === 1) {
        return 1; // Second term of the Fibonacci sequence
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
	
}

module.exports = fibonacci;
