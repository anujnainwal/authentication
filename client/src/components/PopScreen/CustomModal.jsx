import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import Style from "./assets/css/customModel.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ddd",
  boxShadow: 24,
  p: 2,
};
const CustomModal = ({ isOpen, deleteId, handleOpen, handleClose }) => {
  return createPortal(
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box component="h4">Are You Sure You want to Delete This Item?</Box>

          <IconButton onClick={handleClose}>
            <IoClose color="red" />
          </IconButton>
        </Box>
        {/* <Box component="div">Body</Box> */}
        <Box component="div">
          <Button variant="outlined" sx={{ margin: "0 10px" }}>
            Cancel
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>,
    document.getElementById("modal") // Change this to your desired root element ID
  );
};

export default CustomModal;
