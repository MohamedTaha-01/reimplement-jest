import jest from "./jest.js";

// Tests
jest.test("Test if true is true", () => {
  jest.expect(true).toBe(true);
});

jest.test("Test if true is false", () => {
  jest.expect(true).toBe(false);
});

jest.test("Test if 1+1 equals 2", () => {
  jest.expect(1 + 1).toBe(2);
});

jest.test("Test if 1+1 equals 3", () => {
  jest.expect(1 + 1).toBe(3);
});
