import React from "react";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./assets/css/dashboard.css";
import { FaUser, FaUserCheck, FaFileAlt, FaRegFile } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Charts from "../Charts/Charts";
const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Bob", age: 35 },
  { id: 5, name: "Bob", age: 35 },
];

const Dashboard = () => {
  const dashboardCount = [
    {
      id: 1,
      title: "Customer",
      count: 100,
    },
    {
      id: 2,
      title: "Supplies",
      count: 100,
    },
    {
      id: 3,
      title: "Purchase Invoice",
      count: 100,
    },
    {
      id: 4,
      title: "Sale Invoice",
      count: 100,
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* The product category */}
      <Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {dashboardCount.map((item, index) => {
          return (
            <Paper
              elevation={6}
              className={`dashboardCount`}
              sx={{ marginBottom: 5 }}
              key={index}>
              <Box className={`topBanner${item.id}`}>
                <Box
                  sx={{
                    margin: "0",
                  }}>
                  <Typography variant="h4">{item.count}</Typography>
                  <span>{item.title}</span>
                </Box>
                <Box>
                  {item.id === 1 && <FaUser className={`icons${item.id}`} />}
                  {item.id === 2 && (
                    <FaUserCheck className={`icons${item.id}`} />
                  )}
                  {item.id === 3 && <FaFileAlt className={`icons${item.id}`} />}
                  {item.id === 4 && <FaRegFile className={`icons${item.id}`} />}
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box component={Paper} elevation={3}>
            <Charts />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <>
            <TableContainer
              component={Paper}
              elevation={3}
              sx={{ height: 400 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f5f5f5",
                }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "10px",
                    padding: "8px",
                  }}>
                  Recent Product Add
                </Typography>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}>
                  <BsThreeDotsVertical />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}>
                  <Link to="/productList">
                    <MenuItem>Products List</MenuItem>
                  </Link>
                  <Link to="/home/products/createProduct">
                    <MenuItem>Add Product</MenuItem>
                  </Link>
                </Menu>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
