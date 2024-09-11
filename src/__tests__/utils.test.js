// import { currentAgeForBirthYear } from "../utils";


const { currentAgeForBirthYear } = require('../utils');



describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);


    expect(ageOfPerson).toBe(expectedAge);
  });
});
