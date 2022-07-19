import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Homepage = () => {
  return (
    <div className="app__page">
        <Sidebar/>
        <Content/>
    </div>
    
    
  )
}

export default Homepage