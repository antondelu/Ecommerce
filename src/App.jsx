import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Cards/ComponentCard.jsx";
import "../src/index.scss";
import { ItemCount } from "./Components/Count/Itemcount.jsx";
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {But} from "./Components/Cards/button.jsx"
import {ImgPor} from "./Components/Portada/PortadaImg.jsx"
import {Home} from "./Components/HomeContainer/Home.jsx" 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>  
        <Route exact path="/" component={Home}/>
        <Route exact path="/productos" component={Card}/>
        <Route exact path="/productos/:category" component={Card}/>
        <Route exact path="/item/:id" component={ItemDetailContainer}/>
              </Switch>
    </BrowserRouter>
  );
}

export default App;
