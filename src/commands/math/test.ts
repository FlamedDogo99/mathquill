class Test {
  blocks: MatrixCell[];
  deleteCell(_currentCell: MatrixCell) {
    let rows: MatrixCell[][] = [],
      columns: MatrixCell[][] = [];
    let blocks = this.blocks,
      row = -1,
      column = 0;

    // Create arrays for cells in the current row / column
    blocks.forEach(function (cell) {
      if (row !== cell.row) {
        row = cell.row;
        rows[row] = [];
        column = 0;
      }
      columns[column] = columns[column] || [];
      columns[column].push(cell);
      rows[row].push(cell);

      column += 1;
    });
  }
}
