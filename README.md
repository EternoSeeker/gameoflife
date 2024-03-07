# Conway's Game of Life
## What is it ?

Conway's Game of Life, or simply "Life," is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, meaning its evolution is determined by its initial state, requiring no further input. Players interact with the game by creating an initial configuration and observing how it evolves. The game is Turing complete and can simulate a universal constructor or any other Turing machine.

### The Universe

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.

## The Rules

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; 
births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one.

## Presets
### Glider

The glider is the smallest, most common, and first-discovered spaceship in Game of Life. It travels diagonally across the grid, Gliders are important because they are easily produced (by glider guns and rakes) can be collided with each other to form more complicated patterns, and can be used to transmit information over long distances.

<div>
      <img src="data/game-images/Small-Glider.png" alt="Small Glider" height="100">
      <img src="https://conwaylife.com/w/images/8/81/Glider.gif" height="100">
</div>

### Big Glider

The big glider was found by Dean Hickerson in December 1989 and was the first known diagonal spaceship other than the glider. Two gliders can be temporarily seen at the front of the ship; these do not stay gliders but still move like them.

<div>
  <img src="data/game-images/Big-Glider.png" alt="Big Glider" height="200">
  <img src="https://conwaylife.com/w/images/f/fd/Bigglider.gif" height="200">
</div>

### Gosper Glider Gun

The Gosper glider gun is the first known gun, and indeed the first known finite pattern with unbounded growth, found by Bill Gosper in November 1970. It consists of two queen bee shuttles stabilized by two blocks.

<div>
  <img src="data/game-images/Gosper-Glider-Gun.png" alt="Gosper Glider Gun" height="200">
  <img src="https://conwaylife.com/w/images/b/b6/Gosperglidergun.gif" height="200">
</div>

#### More Configurations

https://conwaylife.com/wiki/Category:Patterns

## Resources - more stuff

#### Spark your interest

https://www.youtube.com/watch?v=R9Plq-D1gEk

https://youtu.be/C2vgICfQawE?si=yWqN0BOSBOMaujkI

#### Also try playing it here

https://playgameoflife.com/

https://conwaylife.com/

#### Further Reading

https://conwaylife.com/wiki/

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

## Footnote
Conway's Game of Life is a fascinating exploration of life, death, and the rules that govern them. Despite its simplicity, it can lead to complex and beautiful patterns.

Game of Life offers a unique way to explore the unpredictable beauty of life itself.
