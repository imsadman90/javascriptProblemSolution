function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalWord);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));
