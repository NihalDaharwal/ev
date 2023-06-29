import React from "react";
import {
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 100
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: "0.75rem",
//   backgroundColor: "white",
//   "&:hover": {
//     backgroundColor: "white",
//   },
//   marginLeft: 0,
//   width: "100%",
//   display: "flex",
//   justifyContent: "flex-end",
//   [theme.breakpoints.up("sm")]: {
//     marginRight: theme.spacing(1),
//     width: "auto",
//   },
// }));
// const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
//   padding: theme.spacing(0, 1, 0, 1),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(0)})`,
//     paddingRight: `calc(1em + ${theme.spacing(2.5)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

const Searchbox = () => {
  return (
    <>
      {/* <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search> */}

      <TextField
        placeholder="Search Here"
        sx={{
          borderRadius: "3px",
          border: "none",
          // marginLeft: 'auto',
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          // "@media (min-width: 600px)": {
          //   width: "15%",
          // },
          // "@media (min-width: 992px)": {
          //   width: "23%",
          // },
          // "@media (min-width: 1200px)": {
          //   width: "38%",
          // },
          // "@media (min-width: 1440px)": {
          //   width: "50%",
          // },
          backgroundColor: "#ffff",
          padding: "5px",
        }}
        InputProps={{
          disableUnderline: false,
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),

          sx: {
            bgcolor: "white",
            color: "black",
            "& fieldset": { border: "none" },
          },
        }}
        inputProps={{
          style: {
            padding: 5,
          },
        }}
      />
    </>
  );
};

export default Searchbox;
