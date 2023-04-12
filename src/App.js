import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import SellItem from "./SellItem";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/Header' element = {<Header/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='/SellItem' element = {<SellItem/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
