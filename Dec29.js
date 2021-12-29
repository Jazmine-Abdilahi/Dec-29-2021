function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(2010);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(2010);

console.log(age1, age2);

// Part 2
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(2010);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2010, 'Yasmine'));
console.log(yearsUntilRetirement(2000, 'Bob'));


