import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const CollpaseSide = ({ isOpen, text, data }) => {
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      {data.map((item, index) => {
        return (
          <List key={index}>
            <ListItemButton>
              <ListItemIcon>
               {item.icon} 
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </List>
        );
      })}
    </Collapse>
  );
};

export default CollpaseSide;
