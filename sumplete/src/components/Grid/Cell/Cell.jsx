const Cell = ({ value, type }) => {
  return (
    <div className={`cell ${type}`}>
      <p className="cell__content">{value}</p>
    </div>
  );
};

export default Cell;
