// test.test.js
const { getInitials, createSlug, average, split, isPalindrome, createSlugSafe, findPostById } = require("./test.js");

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

//Snack 7
const posts = [
  { id: 1, title: "Post 1", slug: "Contenuto del post 1" },
  { id: 2, title: "Post 2", slug: "Contenuto del post 2" },
  { id: 3, title: "Post 3", slug: "Contenuto del post 3" }
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  const result = findPostById(posts, 2);
  expect(result).toBe(posts[1])
})

test('Ogni post ha un id, un title e uno slug', () => {
  posts.forEach(post => {
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('slug');
  })
})

test('La funzione resituisce undefined se l’id non esiste', () => {
  const result = findPostById(posts, 10);
  expect(result).toBeUndefined();
});