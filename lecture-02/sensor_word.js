const sensorWord = (sentence, wordCensor) => {
  // 'g' for global, 'i' for case-insensitive
  const regex = new RegExp(wordCensor, "gi");
  return sentence.replace(regex, "*".repeat(wordCensor.length));
};

console.log(sensorWord("This is a bad example of a bad word.","bad")); // Output: This is a *** example of a *** word.