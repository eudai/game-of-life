Table = {};


Table.table = function(data){
  var table = document.createElement('table');
  for ( var i in data ){
    var row = this.row(data[i]);
    row.setAttribute('index',i);
    table.appendChild(row);
  }
  return table;
};

Table.row = function(data){
  var row = document.createElement('tr');
  for ( var i in data ){
    var cell = this.cell(data[i]);
    cell.setAttribute('index',i);
    row.appendChild(cell);
  }
  return row;
};

Table.cell = function(data){
  var cell = document.createElement('td');
  cell.textContent = data;
  return cell;
};

