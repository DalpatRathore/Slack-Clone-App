import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import db from "./config";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot(snapShot =>
      setChannels(
        snapShot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Channel Youtube</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon></CreateIcon>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption
        Icon={InboxIcon}
        title="Mentions & Reactions"
      ></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title="Saved Items"></SidebarOption>
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title="Channel Browser"
      ></SidebarOption>
      <SidebarOption
        Icon={PeopleAltIcon}
        title="People & User Groups"
      ></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title="File Browser"></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title="Show Less"></SidebarOption>
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel"></SidebarOption>
      <hr />
      <SidebarOption
        Icon={AddIcon}
        addChannelOption
        title=" Add Channel"
      ></SidebarOption>
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id}></SidebarOption>
      ))}
    </div>
  );
};

export default Sidebar;
