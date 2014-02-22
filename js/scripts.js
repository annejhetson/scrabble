var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T", "_"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"]
  var lettersValueFour = ["F", "H", "V", "W", "Y"];
  var lettersValueFive = ["K"];
  var lettersValueEight = ["J", "X"];
  var lettersValueTen = ["Q", "Z"];
  var multipleLetters = txt.split("");
  var totalValue = 0;


  for (var i = 0; i < multipleLetters.length; i++) {
    if (lettersValueOne.indexOf(multipleLetters[i]) > -1) {
      totalValue += 1;
      } else if (lettersValueTwo.indexOf(multipleLetters[i]) > -1) {
        totalValue += 2;
      } else if (lettersValueThree.indexOf(multipleLetters[i]) > -1) {
        totalValue += 3; 
      } else if (lettersValueFour.indexOf(multipleLetters[i]) > -1) {
        totalValue += 4;
      } else if (lettersValueFive.indexOf(multipleLetters[i]) > -1) {
        totalValue += 5;
      } else if (lettersValueEight.indexOf(multipleLetters[i]) > -1) {
        totalValue += 8; 
      } else if (lettersValueTen.indexOf(multipleLetters[i]) > -1) {
        totalValue += 10;
      } 
  };
  return totalValue;                
};

$(function() {
  console.log("hello");
  $('form#scrabble').submit(function(event) { 
    
    var word = $('#input-word').val();
    var totalScore = scrabble(word);
    
    $('#score').text(totalScore);
    $('#result').show();
    event.preventDefault();
  });
});
