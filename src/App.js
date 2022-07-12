import React from 'react';
import './style/App.scss';
import Content from './components/Content';
import Header from './components/Header';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__page'>
        <Sidebar/>
        <Content/>

      </div>


    </div>
  );
}

export default App;
