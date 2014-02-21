var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"];
  var result;

  lettersValueOne.forEach(function(letter) {
    if (txt === letter) {
      console.log("letter = " + letter);
      result = 1; 
    }
  });
  
  lettersValueTwo.forEach(function(letter) {
    if (txt === letter) {
      result = 2;
    }
  });

  lettersValueThree.forEach(function(letter) {
    if (txt === letter) {
      result = 3;
    }
  });
    
  return result;
};
