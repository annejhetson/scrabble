describe('scrabble',function() {

  it('will return 1 when input is the letter A',function() {
    scrabble('A').should.equal(1);
  });

  it('will return 1 when input is the letter E',function() {
  scrabble('T').should.equal(1);
  });

  // it('will return 1 for each inputs "a, e, i, o, u, l, n, r, s, t"',function() {
  //   scrabble('e').should.equal(1);
  // });

  it('will return 2 when you input the letter G',function() {
    scrabble('G').should.equal(2);
  });

  it('will return 3 when you input the letter M', function() {
    scrabble('M').should.equal(3);
  });

});
  
