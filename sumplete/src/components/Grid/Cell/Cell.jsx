import { cellStatus } from "../../../constants/enums";

const Cell = ({ value, type, id, status, setGrid }) => {
  const handleCellStatusSwitch = (id) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      const cell = newGrid.find((cell) => cell.id === id);

      let newStatus;
      switch (cell.status) {
        case cellStatus.none:
          newStatus = cellStatus.selected;
          break;
        case cellStatus.selected:
          newStatus = cellStatus.removed;
          break;
        default:
          newStatus = cellStatus.none;
          break;
      }

      cell.status = newStatus;
      return newGrid;
    });
  };

  return (
    <div
      className={`cell ${type} ${status}`}
      onClick={() => handleCellStatusSwitch(id)}
    >
      <p className="cell__content">{value}</p>
    </div>
  );
};

export default Cell;
