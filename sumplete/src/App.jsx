import { Helper } from "./Helper";

function App() {
  return <div className="App">
    <button onClick={() => console.log(Helper.generateGrid(3))}>Generate</button>
  </div>;
}

export default App;
