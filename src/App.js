// Components
import Header from "./components/Header";
import Floors from "./components/Floors";
import Footer from "./components/Footer";
import {useState} from 'react';

function App() {

  const {state, setState} = useState({
    parkingData: {
      levelOne: {
        freeParkingLots: 147,
        chargingParkingLot: 63,
        handicap: 14,
      }
    }
  });
  
  return (
    <div className="app">
      <Header carLotOwner="Stigsborg"/>
      <Floors />
      <Footer />
    </div>
  );
}

export default App;
