//Snack 1 
const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map(word => word.charAt(0).toUpperCase()).join("");
  return initials;
}

// Snack 2
const createSlug = (stringa) => {
  return stringa.toLowerCase();
};

//Snack 3
const average = (array) => {
  const sum = array.reduce((acc, num) => acc + num, 0);
  const avg = sum / array.length;
  return Number(avg.toFixed(1));
}

// Snack 4
const split = (stringa) => {
  return stringa.toLowerCase().split(" ").join("-");
}

// Snack 5
const isPalindrome = (stringa) => {
  return stringa.split('').reverse().join('');
}

// Snack 6
const createSlugSafe = (stringa) => {
  if (!stringa) {
    throw new Error("Il titolo non può essere vuoto");
  }
  return stringa.toLowerCase().split(" ").join("-");
}

// Snack 7
const findPostById = (posts, id) => {
  return posts.find(post => post.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  split,
  isPalindrome,
  createSlugSafe,
  findPostById
}