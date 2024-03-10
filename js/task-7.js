function checkLetterCase(text) {
  for (const iterator of text) {
    console.log(iterator);
    if (iterator === iterator.toUpperCase()) {
      return true;
    }
  }
  return false;
}
console.log(checkLetterCase("HelloWorld"));

function checkLetter(title) {
  for (const iterator of title) {
    console.log(iterator);
    if (iterator === iterator.toLowerCase()) {
      return true;
    }
  }
  return false;
}
console.log(checkLetter("HiEveryone"));
