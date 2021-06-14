import logo from './logo.svg';
import '../src/index.scss'
function App() {
    return(
<header>
<nav>
<ul>
<li><a href="#index"><img className="logo" src={logo} alt="" /></a></li>
<li><a href="#index"><i className="icon-home"></i>Home</a></li>
<li><a href="#about"><i className="icon-user"></i>About</a></li>
<li><a href="#productos"><i className="icon-thumbs-up-alt"></i>Productos</a></li>
<li><a href="#ofertas"><i className="icon-gear"></i>Ofertas</a></li>
<li><a href="#vender"><i className="icon-picture"></i>Vender</a></li>
<li><a href="#carrito"><i className="icon-phone"></i>Mi carrito</a></li>
</ul>
</nav>
</header>


    )
}

export default App;

