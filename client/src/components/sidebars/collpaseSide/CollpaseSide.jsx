import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const CollpaseSide = ({ isExpand, text, data }) => {
  return (
    <Collapse in={isExpand} timeout="auto" unmountOnExit>
      {data.map((item, index) => {
        return (
          <List key={index}>
            <NavLink to={`${item.path}`}>
              <Tooltip title={item.title} placement="top-start">
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Tooltip>
            </NavLink>
          </List>
        );
      })}
    </Collapse>
  );
};

export default CollpaseSide;
