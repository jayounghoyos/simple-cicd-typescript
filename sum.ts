function sum(a: number, b: number): number {
  return a + b;
}

// Subtracts b from a
function subtract(a: number, b: number): number {
  return a - b;
}

// Multiplies a and b
function multiply(a: number, b: number): number {
  return a * b;
}

// Divides a by b, throws on division by zero error
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Expose functions to window for use in HTML/tests
(window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}).sum = sum;

(window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}).subtract = subtract;

(window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}).multiply = multiply;

(window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}).divide = divide;
