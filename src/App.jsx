import "./App.css";
import Title from "./components/Title.jsx";

function App() {
  return (
    <>
      <section className="mainBlock">
        <header>
          <Title name="The Job Board" />
        </header>
        <main>
          <section className="allJobs">
            <Job
              className="oneJob"
              title="Full Time Sales Associate - Sydney Boutique"
              contractType="CDI"
              country="Australie"
              city="Sydney"
            />
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
