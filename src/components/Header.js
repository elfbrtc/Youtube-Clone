import React from 'react';
import '../style/Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>

        
        <MenuIcon/>
        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/800px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
        
        </div>
        <div className='header__input'>
          <input type="text" placeholder='Search'/>
          <SearchIcon className='header__inputButton'/>
        </div>
        
        <div className='header__icons'>
          <VideoCallIcon className='header__icon'/>
          <AppsIcon className='header__icon'/>
          <NotificationsIcon className='header__icon'/>
          <Avatar alt= "Elif Barutcu" src="https://productimages.hepsiburada.net/s/108/1500/110000051496084.jpg"/>
        </div>
        
    </div>
  )
}

export default Header