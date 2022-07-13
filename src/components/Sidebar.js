import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SidebarRow from './SidebarRow';
import '../style/Sidebar.scss';


function Sidebar() {
  return (
    <div className="sidebar">
    <SidebarRow selected Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={WhatshotIcon} title="Trending" />
    <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
    <hr/>
    <SidebarRow Icon={VideoLibraryIcon} title="Library" />
    <SidebarRow Icon={HistoryIcon} title="History" />
    <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
    <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
    <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked Video" />
    <SidebarRow Icon={ExpandMore} title="Show more" />
    <hr/>







    </div>

    
  )
}

export default Sidebar