/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
*/


declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load built script so window.* functions are available
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

// Tests for sum
describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(50, 3)).toBe(53);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

// Tests for subtract
describe("subtract", () => {
  it("handles positive integers", () => {
    expect(window.subtract(100, 3)).toBe(97);
  });

  it("handles zero", () => {
    expect(window.subtract(0, 5)).toBe(-5);
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
    expect(window.subtract(-5, 3)).toBe(-8);
  });
});

// Tests for multiply
describe("multiply", () => {
  it("handles positive integers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("handles zero", () => {
    expect(window.multiply(5, 0)).toBe(0);
    expect(window.multiply(0, 7)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.multiply(-2, 3)).toBe(-6);
    expect(window.multiply(-2, -3)).toBe(6);
  });
});

// Tests for divide
describe("divide", () => {
  it("handles positive integers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("handles zero in numerator", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
    expect(window.divide(-10, -2)).toBe(5);
  });

  it("throws on division by zero", () => {
    expect(() => window.divide(5, 0)).toThrow("Division by zero");
  });
});

export {};
