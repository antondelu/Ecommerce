import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Cards/ComponentCard.jsx";
import "../src/index.scss";
import imga from './Components/Navbar/port.jpg';
import { ItemCount } from "./Components/Count/Itemcount.jsx";
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Router, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <header>
      <Navbar />
      <Switch>  
     
      </Switch>
      <img className="photoPort" src={imga} alt="" />
      <Card/>
      <ItemDetailContainer/>
    </header>
    </BrowserRouter>
  );
}

export default App;
