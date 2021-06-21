import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Cards/ComponentCard.jsx";
import "../src/index.scss";
import { ItemCount } from "./Components/Count/Itemcount.jsx";

function App() {
  return (
    <header>
      <Navbar />
      <Card/>
    </header>
  );
}

export default App;
