import { addToBeginning, addToEnd } from "./setup";

let animals = ["Lion", "Bird", "Bear", "Fish", "Monkey"];

beforeEach(() => {
  animals = ["Lion", "Bird", "Bear", "Fish", "Monkey"];
});

describe("Add and remove element to array", () => {
  it("Add Dog to the end of the array", () => {
    addToEnd(animals, "Dog");
    expect(animals[animals.length - 1]).toBe("Dog");
  });

  it("Add Cat to the begining of the array", () => {
    addToBeginning(animals, "Cat");
    expect(animals[0]).toBe("Cat");
  });

  it("Animals list must have length 5", () => {
    expect(animals.length).toBe(5);
  });
});
