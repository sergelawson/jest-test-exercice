import { sum } from "./sum";

describe("Test Sum", () => {
  test("Add sum of 2 and 4 equals to 6", () => {
    expect(sum(2, 7)).toBe(9);
  });

  test("test equals object", () => {
    expect({}).toEqual({});
  });
});
