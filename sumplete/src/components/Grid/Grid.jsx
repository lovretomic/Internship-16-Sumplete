import { Fragment } from "react";
import { Helper } from "../../Helper";
import Cell from "./Cell";

const Grid = () => {
  const grid = Helper.generateGrid(3);
  return (
    <div className="grid">
      {grid.map((cell) => (
        <Cell value={cell.value} type={cell.type} key={cell.id} />
      ))}
    </div>
  );
};

export default Grid;
