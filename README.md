# Conway's Game of Life
## What is it?

Conway's Game of Life, or simply "Life," is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, meaning its evolution is determined by its initial state, requiring no further input. Players interact with the game by creating an initial configuration and observing how it evolves. The game is Turing complete and can simulate a universal constructor or any other Turing machine.

### The Universe

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, 

Each cell is in one of two possible states, `ALIVE` or `DEAD`. 

Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.

## The Rules

1. Any live cell with fewer than two live neighbors dies, as if by **underpopulation**.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by **overpopulation**.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by **reproduction**.

The first generation is created by applying the above rules simultaneously to every cell in the seed, alive or dead; 
births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one.

## The Game


### The Canvas / Grid

<img src="data/game-images/Game-Grid.png" height="300">

| Buttons | What they do |
| --- | --- |
| ![](images/Play-Button.svg) | Starts the animation after you've set the initial pattern |
| ![](images/Pause-Button.svg) | Pauses the animation |
|![](images/Fast-Forward-Button.svg)| Increases the speed of the animation |
|![](images/Fast-Reverse-Button.svg)| Decreases the speed of the animation |
| `Clear` | Clears the grid on click, only if the game is not animating at that moment |
| `Random` | Randomly initializes the grid with initial randomness as 20% |

### The Settings

<img src="data/game-images/Game-Sidebar.png" height="350">

| Settings | What are they for? |
| --- | --- |
| `Gridlines` | Toggles visibility of the gridlines |
| `Warp on Edges` | Warps the patterns across the edges - Initially set as true |
| `Randomness` | Allows you to set custom randomness percent for random initialization |

### The Themes

