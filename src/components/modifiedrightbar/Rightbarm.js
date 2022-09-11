import React from 'react'
import person1  from '../../assets/person1.jpg'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import './Rightbarm.css'
import {
  RssFeed,
 Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";





const Rightbarm = () => {
  return (
    <div className='rightbarmcontainer'>
      <div className='top'> 
     <p><span>Jake</span> and <span>2 others</span> have birthdays today</p>
     </div>
    <div className='second'>
      <img src={person4} />
   <img src={person3}/>
    </div>
    <div className='third'>
       <p className='online'>Online friends</p>

       <div className='onlinefriends'>
        <AccessibilityNewRoundedIcon className="icon" />
        <p>Jake</p>
       </div>

       <div className='onlinefriends'>
        <AccessibilityNewRoundedIcon className="icon" />
        <p>micheal</p>
       </div>

       <div className='onlinefriends'>
        <AccessibilityNewRoundedIcon className="icon" />
        <p>tony</p>
       </div>

       <div className='onlinefriends'>
        <AccessibilityNewRoundedIcon className="icon" />
        <p>hawk</p>
       </div>


      </div>


      <div className="sidebar">
           
        </div>
         <div className='sidebar2'>
          <p className='n'>Menu</p>
         <div className="sidebaritem2"> <RssFeed id="sidebarIcon" /> <p></p>Feed</div>
           <div className="sidebaritem2"><Chat id="sidebarIcon" /> <p></p>Chats</div>
           <div className="sidebaritem2"><PlayCircleFilledOutlined id="sidebarIcon" /><p></p>Videos</div>
           <div className="sidebaritem2"><Group id="sidebarIcon" /><p></p>Group</div>
           <div className="sidebaritem2"><Bookmark id="sidebarIcon" /><p></p>Bookmarks</div>
           <div className="sidebaritem2"> <HelpOutline id="sidebarIcon" /><p></p>Questions</div>
           <div className="sidebaritem2"><WorkOutline id="sidebarIcon" /><p></p>jobs</div>
           <div className="sidebaritem2">    <Event id="sidebarIcon" /><p></p>Events</div>
           <div className="sidebaritem2"><School id="sidebarIcon" /><p></p>Courses</div>
         </div>

      </div>
  )
}

export default Rightbarm