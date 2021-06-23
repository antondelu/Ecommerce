import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Cards/ComponentCard.jsx";
import "../src/index.scss";
import imga from './Components/Navbar/port.jpg';
import { ItemCount } from "./Components/Count/Itemcount.jsx";

function App() {
  return (
    <header>
      <Navbar />
      <img className="photoPort" src={imga} alt="" />
      <Card/>
    </header>
  );
}

export default App;
