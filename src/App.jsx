import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header name="The Job Board" />
      <Jobs className="jobs" />
      <Footer tech="React" place="Le Reacteur" by="Solène Plassart" />
    </>
  );
}

export default App;
