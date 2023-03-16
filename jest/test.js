const Calculator = require('./calculator');

const testCalculator = new Calculator();

describe('test add method', function () {
  test.each([
    [3, 2, 5],
    [3, 88, 91],
    [0, 88, 88],
    [123456789, 123456789, 246913578],
  ])('should test addition of positive integers', async (a, b, c) => {
    expect(testCalculator.add(a, b)).toBe(c);
  });

  test.each([
    [-3, 8, 5],
    [9, -9, 0],
    [-8, 0, -8],
    [-65, -25, -90],
  ])('should test addition of negative integers', async (a, b, c) => {
    expect(testCalculator.add(a, b)).toBe(c);
  });

  test.each([
    [0.3, 0.02, 0.32],
    [0.6, 9, 9.6],
    [0.02, -7, -6.98],
    [6.68, 0, 6.68],
  ])('should test addition of fractional integers', async (a, b, c) => {
    expect(testCalculator.add(a, b)).toBe(c);
  });

  test('should test addition when number is written as string)', async () => {
    const result = testCalculator.add('2', 2);
    expect(typeof result).toEqual('string');
  });
});

describe('test multiply method', function () {
  test.each([
    [2, 9, 18],
    [1, 88, 88],
    [12345678901234567, 1, 1234567890123456], // here is a bug
  ])('should test multiply of positive integers', async (a, b, c) => {
    expect(testCalculator.multiply(a, b)).toBe(c);
  });

  test.each([
    [-3, 8, -24],
    [9, -9, -81],
    [-65, -25, 1625],
  ])('should test multiply of negative integers', async (a, b, c) => {
    expect(testCalculator.multiply(a, b)).toBe(c);
  });

  test.each([
    [1.2, 2.1, 2.52],
    [0.3, 0.02, 0.006],
    [0.3, -2, -1.7], // here is a bug
  ])('should test multiply of fractional integers', async (a, b, c) => {
    expect(testCalculator.multiply(a, b)).toBe(c);
  });

  test('should test multiply when number is written as string)', async () => {
    const result = testCalculator.multiply('2', 2);
    expect(typeof result).toEqual('number');
  });
  test.each([
    [1.2, 0, 0],
    [-0.3, 0, 0], // here is a bug
    [12345678901234567, 0, 0],
  ])('should test multiply of zero', async (a, b, c) => {
    expect(testCalculator.multiply(a, b)).toBe(c);
  });
});

describe('test subtraction method', function () {
  test.each([
    [2, 9, -7],
    [88, 8, 80],
    [7, 0, 7],
    [123456789, 1, 123456788],
  ])('should test subtraction of positive integers', async (a, b, c) => {
    expect(testCalculator.subtraction(a, b)).toBe(c);
  });

  test.each([
    [-3, 8, -5], // here is a bug
    [-3, 0, -3],
    [9, -9, 18],
    [-65, -25, 90], // here is a bug
  ])('should test subtraction of negative integers', async (a, b, c) => {
    expect(testCalculator.subtraction(a, b)).toBe(c);
  });

  test.each([
    [1.2, 2.1, -0.9], // here is a bug
    [0.78, 0.02, 0.76],
    [0.3, -2, 2.3],
    [67, 0, 67],
  ])('should test subtraction of fractional integers', async (a, b, c) => {
    expect(testCalculator.subtraction(a, b)).toBe(c);
  });

  test('should test subtraction when number is written as string)', async () => {
    const result = testCalculator.subtraction('2', 2);
    expect(typeof result).toEqual('number');
  });
  test.each([
    [1.2, 0, 1.2],
    [-0.3, 0, -0.3],
    [0, 0.01, -0.01],
    [12345678901234567, 0, 12345678901234567],
  ])('should test subtraction of zero', async (a, b, c) => {
    expect(testCalculator.subtraction(a, b)).toBe(c);
  });
});

describe('test divide method', function () {
  test.each([
    [2, 9, 0.2222222222222222],
    [88, 8, 11],
    [7, 0, Infinity],
    [123456789, 1, 123456789],
  ])('should test divide of positive integers', async (a, b, c) => {
    expect(testCalculator.divide(a, b)).toBe(c);
  });

  test.each([
    [-3, 8, -0.375],
    [-3, 0, -Infinity],
    [9, -9, -1],
    [-65, -25, 2.6],
  ])('should test divide of negative integers', async (a, b, c) => {
    expect(testCalculator.divide(a, b)).toBe(c);
  });

  test.each([
    [1.2, 2.1, 0.5714285714285714],
    [0.78, 0.02, 39],
    [0.3, -2, -0.15],
  ])('should test divide of fractional integers', async (a, b, c) => {
    expect(testCalculator.divide(a, b)).toBe(c);
  });

  test('should test divide when number is written as string)', async () => {
    const result = testCalculator.subtraction('2', 0);
    expect(typeof result).toEqual('Infinity'); // here is a bug
  });
});

describe('test exponentiation method', function () {
  test.each([
    [2, 4],
    [1, 1],
    [0, 0],
    [123456789, 15241578750190520],
  ])('should test exponentiation of positive integers', async (a, b) => {
    expect(testCalculator.exponentiation(a)).toBe(b);
  });

  test.each([
    [-3, 9],
    [-2.5, 6.25],
  ])('should test exponentiation of negative integers', async (a, b) => {
    expect(testCalculator.exponentiation(a)).toBe(b);
  });

  test.each([
    [1.2, 1.44],
    [0.78, 0.6084],
  ])('should test exponentiation of fractional integers', async (a, b) => {
    expect(testCalculator.exponentiation(a)).toBe(b);
  });

  test('should test exponentiation when number is written as string)', async () => {
    const result = testCalculator.exponentiation('2');
    expect(typeof result).toEqual('number');
  });
});
