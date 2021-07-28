import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Item/ComponentCard.jsx";
import "../src/index.scss";
import { ItemCount } from "./Components/Count/Itemcount.jsx";
import {ItemDetailContainer} from "./Containers/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {But} from "./Components/Item/button.jsx"
import {ImgPor} from "./Components/Portada/PortadaImg.jsx"
import {Home} from "./Containers/HomeContainer/Home.jsx" 
import { Cart } from "./Components/Cart/cartWidget.jsx";
import {ShopComponentContext} from "./Context/cartContext.jsx"

function App() {
  return (
    <ShopComponentContext>
    <BrowserRouter>
      <Navbar />
      <Switch>  
        <Route exact path="/" component={Home}/>
        <Route exact path="/productos" component={Card}/>
        <Route exact path="/productos/:category" component={Card}/>
        <Route exact path="/item/:id" component={ItemDetailContainer}/>
        <Route exact path="/cart" component={Cart}/>
              </Switch>
    </BrowserRouter>
    </ShopComponentContext>
  );
}

export default App;
