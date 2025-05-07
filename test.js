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
module.exports = {
  getInitials,
  createSlug
}