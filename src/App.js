import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Homepage from './components/Homepage';
import {
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>

    <Header/>
      
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/search"/>
        </Routes>
  
    </>
    
  );
}

export default App;
