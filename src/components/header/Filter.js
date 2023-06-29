import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Stack } from "@mui/material";
const Filter = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        textAlign="left"
        mx={0}
      >
        <CalendarTodayOutlinedIcon />
        <div>
          <p> Filter Periode</p>
          <small>17april2020-21may2020</small>
        </div>
        <ArrowDropDownOutlinedIcon />
      </Stack>
    </>
  );
};

export default Filter;
