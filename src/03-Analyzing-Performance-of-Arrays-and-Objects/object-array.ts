let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

const keys = Object.keys(instructor);
// const values = Object.values(instructor);
const entries = Object.entries(instructor);
const hasOwnProperty = instructor.hasOwnProperty("favoriteNumbers");
console.log(hasOwnProperty); // true

// ARRAYS
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
