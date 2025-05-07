const { getInitials, createSlug } = require("./test.js");

// Snack 1 
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Mario Rossi");
  expect(result).toBe("MR");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  const result = createSlug('Hello World');
  expect(result).toBe('hello world')
});