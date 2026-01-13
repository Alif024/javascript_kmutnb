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
console.log(firstName.length); // Output: 8

let charCodeAtIndex2 = firstName.charCodeAt(2); // Unicode of 'i' is 105
console.log(charCodeAtIndex2); // Output: 105

let charPointAtIndex2 = firstName.codePointAt(2); // UTF-16 of 'i' is 105
console.log(charPointAtIndex2); // Output: 105

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part); // Output: Banana

console.log(part.toUpperCase()); // Output: BANANA
console.log(part.toLowerCase()); // Output: banana

let notTrimmed = "   Hello World!   ";
console.log(notTrimmed.trimStart()); // Output: "Hello World!   "
console.log(notTrimmed.trimEnd());   // Output: "   Hello World!"

let num = "5";
let paddedStart = num.padStart(4,"0");
console.log(paddedStart); // Output: "0005"

let paddedEnd = num.padEnd(4,"0");
console.log(paddedEnd); // Output: "5000"

let notRepeated = "Ha";
let repeated = notRepeated.repeat(3);
console.log(repeated); // Output: HaHaHa

let textNotReplaced = "Hello World, World!, World!";
let newText = textNotReplaced.replaceAll("World", "Universe");
console.log(newText); // Output: Hello Universe, Universe!, Universe!

let testFoundText = "Please locate where 'locate' occurs!";
let indexTestFoundText = testFoundText.indexOf("locate");
console.log(indexTestFoundText); // Output: 7

let indexTestFoundTextEnd = testFoundText.lastIndexOf("locate");
console.log(indexTestFoundTextEnd); // Output: 21

let indexSkipFoundText = testFoundText.indexOf("locate", 10);
console.log(indexSkipFoundText); // Output: 21

let searchText = "Please locate where 'locate' occurs!";
console.log(searchText.search(/locate/)); // Output: 7

let matchText = "The rain in SPAIN stays mainly in the plain";
console.log(matchText.match(/ain/g)); // Output: [ 'ain', 'ain', 'ain' ]
console.log(matchText.match(/ain/gi)); // Output: [ 'ain', 'AIN', 'ain', 'ain' ]

for (const match of matchText.matchAll(/ain/gi)) {
    console.log(`Found ${match[0]} at index ${match.index}`);
}
// Output:
// Found ain at index 5
// Found AIN at index 14
// Found ain at index 25
// Found ain at index 40

let includesText = "Hello World, welcome to the universe.";
console.log(includesText.includes("World")); // Output: true
console.log(includesText.includes("world")); // Output: false

let startsWithText = "Hello World, welcome to the universe.";
console.log(startsWithText.startsWith("Hello")); // Output: true

let endsWithText = "Hello World, welcome to the universe.";
console.log(endsWithText.endsWith("universe.")); // Output: true