//Snack 1 
const getInitials = (name) => {
  const words = name.split(" ");

  const initials = words.map(word => word.charAt(0).toUpperCase()).join("");

  return initials;
}

// Snack 2
const createSlug = (stringa) => {
  const slug = stringa.toLowerCase();
  return slug;
}

//Snack 3
const average = (array) => {
  const sum = array.reduce((acc, num) => acc + num, 0);
  const avg = sum / array.length;
  return Number(avg.toFixed(1));
}


module.exports = {
  getInitials,
  createSlug,
  average
}