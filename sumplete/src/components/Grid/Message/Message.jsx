import { Helper } from "../../../Helper";

const Message = ({ grid, setGrid }) => {
  Helper.solveGrid(grid);
  return (
    <>
      <h2>Puzzle solved! Well done</h2>
      <button onClick={() => setGrid(Helper.generateGrid(3))}>
        New puzzle
      </button>
    </>
  );
};

export default Message;
