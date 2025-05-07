const { getInitials } = require("./test");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Mario Rossi");
  expect(result).toBe("MR");
});