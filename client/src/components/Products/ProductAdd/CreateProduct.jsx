import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  TextareaAutosize,
  Button,
} from "@mui/material";
// import { RiShoppingCart2Line } from "react-icons/ri"; // You can import an icon from react-icons library

const CreateProduct = () => {
  return (
    <>
      <Box component="div" sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Product Add</Typography>{" "}
        <Typography variant="body1">Create New Product</Typography>
      </Box>
      <Box
        component="div"
        sx={{
          padding: 2,
          background: "#FAF9F9",
          display: "flex",
          flexWrap: "wrap",
        }}>
        <form style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TextField
            label="Product Name"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for product */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Category Name"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for category */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Brand Name"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for brand */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Minimum Quantity"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for quantity */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for quantity */}
                </InputAdornment>
              ),
            }}
          />
          <TextareaAutosize
            placeholder="Additional Information"
            minRows={5}
            style={{
              width: "calc(100% - 40px)",
              margin: "0px 20px 30px 20px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />{" "}
          <TextField
            label="Quantity"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for quantity */}
                </InputAdornment>
              ),
            }}
          />{" "}
          <TextField
            label="Quantity"
            variant="outlined"
            sx={{ margin: "0px 20px 30px 20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <RiShoppingCart2Line /> Icon for quantity */}
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{ margin: "0px 20px 30px 20px", flex: "1 1 100%" }}>
            Save Product
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateProduct;
