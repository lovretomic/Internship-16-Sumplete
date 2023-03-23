import { Helper } from "../../../Helper";

const Message = ({ grid, setGrid, setSolved }) => {
  Helper.solveGrid(grid);
  setSolved(true);

  const handleClick = () => {
    setGrid(Helper.generateGrid(3));
    setSolved(false);
  };

  return (
    <>
      <h2>Puzzle solved! Well done</h2>
      <button onClick={handleClick}>New puzzle</button>
    </>
  );
};

export default Message;
