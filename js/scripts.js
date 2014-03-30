var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T", "_"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"]
  var lettersValueFour = ["F", "H", "V", "W", "Y"];
  var lettersValueFive = ["K"];
  var lettersValueEight = ["J", "X"];
  var lettersValueTen = ["Q", "Z"];
  var letters = txt.toUpperCase().split("");
  
  var totalValue = 0;


  for (var i = 0; i < letters.length; i++) {
    if (lettersValueOne.indexOf(letters[i]) > -1) {
      totalValue += 1;
      } else if (lettersValueTwo.indexOf(letters[i]) > -1) {
        totalValue += 2;
      } else if (lettersValueThree.indexOf(letters[i]) > -1) {
        totalValue += 3; 
      } else if (lettersValueFour.indexOf(letters[i]) > -1) {
        totalValue += 4;
      } else if (lettersValueFive.indexOf(letters[i]) > -1) {
        totalValue += 5;
      } else if (lettersValueEight.indexOf(letters[i]) > -1) {
        totalValue += 8; 
      } else if (lettersValueTen.indexOf(letters[i]) > -1) {
        totalValue += 10;
      } 
  };
  return totalValue;                
};

$(function() {
  $('form#scrabble').submit(function(event) { 
    
    var word = $('#input-word').val();
    var totalScore = scrabble(word);
    
    $('#score').text(totalScore);
    $('#result').show();
    event.preventDefault();
  });
});
