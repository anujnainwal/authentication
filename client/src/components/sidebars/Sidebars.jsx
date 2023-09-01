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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import DashboardLogo from "../../assets/commonLogo.png";
import CollpaseSide from "./collpaseSide/CollpaseSide";
import { NavLink } from "react-router-dom";
const Sidebars = ({ Drawer, theme, DrawerHeader, open, handleDrawerClose ,children}) => {
  let [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  let productCreate = [
    {
      id: 1,
      title: "Product Create",
      // icon: <RxCube />
    },
    {
      id: 2,
      title: "Product Edit",
      // icon: <RxCube />
    },
    {
      id: 3,
      title: "Product Delete",
      // icon: <RxCube />
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
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
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
              >
                <NavLink to="/products">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <RxCube fontSize={25} />
                  </ListItemIcon>

                  <ListItemText
                    primary="Products"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </NavLink>
                {isOpen ? (
                  <MdExpandLess onClick={handleClick} />
                ) : (
                  <MdExpandMore onClick={handleClick} />
                )}
              </ListItemButton>

              <CollpaseSide
                isOpen={isOpen}
                text="update"
                data={productCreate}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
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
