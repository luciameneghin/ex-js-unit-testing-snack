// test.test.js
const { getInitials, createSlug, average, split, isPalindrome, createSlugSafe } = require("./test.js");

let input;

beforeEach(() => {
  input = "Hello World";
});

afterEach(() => {
  input = null;
});

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Mario Rossi");
  expect(result).toBe("MR");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  const result = createSlug(input);
  expect(result).toBe("hello world");
});

// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  const result = average([1, 4, 6, 9, 32, 12, 67]);
  expect(result).toBe(18.7);
});

// Snack 4
test("La funzione split sostituisce gli spazi con - e converte in lowercase.", () => {
  const result = split(input);
  expect(result).toBe("hello-world");
});

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  const result = isPalindrome('osso');
  expect(result).toBeTruthy();
})

// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlugSafe("")).toThrow("Il titolo non può essere vuoto");
})