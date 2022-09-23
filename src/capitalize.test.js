const sum = require("./capitalize");

test("letam to be capitalized to Letam", () => {
  expect(sum("letam")).toBe("Letam");
});
