describe('scrabble',function() {

  it('will return 1 when input is the letter A',function() {
    scrabble('A').should.equal(1);
  });

  it('will return 1 when input is the letter E',function() {
    scrabble('E').should.equal(1);
  });

  it('will return 2 when you input the letter G',function() {
    scrabble('G').should.equal(2);
  });

  it('will return 3 when you input the letter M', function() {
    scrabble('M').should.equal(3);
  });

  it('will return 4 when you input the letter V', function() {
    scrabble('V').should.equal(4);
  });

  it('will return 5 when you input the letter K', function() {
    scrabble('K').should.equal(5);
  });

  it('will return 8 when you input the letter J', function() {
    scrabble('J').should.equal(8);
  });

  it('will return 10 when you input the letter Z', function() {
    scrabble('Z').should.equal(10);
  });

  it('will return 2 when you input the word AE', function() {
    scrabble('AE').should.equal(2);
  });

  it('will return 5 when you input the word CAT', function() {
    scrabble('CAT').should.equal(5);
  });

});
  
