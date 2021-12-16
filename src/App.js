import React from 'react';
import Header from './components/Header';
import Home from "./components/Home";
import Cart from "./components/Cart";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'


const App = () => {
  return(
    <div className="">
      <Header />
      <Router>
        <Switch>
            <Route path="/" exact="true">
                <Home />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch> 
      </Router>
    </div>
  )
}

export default App;