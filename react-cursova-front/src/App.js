import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from "./Components/Header";
import {Route, Switch} from "react-router";
import Home from "./Pages/Home";
import Novelty from "./Pages/Novelty";
import Dress from "./Pages/Dress";
import Clothes from "./Pages/Clothes";
import Sport from "./Pages/Sport";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AllProducts from "./Components/allProducts";
import Single from "./Components/single";
import AllCart from "./Components/cart";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <Router>
          <Header />

      </Router>

  );
}

export default App;
