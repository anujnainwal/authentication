import { Box, Typography } from "@mui/material";
import React from "react";
import "./assets/css/userprofile.css";

const UserProfile = ({ handleProfileMenuOpen }) => {
  return (
    <>
      <Box
        onClick={handleProfileMenuOpen}
        className="profileSetting"
        sx={{ marginLeft: 2, cursor: "pointer" }}
      >
        <Box component="div">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="userprofile"
            className="userProfilePic"
            style={{ width: 50, marginRight: 8 }}
          />
        </Box>
        <Box>
          <Typography className="userName">Ada Wong</Typography>
          <Typography
            className=""
            component="p"
            sx={{ color: "grey", fontSize: 12 }}
          >
            fullStack Developer
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
