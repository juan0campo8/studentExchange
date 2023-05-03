import React from "react";
import './App.css';
import Header from "./Header";
import Home from "../src/pages/Home";
import UploadItem from "./pages/uploadItem";
import SignIn from "./pages/signin";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";

import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path='/Header' element = {<Header/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='/uploadItem' element = {<UploadItem/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;