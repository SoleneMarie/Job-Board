import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header name="The Job Board" />
      <Jobs
        className="oneJob"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
    </>
  );
}

export default App;
