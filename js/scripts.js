var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var lettersValueTwo = ["D", "G"];
  var result;

  lettersValueOne.forEach(function(letter) {
    if (txt = letter) {
      console.log(txt);
      result = 1; 
    } else {
      result = 2;
    } 
  })
  return result;
};

// "a", "e", "I", "o", "u", "l", "n", "r", "s", "t"
