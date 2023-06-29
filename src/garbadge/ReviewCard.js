import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import food from "../assets/images/food.png";
import Image from "next/image";
const ReviewCard = () => {
  return (
    <>
      <Card sx={{ width: 300, height: 200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     {/* <MoreVertIcon /> */}
          //     <HomeIcon />
          //   </IconButton>
          // }
          title="Jons Sena"
          subheader="2 days ago"
        />
        <CardContent>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </CardContent>
        <Rating
          name="read-only"
          value={4}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Stack direction="row" spacing={2}>
          <Rating name="read-only" value={4} readOnly />
          <Typography>4.5</Typography>
        </Stack>
      </Card>

      {/* <Stack sx={{ position: "relative" }}>
            <Image src={food} alt="logo" width="100" height="100" />
          </Stack> */}

      {/* 
      <CardMedia
        component="picture"
        height="140"
        width="100"
        
      >
        <Image src={food} alt="logo" width="100" height="100" />
      </CardMedia> */}
    </>
  );
};

export default ReviewCard;
