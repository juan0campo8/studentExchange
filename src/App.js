import React from "react";
import './App.css';
import Header from "./Header";
import Home from "../src/pages/Home";
import UploadItem from "./pages/uploadItem";
import SignIn from "./pages/signin";

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
        
      </Routes>
    </Router>
  );
}

export default App;