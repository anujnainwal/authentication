import React, { useState } from "react";
import {
  Drawer,
  Box,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { FaUpload } from "react-icons/fa"; // Using React Icons for upload icon
import "./assets/css/side.css";

const SideDrawer = ({ opens, anchor, dataId, closeHandle }) => {
  const categories = ["Mobile", "Desktop", "Printer"];
  const brands = ["Brand A", "Brand B", "Brand C"]; // Sample brands - replace with actual data
  const [categoryName, setCategoryName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState(null); // State to store uploaded image

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <>
      <Drawer open={opens} anchor={anchor} onClose={() => closeHandle(!opens)}>
        <Box sx={{ width: 400, padding: "20px" }}>
          <Box sx={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}>
            Product Name: {dataId}
          </Box>
          <Divider />
          <Box component="div" sx={{ padding: "20px" }}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <FormControl
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}>
              <InputLabel id="category-label">Select Category</InputLabel>
              <Select
                labelId="category-label"
                value={categoryName}
                onChange={handleCategoryChange}>
                {categories.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}>
              <InputLabel id="brand-label">Select Brand</InputLabel>
              <Select
                labelId="brand-label"
                value={brandName}
                onChange={handleBrandChange}>
                {brands.map((name, index) => (
                  <MenuItem key={index} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              type="number"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}>
              <label htmlFor="upload-image">
                <input
                  type="file"
                  accept="image/*"
                  id="upload-image"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<FaUpload />}>
                  Upload Image
                </Button>
              </label>
              {image && (
                <Typography sx={{ marginLeft: "10px" }}>
                  {image.name}
                </Typography>
              )}
            </Box>
            <Button variant="contained" fullWidth>
              Update Product
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
