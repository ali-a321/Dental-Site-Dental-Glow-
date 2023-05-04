import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import BookOnline from "./pages/BookOnline"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path= '/' element ={<Home />} />
        <Route path= '/book-online' element ={<BookOnline />} />
      </Routes>
     
    </div>
  );
}

export default App;
