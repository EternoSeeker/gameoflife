<a id="top"></a>
<div align="center">
  <h1>Conway's Game of Life</h1>
  <p>A cellular automaton devised by British mathematician John Horton Conway in 1970.</p>
</div>

---
## GitHub Repository Stats 

<div align = "center">

<table align="center">
    <thead align="center">
        <tr border: 1px;>
            <td ><b>🌟 Stars</b></td>
            <td ><b>🍴 Forks</b></td>
            <td ><b>🐛 Issues</b></td>
            <td ><b>🔔 Open PRs</b></td>
            <td ><b>🔕 Closed PRs</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/EternoSeeker/gameoflife?style=flat&logo=github"/></td>
             <td><img alt="Forks" src="https://img.shields.io/github/forks/EternoSeeker/gameoflife?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/EternoSeeker/gameoflife?style=flat&logo=github"/></td>
            <td><img alt="Open Pull Requests" src="https://img.shields.io/github/issues-pr/EternoSeeker/gameoflife?style=flat&logo=github"/></td>
           <td><img alt="Close Pull Requests" src="https://img.shields.io/github/issues-pr-closed/EternoSeeker/gameoflife?style=flat&color=critical&logo=github"/></td>
        </tr>
    </tbody>
</table>
</div>

  ## 🏆 Featured in:

<table>
    <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
    </tr>
    <tr>
        <td><img src="images/Gssoc Label.png" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
        <td>GirlScript Summer of Code 2024</td>
        <td>GirlScript Summer of Code is a three-month-long Open Source Program conducted every summer by GirlScript Foundation. It is an initiative to bring more beginners to Open-Source Software Development. 
    </tr>
</table>

---

<details>
  <summary><h2>:pushpin:Table of Contents:</h2></summary>
  
