/* eslint-disable no-undef */
const caesarCipher = require("./caesarCipher");

test("letam with Caesar cipher of 1 should be mfubn", () => {
  expect(caesarCipher("letam", 1)).toBe("mfubn");
  expect(caesarCipher("Defend The East Wall Of The Castle", -1)).toBe(
    "Cdedmc Sgd Dzrs Vzkk Ne Sgd Bzrskd",
  );
  expect(caesarCipher("Letam! Bossman!! Barinua!!!.", 1)).toBe(
    "Mfubn! Cpttnbo!! Cbsjovb!!!.",
  );
});
