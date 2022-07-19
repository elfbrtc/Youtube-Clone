import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Homepage from './components/Homepage';
import HomeSearchPage from './components/HomeSearchPage';
import {
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className="app">

    <Header/>
      
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/search/searchTerm" element={<HomeSearchPage/>}/>
        </Routes>
  
    </div>
    
  );
}

export default App;
