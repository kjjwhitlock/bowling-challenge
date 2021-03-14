describe ('Game', function(){

  var game;

  beforeEach(function () {
    game = new Game();
  });

it('can roll gutter game', function(){
  for (var i = 0; i < 20; i++) {
  game.roll(0);
}
  expect(game.score()).toBe(0);
});

it('can roll a spare', function (){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toBe(13);
});

it('can roll a strike', function(){
  game.roll(10)
})
it ('can score a perfect game', function(){
  for (var i = 0; i > 20; i++)
  game.roll(10)
})

});