| Themes | The Colors |
| --- | --- |
| Blue (default) | ![#0f045a](https://placehold.co/15x15/0f045a/0f045a.png) ![#7582b2](https://placehold.co/15x15/7582b2/7582b2.png) ![#036c96](https://placehold.co/15x15/036c96/036c96.png) ![#ebf2ff](https://placehold.co/15x15/ebf2ff/ebf2ff.png) ![#352a7e](https://placehold.co/15x15/352a7e/352a7e.png) ![#101536](https://placehold.co/15x15/101536/101536.png) ![#080126](https://placehold.co/15x15/080126/080126.png) ![#c6cede](https://placehold.co/15x15/c6cede/c6cede.png) ![#00246B](https://placehold.co/15x15/00246B/00246B.png) ![#CADCFC](https://placehold.co/15x15/CADCFC/CADCFC.png) |
| Red | ![#5a0404](https://placehold.co/15x15/5a0404/5a0404.png) ![#B27575](https://placehold.co/15x15/B27575/B27575.png) ![#960320](https://placehold.co/15x15/960320/960320.png) ![#FFEBEB](https://placehold.co/15x15/FFEBEB/FFEBEB.png) ![#7E2A37](https://placehold.co/15x15/7E2A37/7E2A37.png) ![#361015](https://placehold.co/15x15/361015/361015.png) ![#260106](https://placehold.co/15x15/260106/260106.png) ![#DEC6C6](https://placehold.co/15x15/DEC6C6/DEC6C6.png) ![#6b0000](https://placehold.co/15x15/6b0000/6b0000.png) ![#fccaca](https://placehold.co/15x15/fccaca/fccaca.png) |
| Green | ![#045a1e](https://placehold.co/15x15/045a1e/045a1e.png) ![#75B289](https://placehold.co/15x15/75B289/75B289.png) ![#03962f](https://placehold.co/15x15/03962f/03962f.png) ![#EBFFEF](https://placehold.co/15x15/EBFFEF/EBFFEF.png) ![#2A7E4D](https://placehold.co/15x15/2A7E4D/2A7E4D.png) ![#10361C](https://placehold.co/15x15/10361C/10361C.png) ![#01260B](https://placehold.co/15x15/01260B/01260B.png) ![#C6DECC](https://placehold.co/15x15/C6DECC/C6DECC.png) ![#006b2b](https://placehold.co/15x15/006b2b/006b2b.png) ![#cafcdd](https://placehold.co/15x15/cafcdd/cafcdd.png) |
| Purple | ![#5a045a](https://placehold.co/15x15/5a045a/5a045a.png) ![#B275B2](https://placehold.co/15x15/B275B2/B275B2.png) ![#960396](https://placehold.co/15x15/960396/960396.png) ![#FFEBFF](https://placehold.co/15x15/FFEBFF/FFEBFF.png) ![#7E2A7E](https://placehold.co/15x15/7E2A7E/7E2A7E.png) ![#361036](https://placehold.co/15x15/361036/361036.png) ![#260126](https://placehold.co/15x15/260126/260126.png) ![#DEC6DE](https://placehold.co/15x15/DEC6DE/DEC6DE.png) ![#6b006b](https://placehold.co/15x15/6b006b/6b006b.png) ![#fcafcf](https://placehold.co/15x15/fcafcf/fcafcf.png) |
| Dark Cyan | ![#045a5a](https://placehold.co/15x15/045a5a/045a5a.png) ![#75B2B2](https://placehold.co/15x15/75B2B2/75B2B2.png) ![#039696](https://placehold.co/15x15/039696/039696.png) ![#EBFFFF](https://placehold.co/15x15/EBFFFF/EBFFFF.png) ![#2A7E7E](https://placehold.co/15x15/2A7E7E/2A7E7E.png) ![#103636](https://placehold.co/15x15/103636/103636.png) ![#012626](https://placehold.co/15x15/012626/012626.png) ![#C6DEDE](https://placehold.co/15x15/C6DEDE/C6DEDE.png) ![#006b6b](https://placehold.co/15x15/006b6b/006b6b.png) ![#cafcfc](https://placehold.co/15x15/cafcfc/cafcfc.png) |
| Dark Neon | ![#d0ff00](https://placehold.co/15x15/d0ff00/d0ff00.png) ![#00cc26](https://placehold.co/15x15/00cc26/00cc26.png) ![#00b81b](https://placehold.co/15x15/00b81b/00b81b.png) ![#004640](https://placehold.co/15x15/004640/004640.png) ![#fc0101](https://placehold.co/15x15/fc0101/fc0101.png) ![#000000](https://placehold.co/15x15/000000/000000.png) ![#002628](https://placehold.co/15x15/002628/002628.png) ![#000525](https://placehold.co/15x15/000525/000525.png) ![#9800f5](https://placehold.co/15x15/9800f5/9800f5.png) ![#80ffff](https://placehold.co/15x15/80ffff/80ffff.png) |

### History

> Also stores history of patterns that user has played with, up to 5 recent patterns

## The Presets
### Glider

The glider is the smallest, most common, and first-discovered spaceship in Game of Life. It travels diagonally across the grid, Gliders are important because they are easily produced (by glider guns and rakes) can be collided with each other to form more complicated patterns, and can be used to transmit information over long distances.

<div>
      <img src="data/game-images/Small-Glider.png" alt="Small Glider" height="150">
      <img src="https://conwaylife.com/w/images/8/81/Glider.gif" height="150">
</div>

### Big Glider

The big glider was found by Dean Hickerson in December 1989 and was the first known diagonal spaceship other than the glider. Two gliders can be temporarily seen at the front of the ship; these do not stay gliders but still move like them.

<div>
  <img src="data/game-images/Big-Glider.png" alt="Big Glider" height="150">
  <img src="https://conwaylife.com/w/images/f/fd/Bigglider.gif" height="150">
</div>

### Gosper Glider Gun

The Gosper glider gun is the first known gun, and indeed the first known finite pattern with unbounded growth, found by Bill Gosper in November 1970. It consists of two queen bee shuttles stabilized by two blocks.

<img src="data/game-images/Gosper-Glider-Gun.png" alt="Gosper Glider Gun" height="150">
<img src="https://conwaylife.com/w/images/b/b6/Gosperglidergun.gif" height="150">


#### More Configurations

https://conwaylife.com/wiki/Category:Patterns

## The Resources

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
