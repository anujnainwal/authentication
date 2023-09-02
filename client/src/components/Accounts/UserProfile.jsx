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
            src="https://assetsio.reedpopcdn.com/450-ced97u.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
            alt="userprofile"
            className="userProfilePic"
            style={{ width: 50, marginRight: 8,height:50 }}
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
