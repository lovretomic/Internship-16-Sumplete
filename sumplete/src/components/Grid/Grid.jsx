import { useState } from "react";
import { Helper } from "../../Helper";
import Cell from "./Cell";

const Grid = () => {
  const [grid, setGrid] = useState(Helper.generateGrid(3));

  return (
    <>
      <div className="grid">
        {grid.map((cell) => (
          <Cell
            value={cell.value}
            type={cell.type}
            id={cell.id}
            status={cell.status}
            ok={cell.ok}
            setGrid={setGrid}
            key={cell.id}
          />
        ))}
      </div>
      {Helper.checkGrid(grid)[1] && <h2>Puzzle solved! Well done</h2>}
    </>
  );
};

export default Grid;
