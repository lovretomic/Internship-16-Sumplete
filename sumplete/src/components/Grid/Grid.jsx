import { useState } from "react";
import { Helper } from "../../Helper";
import Cell from "./Cell";
import Message from "./Message";

const Grid = () => {
  const [grid, setGrid] = useState(Helper.generateGrid(3));
  Helper.checkGrid(grid);

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
      {Helper.checkGrid(grid)[1] && <Message grid={grid} setGrid={setGrid} />}
    </>
  );
};

export default Grid;
