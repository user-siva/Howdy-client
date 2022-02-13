import "./sidebar.css"
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
import {Users} from "../../dummyData"
import CloseFriends from "../closeFriends/CloseFriends";

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebaListItem">
                       <RssFeed className="sidebarIcon"/>
                       <span className="sidebarText">Feeds</span>
                   </li>
                   <li className="sidebaListItem">
                       <Chat className="sidebarIcon"/>
                       <span className="sidebarText">Chats</span>
                   </li>
                   <li className="sidebaListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarText">Videos</span>
                   </li>
                   <li className="sidebaListItem">
                       <Group className="sidebarIcon"/>
                        <span className="sidebarText">Groups</span>
                   </li>
                   <li className="sidebaListItem">
                       <Bookmark className="sidebarIcon"/>
                        <span className="sidebarText">Bookmarks</span>
                   </li>
                   <li className="sidebaListItem">
                       <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarText">Questions</span>
                   </li>
                   <li className="sidebaListItem">
                       <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarText">Jobs</span>
                   </li>
                   <li className="sidebaListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarText">Events</span>
                   </li>
                   <li className="sidebaListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarText">Courses</span>
                   </li>
               </ul>
               <button className="sidebarBtn">Show more..</button>
               <hr className="sidebarHr" />
               <ul className="sidebarFriendList">
                   {Users.map((u) => (
                       <CloseFriends key={u.id} user={u} />
                   ))}
               </ul>
           </div>
        </div>
    );
}

export default Sidebar;