const Multiply = require("./index");

describe("Melakukan perkalian", () => {
  it("harus bernilai benar", () => {
    expect(Multiply(5, 6)).toBe(30);
  });

  test("object assignment", () => {
    const data = { one: 1, two: 2 };
    expect(data).toEqual({ one: 1, two: 2 });
    expect(data).not.toBe({ one: 0, two: 0, three: 0 });
  });

  test("object assignment", () => {
    const data = { one: 1, two: 2 };
    expect(data).not.toBe({ one: 0, two: 0, three: 0 });
  });

  const list = ["milk", "soap", "toothbrush", "paper"];

  test("Should be an array", () => {
    expect(list).toContain("soap");
  });
});
