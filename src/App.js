import { BrowserRouter, Switch, Route } from 'react-router-dom';


// components
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import Cart from './Components/Cart/Cart';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Shop from './Components/shop/Shop';
import About from './Components/About/About';
import Contact from './Components/contact/Contact';
// import Product from './Components/Cart/Product';


import './App.css';

// const isAdmin =  true;

function App() {
  return (
    <BrowserRouter>
      {<Header /> }
      <Switch>
         <Route  exact path="/"component={Home} />
         < Route  exact path="/Cart"component={Cart} />
         < Route  exact path="/Login"component={Login} />
         < Route  exact path="/Register"component={Register} />
         < Route  exact path="/Shop" component={Shop} />
         < Route  exact path="/About" component={About} />
         < Route  exact path="/Contact" component={Contact} />
         {/* < Route  exact path="/product" component={Product} /> */}
         {/* <Shop />
         <Register />
        <Login />
        <Cart />
        <Home /> */}
      </Switch >
    </BrowserRouter>
  );
}

export default App;
