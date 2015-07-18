GameOfLife = {
  liveCell: 1,
  deadCell: 0,
  grid: [
    [0,0,0,0,0,0,1,0],
    [1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
  ]
};

GameOfLife.displayState = function(data){
  var table = document.querySelector('table');
  if (table) table.remove();
  document.body.appendChild(Table.table(data));
};

GameOfLife.updateState = function(){
  GameOfLife.grid = GameOfLife.calculateNextState(GameOfLife.grid);
  GameOfLife.displayState(GameOfLife.grid);
};

GameOfLife.updateStateButton = function(){
  var btn = document.createElement('button');
  btn.id = 'update-state';
  btn.textContent = 'Update State';
  btn.addEventListener('click',GameOfLife.updateState);
  return btn;
}();

GameOfLife.calculateNextState = function(grid){
  var newGrid = [];
  for (var r in grid){
    var row = grid[r];
    var newRow = [];
    for (var c in row){
      var cell = row[c];
      var newCell = this.determineCellState(c,r,grid,cell);
      newRow.push(newCell);
    }
    newGrid.push(newRow);
  }
  return newGrid;
};

GameOfLife.liveNeighbors = function(x,y,grid){
  var liveCells = 0;
  if ( grid[y - 1] ){
    if ( grid[y - 1][x + 1] === this.liveCell ) liveCells += 1;
    if ( grid[y - 1][x]     === this.liveCell ) liveCells += 1;
    if ( grid[y - 1][x - 1] === this.liveCell ) liveCells += 1;
  }
  if ( grid[y + 1] ){
    if ( grid[y + 1][x + 1] === this.liveCell ) liveCells += 1;
    if ( grid[y + 1][x]   === this.liveCell ) liveCells += 1;
    if ( grid[y + 1][x - 1] === this.liveCell ) liveCells += 1;
  }
  if ( grid[y][x + 1] === this.liveCell ) liveCells += 1;
  if ( grid[y][x - 1] === this.liveCell ) liveCells += 1;
  return liveCells;
};

GameOfLife.determineCellState = function(x,y,grid,cell){
  x = parseInt(x);
  y = parseInt(y);
  var neighbors = this.liveNeighbors(x,y,grid);
  var alive = cell == this.liveCell;
  if ( alive ){
    if ( neighbors < 2 ) return this.deadCell;
    if ( neighbors > 3 ) return this.deadCell;
    return this.liveCell;
  } else {
    if ( neighbors == 3 ) return this.liveCell;
  }
  return cell;
};
