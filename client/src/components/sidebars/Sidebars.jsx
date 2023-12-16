import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, { useState, memo } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineEdit } from "react-icons/ai";
import { RxCube } from "react-icons/rx";
import DashboardLogo from "../../assets/commonLogo.png";
import CollpaseSide from "./collpaseSide/CollpaseSide";
import { NavLink, useLocation } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import "./assets/css/sidebars.css";
const Sidebars = memo(
  ({ Drawer, theme, DrawerHeader, open, handleDrawerClose, children }) => {
    let [isExpand, setIsExpand] = useState(false);
    const location = useLocation();

    const menuItemExpand = () => {
      setIsExpand(!isExpand);
    };
    let productCreate = [
      {
        id: 1,
        title: "Product List",
        path: "/products/productList",
        icon: <FaClipboardList fontSize={20} />,
      },
      {
        id: 2,
        title: "Product Create",
        path: "/products/createProduct",
        icon: <AiOutlineEdit fontSize={20} />,
      },
    ];

    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer variant="permanent" open={open} anchor="left">
            <DrawerHeader>
              <img
                src={DashboardLogo}
                alt="dashbord"
                width={150}
                style={{ textAlign: "left !important" }}
              />
              <IconButton onClick={handleDrawerClose}>
                {open ? "close" : "open"}
                {/* {theme.direction === "ltl" ? (
                  "<ChevronRightIcon />"
                ) : (
                  <BsArrowLeftCircle />
                )} */}
              </IconButton>
              {open ? true : false}
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <NavLink to="/home/dashboard">
                  <ListItemButton
                    className={`${
                      location.pathname === "/home/dashboard" ? "active" : ""
                    }`}
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
                      <AiOutlineDashboard
                        fontSize={25}
                        color={`${
                          location.pathname === "/home/dashboard" ? "white" : ""
                        }`}
                      />
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
                  className={`${
                    location.pathname === "/home/products" ? "active" : ""
                  }`}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    <RxCube
                      fontSize={25}
                      onClick={menuItemExpand}
                      color={`${
                        location.pathname === "/home/products" ? "#fff" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Products"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  <IconButton
                    sx={{ display: { sm: "none", md: "block" } }}
                    onClick={menuItemExpand}>
                    {open === true && (
                      <>
                        {isExpand ? (
                          <MdExpandLess
                            color={`${
                              location.pathname === "/home/products"
                                ? "red"
                                : ""
                            }`}
                          />
                        ) : (
                          <MdExpandMore
                            color={`${
                              location.pathname === "/home/products"
                                ? "#fff"
                                : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </IconButton>
                </ListItemButton>
                <CollpaseSide
                  isExpand={isExpand}
                  text="update"
                  data={productCreate}
                />

                <NavLink to="/home/categories">
                  <Tooltip title="categioes">
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      className={`${
                        location.pathname === "/home/categories" ? "active" : ""
                      }`}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}>
                        <BiCategoryAlt
                          fontSize={25}
                          color={`${
                            location.pathname === "/home/categories"
                              ? "#fff"
                              : ""
                          }`}
                        />
                      </ListItemIcon>

                      <ListItemText
                        primary="Category"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </>
    );
  }
);

export default Sidebars;
