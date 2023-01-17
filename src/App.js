// Components
import Header from "./components/Header";
import Floors from "./components/Floors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header carLotOwner="Mors Ejendomme"/>
      <Floors />
      <Footer />
    </div>
  );
}

export default App;
