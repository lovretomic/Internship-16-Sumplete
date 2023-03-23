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
      grid[index].value = sum;
    }

    return grid;
  }
}
