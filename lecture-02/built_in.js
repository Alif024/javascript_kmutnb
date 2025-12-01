// console.log(`${Date.now()}: Built-in Function Example`);

const fullName = "  Aniracha   Mingkhwan  ";
const cleanedName = fullName.trim();
console.log(cleanedName); // Output: "Aniracha   Mingkhwan"

const nameParts = cleanedName.split(" ");
console.log(nameParts);

const finalParts = nameParts.filter(Boolean);
console.log(finalParts);

const firstName = finalParts[0];
console.log(firstName); // Output: Aniracha

const lastName = finalParts[1];
console.log(lastName); // Output: Mingkhwan