import { cellStatus, cellType } from "../../../constants/enums";
import { useCallback } from "react";
import { Helper } from "../../../Helper";

const Cell = ({ value, type, id, status, ok, setGrid, solved }) => {
  const handleCellStatusSwitch = useCallback(
    (id) => {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        const cellIndex = newGrid.findIndex((cell) => cell.id === id);

        let newStatus;
        switch (newGrid[cellIndex].status) {
          case cellStatus.none:
            newStatus = cellStatus.removed;
            break;
          case cellStatus.selected:
            newStatus = cellStatus.none;
            break;
          default:
            newStatus = cellStatus.selected;
            break;
        }

        const updatedCell = {
          ...newGrid[cellIndex],
          status: newStatus,
        };
        newGrid[cellIndex] = updatedCell;
        return Helper.checkGrid(newGrid)[0];
      });
    },
    [setGrid]
  );

  return (
    <div
      className={`
        cell
        ${type}
        ${type === "number" ? status : ""}
        ${ok ? "ok" : ""}
      `}
      onClick={
        type === cellType.number && !solved
          ? () => handleCellStatusSwitch(id)
          : null
      }
    >
      <p className="cell__content">{value}</p>
    </div>
  );
};

export default Cell;
