# Conway's Game of Life Exercise 

Goal The goal of this exercise is to calculate the next generation of Conway's game of life given any initial state. 

Background The playing field for Conway's game of life consists of a two dimensional grid of cells. 
Each cell is identified as either alive or dead. 
For this exercise, let's assume the playing field is an 8x6 grid of cells (i.e. 8 columns, 6 rows). 
The challenge is to calculate the next state of the playing field given any initial grid state. 
To find the next state, follow these rules: 
  1. Any live cell with fewer than two live neighbors dies, as if caused by under-population. 
  2. Any live cell with more than three live neighbors dies, as if by overcrowding. 
  3. Any live cell with two or three live neighbors lives on to the next generation. 
  4. Any dead cell with exactly three live neighbors becomes a live cell. 
  5. A cell's neighbors are those cells which are horizontally, vertically or diagonally adjacent. 
     Most cells will have eight neighbors. Cells placed on the edge of the grid will have fewer. 

Input / Output 
Design your program to accept an initial 8x6 grid state where each cell is identified as alive or dead. Your program should output a new state by following Conway's game of life rules. Your program should display the new state of the playing field. You may choose the data model for representing your grid and how to display the state of the grid. Here is a very simple command line output example: 

Run the html file to see this work.
Changing the grid in game-of-life.js will allow you to play with different combinations.