1. [What is it?](#what-is-it)
   1. [The Universe](#the-universe)
   2. [The Rules](#the-rules)
   3. [The Game](#the-game)
2. [The Canvas / Grid](#the-canvas--grid)
3. [The Settings](#the-settings)
4. [The Themes](#the-themes)
5. [The Presets](#the-presets)
   1. [Glider](#glider)
   2. [Big Glider](#big-glider)
   3. [Gosper Glider Gun](#gosper-glider-gun)
   4. [Pulsar](#pulsar)
   5. [Circle of Fire](#circle-of-fire)
   6. [Quadpole](#quadpole)
   7. [Spider](#spider)
   8. [Spaceship](#spaceship)
   9. [Boat-Tie](#boat-tie)
   10. [Pentadecathlon](#pentadecathlon)
6. [Feedback](#feedback)
7. [Resources](#resources)
   
</details>
<hr>

## What is it?

✨ Conway's Game of Life, or simply "Life," is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, meaning its evolution is determined by its initial state, requiring no further input. Players interact with the game by creating an initial configuration and observing how it evolves. The game is Turing complete and can simulate a universal constructor or any other Turing machine.

---

## The Universe

🌌 The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells. Each cell is in one of two possible states: `ALIVE` or `DEAD`. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.

---
## The Rules

1. Any live cell with fewer than two live neighbors dies, as if by **underpopulation**.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by **overpopulation**.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by **reproduction**.

The first generation is created by applying the above rules simultaneously to every cell in the seed, alive or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one.

---


<details>
  <summary><h2>🎮The Game</h2></summary>
  


### The Canvas / Grid

![Game Grid](./images/GRID.png)

### Buttons

| Buttons | What they do |
| --- | --- |
|   ▶️   | Starts the animation after you've set the initial pattern |
|   ⏸️   | Pauses the animation |
|   ⏩   | Increases the speed of the animation |
|   ⏪   | Decreases the speed of the animation |
| `Clear` | Clears the grid on click, only if the game is not animating at that moment |
| `Random` | Randomly initializes the grid with initial randomness as 20% |
|`Change grid size`| This function allow you to change the size of grid according to your preference|


### ⌨️ Keyboard Shortcuts


| Keybind | What they do |
| --- | --- |
|   `P` or `Space Bar`   | Starts the animation after you've set the initial pattern and Pauses an ongoing animation |
|    `F` or `[→]` (Arrow Right)  | Increases the speed of the animation |
|   `S` or `[←]` (Arrow Left)             | Decreases the speed of the animation |
| `D` or `Delete` | Clears the grid on click, only if the game is not animating at that moment |
| `R` | Randomly initializes the grid with initial randomness as 20% |
| `[↑]` (Arrow Up) | Increases the Randomness value by 5% |
| `[↓]` (Arrow Down) | Decreases the Randomness value by 5% |
| `G` | Toggles Gridlines On / Off |
| `M` | Toggles Music On / Off |

### ⚙️ The Settings

| ⚙️  Settings | What are they for? |
| --- | --- |
| `Gridlines` | Toggles visibility of the gridlines |
| `Warp on Edges` | Warps the patterns across the edges - Initially set as true |
| `Randomness` | Allows you to set custom randomness percent for random initialization |


### The Themes

#### Preset Themes :
| 🎨 Themes | The Colors |
| --- | --- |
| Blue (default) | ![#0f045a](https://placehold.co/15x15/0f045a/0f045a.png) ![#7582b2](https://placehold.co/15x15/7582b2/7582b2.png) ![#036c96](https://placehold.co/15x15/036c96/036c96.png) ![#ebf2ff](https://placehold.co/15x15/ebf2ff/ebf2ff.png) ![#352a7e](https://placehold.co/15x15/352a7e/352a7e.png) ![#101536](https://placehold.co/15x15/101536/101536.png) ![#080126](https://placehold.co/15x15/080126/080126.png) ![#c6cede](https://placehold.co/15x15/c6cede/c6cede.png) ![#00246B](https://placehold.co/15x15/00246B/00246B.png) ![#CADCFC](https://placehold.co/15x15/CADCFC/CADCFC.png) |
| Red | ![#5a0404](https://placehold.co/15x15/5a0404/5a0404.png) ![#B27575](https://placehold.co/15x15/B27575/B27575.png) ![#960320](https://placehold.co/15x15/960320/960320.png) ![#FFEBEB](https://placehold.co/15x15/FFEBEB/FFEBEB.png) ![#7E2A37](https://placehold.co/15x15/7E2A37/7E2A37.png) ![#361015](https://placehold.co/15x15/361015/361015.png) ![#260106](https://placehold.co/15x15/260106/260106.png) ![#DEC6C6](https://placehold.co/15x15/DEC6C6/DEC6C6.png) ![#6b0000](https://placehold.co/15x15/6b0000/6b0000.png) ![#fccaca](https://placehold.co/15x15/fccaca/fccaca.png) |
| Green | ![#045a1e](https://placehold.co/15x15/045a1e/045a1e.png) ![#75B289](https://placehold.co/15x15/75B289/75B289.png) ![#03962f](https://placehold.co/15x15/03962f/03962f.png) ![#EBFFEF](https://placehold.co/15x15/EBFFEF/EBFFEF.png) ![#2A7E4D](https://placehold.co/15x15/2A7E4D/2A7E4D.png) ![#10361C](https://placehold.co/15x15/10361C/10361C.png) ![#01260B](https://placehold.co/15x15/01260B/01260B.png) ![#C6DECC](https://placehold.co/15x15/C6DECC/C6DECC.png) ![#006b2b](https://placehold.co/15x15/006b2b/006b2b.png) ![#cafcdd](https://placehold.co/15x15/cafcdd/cafcdd.png) |
| Purple | ![#5a045a](https://placehold.co/15x15/5a045a/5a045a.png) ![#B275B2](https://placehold.co/15x15/B275B2/B275B2.png) ![#960396](https://placehold.co/15x15/960396/960396.png) ![#FFEBFF](https://placehold.co/15x15/FFEBFF/FFEBFF.png) ![#7E2A7E](https://placehold.co/15x15/7E2A7E/7E2A7E.png) ![#361036](https://placehold.co/15x15/361036/361036.png) ![#260126](https://placehold.co/15x15/260126/260126.png) ![#DEC6DE](https://placehold.co/15x15/DEC6DE/DEC6DE.png) ![#6b006b](https://placehold.co/15x15/6b006b/6b006b.png) ![#fcafcf](https://placehold.co/15x15/fcafcf/fcafcf.png) |
| Dark Cyan | ![#045a5a](https://placehold.co/15x15/045a5a/045a5a.png) ![#75B2B2](https://placehold.co/15x15/75B2B2/75B2B2.png) ![#039696](https://placehold.co/15x15/039696/039696.png) ![#EBFFFF](https://placehold.co/15x15/EBFFFF/EBFFFF.png) ![#2A7E7E](https://placehold.co/15x15/2A7E7E/2A7E7E.png) ![#103636](https://placehold.co/15x15/103636/103636.png) ![#012626](https://placehold.co/15x15/012626/012626.png) ![#C6DEDE](https://placehold.co/15x15/C6DEDE/C6DEDE.png) ![#006b6b](https://placehold.co/15x15/006b6b/006b6b.png) ![#cafcfc](https://placehold.co/15x15/cafcfc/cafcfc.png) |
| Black and White | ![#505050](https://placehold.co/15x15/505050/505050.png) ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) ![#808080](https://placehold.co/15x15/808080/808080.png) ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) ![#808080](https://placehold.co/15x15/808080/808080.png) ![#000000](https://placehold.co/15x15/000000/000000.png) ![#000000](https://placehold.co/15x15/000000/000000.png) ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) ![#000000](https://placehold.co/15x15/000000/000000.png) ![#C1C1C1](https://placehold.co/15x15/C1C1C1/C1C1C1.png) |
| Dark Neon | ![#d0ff00](https://placehold.co/15x15/d0ff00/d0ff00.png) ![#00cc26](https://placehold.co/15x15/00cc26/00cc26.png) ![#00b81b](https://placehold.co/15x15/00b81b/00b81b.png) ![#004640](https://placehold.co/15x15/004640/004640.png) ![#fc0101](https://placehold.co/15x15/fc0101/fc0101.png) ![#000000](https://placehold.co/15x15/000000/000000.png) ![#002628](https://placehold.co/15x15/002628/002628.png) ![#000525](https://placehold.co/15x15/000525/000525.png) ![#9800f5](https://placehold.co/15x15/9800f5/9800f5.png) ![#80ffff](https://placehold.co/15x15/80ffff/80ffff.png) |
| Cyberpunk | ![#FCE4EC](https://placehold.co/15x15/FCE4EC/FCE4EC.png) ![#EC407A](https://placehold.co/15x15/EC407A/EC407A.png) ![#D81B60](https://placehold.co/15x15/D81B60/D81B60.png) ![#AD1457](https://placehold.co/15x15/AD1457/AD1457.png) ![#FF0056](https://placehold.co/15x15/FF0056/FF0056.png) ![#C2185B](https://placehold.co/15x15/C2185B/C2185B.png) ![#880E4F](https://placehold.co/15x15/880E4F/880E4F.png) ![#FFF0F5](https://placehold.co/15x15/FFF0F5/FFF0F5.png) ![#EC407A](https://placehold.co/15x15/EC407A/EC407A.png) ![#FCE4EC](https://placehold.co/15x15/FCE4EC/FCE4EC.png) |
| Sunset | ![#ff5e5b](https://placehold.co/15x15/ff5e5b/ff5e5b.png) ![#ffb54d](https://placehold.co/15x15/ffb54d/ffb54d.png) ![#ffcc66](https://placehold.co/15x15/ffcc66/ffcc66.png) ![#fff3e6](https://placehold.co/15x15/fff3e6/fff3e6.png) ![#ff9933](https://placehold.co/15x15/ff9933/ff9933.png) ![#ff704d](https://placehold.co/15x15/ff704d/ff704d.png) ![#b33e00](https://placehold.co/15x15/b33e00/b33e00.png) ![#ffebcc](https://placehold.co/15x15/ffebcc/ffebcc.png) ![#ff704d](https://placehold.co/15x15/ff704d/ff704d.png) ![#ffdab3](https://placehold.co/15x15/ffdab3/ffdab3.png) |

#### Custom Theme :
- It also allows the user to choose colors according to their preferences to create their unique Custom Theme.

#### Gradient Theme :
- You can also choose 2 colors to create a Gradient Background.
- The Gradient Theme setting also allows users to select the slope of linear Gradient.
- The Gradient Theme also affects the color of Alive and Dead cells, so that it matches with the Gradient Background.

### ⏳ History

Stores history of patterns that user has played with, up to 5 recent patterns.

</details>

<hr>

<details>
  <summary><h2>✨The Presets </h2></summary>

### Glider

The glider is the smallest, most common, and first-discovered spaceship in Game of Life. It travels diagonally across the grid. Gliders are important because they are easily produced, can be collided with each other to form more complicated patterns, and can be used to transmit information over long distances.

<div>
  <img src="images/Small-Glider.png" alt="Small Glider" height="150">
  <img src="https://conwaylife.com/w/images/8/81/Glider.gif" height="150">
</div>

### Big Glider

The big glider was found by Dean Hickerson in December 1989 and was the first known diagonal spaceship other than the glider. Two gliders can be temporarily seen at the front of the ship; these do not stay gliders but still move like them.

<div>
  <img src="images/Big-Glider.png" alt="Big Glider" height="150">
  <img src="https://conwaylife.com/w/images/f/fd/Bigglider.gif" height="150">
</div>

### Gosper Glider Gun

The Gosper glider gun is the first known gun, and indeed the first known finite pattern with unbounded growth, found by Bill Gosper in November 1970. It consists of two queen bee shuttles stabilized by two blocks.

<div>
  <img src="images/Gosper-Glider-Gun.png" alt="Gosper Glider Gun" height="150">
  <img src="https://conwaylife.com/w/images/b/b6/Gosperglidergun.gif" height="150">
</div>


### Pulsar

The pulsar is a period-3 oscillator, meaning it returns to its initial state after three generations. It’s a symmetric pattern and one of the most recognized oscillators in the Game of Life.

<div>
  <img src="images/Pulsar.png" alt="Pulsar" height="150">
  <img src="https://conwaylife.com/w/images/e/ef/Pulsar.gif" height="150">
</div>

### Circle of Fire

This term isn’t standard in the Game of Life nomenclature but could refer to a specific type of oscillator or a similar repeating pattern that creates a visual effect resembling a circle of fire.

<div>
  <img src="images/Circle-of-Fire.png" alt="Circle-of-Fire" height="150">
  <img src="https://conwaylife.com/w/images/5/50/Circleoffire.gif" height="150">
</div>

### Quadpole

The quadpole is the eighth most common oscillator in Achim Flammenkamp's census, being less common than the bipole but more common than the great on-off. It is the eighth most common oscillator on Adam P. Goucher's Catagolue.

<div>
  <img src="images/Quadpole.png" alt="Quadpole" height="150">
  <img src="https://conwaylife.com/w/images/6/6d/Quadpole.gif" height="150">
</div>

### Spider

Spider is a c/5 orthogonal spaceship that was discovered by David Bell on April 14, 1997. It is the smallest known c/5 orthogonal spaceship. Its side sparks have proven to be very useful in constructing puffers and rakes.

<div>
  <img src="images/Spider.png" alt="Spider" height="150">
  <img src="https://conwaylife.com/w/images/9/9f/Spider.gif" height="150">
</div>

### Spaceship

 The middleweight spaceship (commonly abbreviated to MWSS) or (rarely) medium fish is the third most common spaceship after the glider and lightweight spaceship.It was found by John Conway in 1970 and travels at c/2 orthogonally.

 <div>
  <img src="images/Spaceship.png" alt="Spaceship" height="150">
  <img src="images/Moving-Spaceship.gif" height="150">
</div>

### Boat-Tie

Boat-tie is the twentieth most common still life on Adam P. Goucher's Catagolue, being less common than shillelagh but more common than snake.It is also the twenty-seventh most common object overall on Catagolue.Two copies of boat-tie can be seen in a symmetric constellation that evolves from two traffic light predecessors.

 <div>
  <img src="images/Boat-Tie.png" alt="Spaceship" height="150">
  <img src="images/Moving-Boat-Tie.gif" height="150">
</div>

### Pentadecathlon

The Pentadecathlon is a period-15 oscillator that was found in 1970 by John Conway. It is one of the most well-known patterns in the Game of Life, notable for its longevity and distinctive structure.

<div>
  <img src="images/Pentadecathlon.png" alt="Pentadecathlon" height="150">
  <img src="images/Moving-Pentadecathlon.gif" alt="Pentadecathlon" height="150">
</div>

### More Configurations

Explore more patterns at [ConwayLife Patterns](https://conwaylife.com/wiki/Category:Patterns).

</details>

---
## Feedback 
- 💬 Now the page supports user feedback. Which redirects you to a Feedback.html page.
- 💬 In the Feedback page, user can file a feedback for 'Complaint', 'Suggestion', 'Question', etc.*

---

## Resources

### Spark your interest 

- [The Game of Life | John Conway | TEDxDanubia](https://www.youtube.com/watch?v=R9Plq-D1gEk)
- [Conway's Game of Life Explained](https://youtu.be/C2vgICfQawE?si=yWqN0BOSBOMaujkI)

### Try playing it here

- [Play Game of Life](https://playgameoflife.com/)
- [Conway Life](https://conwaylife.com/)

### Further Reading

- [Conway's Game of Life Wiki](https://conwaylife.com/wiki/)
- [Wikipedia: Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

---

<div align="center">
  <h2>Conway's Game of Life offers a unique way to explore the unpredictable beauty of life itself.</h2>
</div>


<hr>

 <!---------------------------------------------------------------CONTRIBUTION GUIDELINES--------------------------------------------------------------------------->

<details>
 <summary><h2>⚡Contribution Guidelines:</h2></summary>
 
 
 * **Checkout and make your changes for the develop branch only:** When working on your contributions, switch to the **develop** branch in your local repository. This ensures that you are working on the latest version of the codebase.

* **Create pull requests only for the develop branch:** When you are ready to submit your changes, create a pull request (PR) targeting the **develop** branch. This allows the maintainers to review and merge your code into the main development branch.

* **Format your commit message with the issue number:** When making commits related to an issue, follow the format **Fixes: #32 in your commit message. Replace 32 with the issue number you are addressing.** This helps track and manage issues more efficiently.

* **Make your pull request descriptive and include examples:** When creating a pull request, provide a clear and descriptive explanation of the changes you made. This helps reviewers understand the purpose and significance of your contribution. Additionally, including at least one example that demonstrates the intended usage or effect of your changes can be beneficial.

* **Rebase your commits and optimize file changes:** When submitting your pull request, consider rebasing your commits into one commit and optimizing your file changes. This helps keep the commit history clean and makes it easier for reviewers to understand your changes.

Remember, following these guidelines will help ensure a smooth and efficient contribution process. Happy coding!

</details>

<hr>

<!-- Code of conduct -->
<div>
<h2><img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" width="35" height="35"> Code of Conduct</h2>
</div>

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

<hr>

<!-- License -->
<div>
<h2><img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png" width="35" height="35"> License</h2>
</div>

This project is licensed under the [GPL-3.0 License](LICENSE.md).

<hr>

## Contact Us
<div>
<a href="https://www.linkedin.com/in/shriharimagar/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/shriharimagar/" height="30" width="40" /></a>
</div>

<hr>
 <!-- Cotributors -->
<div>
  <h2><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" width="35" height="35"> Contributors</h2>
</div>

Thank you for contributing to our project! Your help is greatly appreciated in making gameoflife even better. 😊

<center>
<a href="https://github.com/EternoSeeker/gameoflife/contributors">
  <img src="https://contrib.rocks/image?repo=EternoSeeker/gameoflife" />
</a>
</center>

<hr>
<div>
  <h2><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fb/512.webp" width="35" height="35"> Support </h2>
</div>

<div>
  Don't forget to leave a star<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp" width="35" height="30"> for this project!
</div> <br>

<a href="#top" style="position: fixed; bottom: 20px; right: 20px; background-color: black ; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-family: Arial; font-size: 16px;">Go to Top</a>
