describe('scrabble',function() {

  it('will return 1 when input is the letter A',function() {
    scrabble('A').should.equal(1);
  });

  it('will return 1 when input is the letter E',function() {
  scrabble('E').should.equal(1);
});

  // it('will return true when input is the letter A'), function() {
  //   scrabble('A').should.equal(true);
  // }0;

  // it('will return 1 for each inputs "A, E, I, O, U, L, N, R, S, T"',function() {
  //   scrabble('E').should.equal(1);
  // });

  it('will return 1 for each inputs "a, e, i, o, u, l, n, r, s, t"',function() {
    scrabble('e').should.equal(1);
  });

  it('will return 2 for each inputs "D, G"',function() {
    scrabble('Gooo').should.equal(2);
  });
});
  
