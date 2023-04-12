import React from "react";
import './App.css';
import Header from "./Header";
import Home from "../src/pages/Home";
import UploadItem from "./pages/uploadItem";

import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/Header' element = {<Header/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='/uploadItem' element = {<UploadItem/>} />
        
      </Routes>
    </Router>
  );
}

export default App;