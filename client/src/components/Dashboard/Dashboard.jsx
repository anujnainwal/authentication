import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./assets/css/dashboard.css";
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
            <Paper elevation={6} className={`dashboardCount`}>
              <Box className={`topBanner${item.id}`}>
                <Box
                  sx={{
                    margin: "0",
                  }}>
                  <Typography variant="h3">{item.count}</Typography>
                  <span>{item.title}</span>
                </Box>
                <Box>2</Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </>
  );
};

export default Dashboard;
