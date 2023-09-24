import {
  Box,
  Collapse,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineDashboard, AiOutlineEdit } from "react-icons/ai";
import {
  MdExpandLess,
  MdExpandMore,
  MdSystemUpdateAlt,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { RxCube } from "react-icons/rx";
import DashboardLogo from "../../assets/commonLogo.png";
import CollpaseSide from "./collpaseSide/CollpaseSide";
import { NavLink, useLocation } from "react-router-dom";
const Sidebars = ({
  Drawer,
  theme,
  DrawerHeader,
  open,
  handleDrawerClose,
  children,
}) => {
  let [isExpand, setIsExpand] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const menuItemExpand = () => {
    setIsExpand(!isExpand);
  };
  let productCreate = [
    {
      id: 1,
      title: "Product Create",
      icon: <AiOutlineEdit fontSize={20} />,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img
              src={DashboardLogo}
              alt="dashbord"
              width={150}
              style={{ textAlign: "left !important" }}
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltl" ? (
                "<ChevronRightIcon />"
              ) : (
                <BsArrowLeftCircle />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink to="/">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    <AiOutlineDashboard fontSize={25} />
                  </ListItemIcon>

                  <ListItemText
                    primary="Dashboard"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={menuItemExpand}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <RxCube fontSize={25} />
                </ListItemIcon>

                <ListItemText
                  primary="Products"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              <CollpaseSide
                isExpand={isExpand}
                text="update"
                data={productCreate}
              />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Sidebars;
