import { cellStatus, cellType } from "./constants/enums";

export class Helper {
  static generateGrid(numbersize) {
    const gridsize = numbersize + 1;

    let grid = [];
    for (let i = 0; i < gridsize * gridsize - 1; i++) {
      const cell = {
        id: i,
        value: undefined,
        status: cellStatus.none,
        type: cellType.number,
        solution: false,
      };
      grid.push(cell);
    }

    for (let i = 0; i <= numbersize - 1; i++) {
      for (let j = 0; j <= numbersize - 1; j++) {
        let r = Math.floor(Math.random() * 9) + 1;

        let index = i * gridsize + j;
        grid[index].value = r;
        if (Math.random() < 0.5) {
          grid[index].solution = true;
        }
      }
    }

    for (let i = 0; i <= numbersize - 1; i++) {
      let sum = 0;
      for (let j = 0; j <= numbersize - 1; j++) {
        let index = i * gridsize + j;
        if (grid[index].solution) {
          sum += parseInt(grid[index].value);
        }
      }
      let index = i * gridsize + (gridsize - 1);
      grid[index].type = cellType.sum;
      grid[index].ok = false;
      grid[index].value = sum;
    }

    for (let j = 0; j <= numbersize - 1; j++) {
      let sum = 0;
      for (let i = 0; i <= numbersize - 1; i++) {
        let index = i * gridsize + j;
        if (grid[index].solution) {
          sum += parseInt(grid[index].value);
        }
      }
      let index = numbersize * gridsize + j;
      grid[index].type = cellType.sum;
      grid[index].ok = false;
      grid[index].value = sum;
    }

    return grid;
  }

  static checkGrid(arr) {
    const grid = [...arr];
    let numbersize = Math.sqrt(grid.length + 1);
    let numberOfOkValues = 0;

    for (let i = 0; i <= numbersize - 2; i++) {
      let rowSum = 0;
      let columnSum = 0;
      for (let j = 0; j <= numbersize - 2; j++) {
        let rowIndex = i * numbersize + j;
        let columnIndex = j * numbersize + i;
        if (grid[rowIndex].status !== cellStatus.removed)
          rowSum += parseInt(grid[rowIndex].value);
        if (grid[columnIndex].status !== cellStatus.removed)
          columnSum += parseInt(grid[columnIndex].value);
      }
      let rowSumIndex = i * numbersize + (numbersize - 1);
      let columnSumIndex = numbersize * (numbersize - 1) + i;

      if (rowSum === parseInt(grid[rowSumIndex].value)) {
        grid[rowSumIndex].ok = true;
        numberOfOkValues++;
      } else grid[rowSumIndex].ok = false;

      if (columnSum === parseInt(grid[columnSumIndex].value)) {
        grid[columnSumIndex].ok = true;
        numberOfOkValues++;
      } else grid[columnSumIndex].ok = false;
    }
    if (numberOfOkValues === (numbersize - 1) * 2) return [grid, true];
    else return [grid, false];
  }

  static solveGrid(arr) {
    const grid = [...arr];
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].solution) grid[i].status = cellStatus.selected;
      else grid[i].status = cellStatus.removed;
    }
    /*
    grid.forEach((cell) => {
      if (cell.solution) cell.status = cellStatus.selected;
      else cell.status = cellStatus.removed;
    });
    */
  }
}
