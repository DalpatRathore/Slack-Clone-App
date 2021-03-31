import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        ></Avatar>
        <AccessTimeIcon></AccessTimeIcon>
      </div>
      <div className="header__center">
        <SearchIcon></SearchIcon>
        <input
          type="text"
          className="header__input"
          placeholder="Search for Channel"
        />
      </div>
      <div className="header__right">
        <HelpOutlineIcon></HelpOutlineIcon>
      </div>
    </div>
  );
};

export default Header;
