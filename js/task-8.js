function invertLetterCase(text) {
  let inverString = "";
  for (const letter of text) {
    if (letter === letter.toUpperCase()) {
      inverString += letter.toLowerCase();
    } else {
      inverString += letter.toUpperCase();
    }
    console.log(letter);
  }
  return inverString;
}

console.log(invertLetterCase("JavaScript is Awesome"));
