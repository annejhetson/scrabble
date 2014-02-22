var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"];
  var lettersValueFour = ["F", "H", "V", "W", "Y"];
  var lettersValueFive = ["K"];
  var lettersValueEight = ["J", "X"];
  var lettersValueTen = ["Q", "Z"];
  var splitLetters = txt.split("");
  var result;

  a e i o u

  lettersValueOne.forEach(function(letter) {
    if (txt === letter) {
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

  lettersValueFour.forEach(function(letter) {
    if (txt === letter) {
      result = 4;
    }
  });

  lettersValueFive.forEach(function(letter) {
    if (txt === letter) {
      result = 5;
    }
  });

  lettersValueEight.forEach(function(letter) {
    if (txt === letter) {
      result = 8;
    }
  });

  lettersValueTen.forEach(function(letter) {
    if (txt === letter) {
      result = 10;
    }
  });
    
  return result;
};
