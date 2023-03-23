import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <h2 id="dadagrams">
        A new daily word puzzle! -{" "}
        <a href="https://dadagrams.com">Dadagrams 🥸</a>
      </h2>
      <h1>Sumplete</h1>
      <h2>
        Delete numbers so each row/column adds up to the target number at the
        right/bottom.
      </h2>
      <Grid />
    </div>
  );
}

export default App;
