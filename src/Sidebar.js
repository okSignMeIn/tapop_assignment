import React, { useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click === true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  if (click === true) {
    return (
      <div className="sidebar">
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon size="inherit" />
        </IconButton>
        <List>
            <ListItemButton>
                Sample Button 1
            </ListItemButton>
            <ListItemButton>
            Sample Button 2
            </ListItemButton>
            <ListItemButton>
            Sample Button 3
            </ListItemButton>
            <ListItemButton>
            Sample Button 4
            </ListItemButton>
            <ListItemButton>
                Sample Button 5
            </ListItemButton>
            <ListItemButton>
                Sample Button 6
            </ListItemButton>
            <ListItemButton>
                Sample Button 7
            </ListItemButton>
            <ListItemButton>
                Sample Button 8
            </ListItemButton>
            <ListItemButton>
                Sample Button 9
            </ListItemButton>
            <ListItemButton>
                Sample Button 10
            </ListItemButton>
        </List>
      </div>
    );
  }
  return (
    <div className="sidebar">
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon size="inherit" />
      </IconButton>
    </div>
  );
}

export default Sidebar;
