import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  TablePagination,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const ProductList = ({ data, onEdit, onDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Initial rows per page value

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0); // Reset to the first page when changing rows per page
  };

  const dataToShow = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <TableContainer component={Paper}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1em 1em",
          }}>
          <Box>1</Box>
          <Box>2</Box>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Access Level</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column1}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10]} // Only show 5 and 10 as row options
      />
    </div>
  );
};

export default ProductList;
