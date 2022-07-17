import React from 'react'
import VideoCard from './VideoCard';
import '../style/Content.scss';
function Content() {
  return (
    <div className="content">
        <h2>Recommended</h2>
        <div className='content__videos'>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          
        </div>
    </div>
  )
}

export default Content