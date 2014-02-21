var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"]
  var result;

  var index = lettersValueOne.indexOf(txt);
    if (index >= 0){
      console.log("index = " + index);
      return 1
    } else {
      var index2 =lettersValueTwo.indexOf(txt);
      if (index2 >= 0) {

      console.log("index2 = " + index2);
      return 2
      };
    };
};











  // for (i = txt; i = letter ; i++) {
  //   if(i )
  // }










  // lettersValueOne.forEach(function(letter) {
  //   if (txt = letter) {
  //     console.log(txt);
  //     result = 1; 
  //   } else {

  //     result = 2;
  //   } 
  // })
  // return result;
// };

// "a", "e", "I", "o", "u", "l", "n", "r", "s", "t"
