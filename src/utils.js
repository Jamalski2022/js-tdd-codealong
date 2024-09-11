// Your code here
// utils.js

// Function to calculate the age of a person based on the birth year
function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Exporting the function (CommonJS format)
module.exports = { currentAgeForBirthYear };

// OR, if using ES6 modules:
// export function currentAgeForBirthYear(birthYear) {
//   const currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// }

