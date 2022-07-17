import React from 'react';
import Avatar from '@mui/material/Avatar';

function VideoCard({image, title, channel, views, timestamp, channelImage}) {

    
  return (
    <div className='videoCard'>
        <img src={image} alt=""/>
        <div className="videoCard__info"></div>
        <Avatar className="video__avatar" alt={channel} src={channelImage}/>
        <div className='video_text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} {timestamp}</p>
        </div>

    </div>
  )
}

export default VideoCard