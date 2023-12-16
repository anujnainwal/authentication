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
  Menu,
  Autocomplete,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

import { FaRegEdit, FaRegEye, FaTrash } from "react-icons/fa";
import SideDrawer from "../ProductUpdate/SideDrawer";
import { useNavigate } from "react-router-dom";
import Style from "../assets/css/products.module.css";
import CustomModal from "../../PopScreen/CustomModal";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
const ProductList = ({ data, onEdit, onDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Initial rows per page value
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = React.useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState(null);
  let navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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

  //handleEdit
  const openDrawer = (id) => {
    setProductId(id);
    setIsOpen(!isOpen);
  };

  const addProduct = () => {
    navigate("/products/createProduct");
  };

  const handleOpenDeleteBox = (id) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      {isOpen && (
        <SideDrawer
          opens={isOpen}
          anchor="right"
          dataId={productId}
          closeHandle={setIsOpen}
        />
      )}
      <Box
        sx={{
          margin: "0em 0 1.5em 0",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Typography>Product List</Typography>
        <Button variant="contained" onClick={addProduct}>
          Add product
        </Button>
      </Box>
      {isDeleteOpen && (
        <CustomModal
          isOpen={isDeleteOpen}
          handleOpen={handleOpenDeleteBox}
          handleClose={handleDeleteClose}
          deleteId={deleteId}
          setIsDeleteOpen={setIsDeleteOpen}
        />
      )}

      <TableContainer component={Paper}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1em 1em",
          }}>
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Box>
          <Box component="div">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              Download
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem>PDF</MenuItem>

              <MenuItem>Excel</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={Style.columnCenter}>S.No</TableCell>
              <TableCell className={Style.columnCenter}>Product Name</TableCell>
              <TableCell className={Style.columnCenter}>Categories</TableCell>
              <TableCell className={Style.columnCenter}>Brand</TableCell>
              <TableCell className={Style.columnCenter}>Price</TableCell>
              <TableCell className={Style.columnCenter}>Quantity</TableCell>
              <TableCell className={Style.columnCenter}>Created By</TableCell>
              <TableCell className={Style.columnCenter}>Access Level</TableCell>
              <TableCell className={Style.columnCenter}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((item, index) => (
              <TableRow key={index} sx={{ textAlign: "center" }}>
                <TableCell className={Style.columnCenter}>{item.id}</TableCell>
                <TableCell>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}>
                    <span>
                      <img
                        src={`${item.productImage}`}
                        style={{ width: "30px", objectFit: "cover" }}
                      />
                    </span>
                    <span>
                      <Typography variant="body1">
                        {item.productName}
                      </Typography>
                    </span>
                  </Box>
                </TableCell>
                <TableCell className={Style.columnCenter}>
                  {item.category}
                </TableCell>
                <TableCell className={Style.columnCenter}>
                  {item.brand}
                </TableCell>
                <TableCell className={Style.columnCenter}>
                  {item.price}
                </TableCell>
                <TableCell className={Style.columnCenter}>{item.qty}</TableCell>
                <TableCell className={Style.columnCenter}>
                  {item.createdBy}
                </TableCell>
                <TableCell className={Style.columnCenter}>
                  <div className={Style.admin}>{item.accessLevel}</div>
                </TableCell>
                <TableCell>
                  <IconButton aria-label="view">
                    <FaRegEye color="#4681f4" className={Style.actionIcon} />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    onClick={() => openDrawer(index)}>
                    <FaRegEdit color="#5dbea3" className={Style.actionIcon} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleOpenDeleteBox(item.id)}>
                    <FaTrash color="#ED0800" className={Style.actionIcon} />
                  </IconButton>
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
    </>
  );
};

export default ProductList;
