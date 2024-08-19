import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header name="The Job Board" />
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
    </>
  );
}

export default App;
