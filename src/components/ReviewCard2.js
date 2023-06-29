import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
const ReviewCard2 = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          width: 280,
          height: 220,
          backgroundColor: "white",
          position: "relative",
          boxShadow: "initial",
          mt: "20px",
          mb: "20px",
          padding: "20px",
        }}
      >
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>

            <Stack>
              <Typography variant="" color="black" fontSize="14px">
                {item.avtarname}
              </Typography>
              <Typography variant="" color="grey" fontSize="14px">
                {item.onlinedays}
              </Typography>
            </Stack>
          </Stack>
          <Stack width="90%" mt={2} boxSizing="border-box" overflow="hidden">
            <Typography textAlign="left" fontSize="14px">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} mt={1}>
            <Rating name="read-only" value={4} readOnly />
            <Typography>{item.rating}</Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            position: "absolute",
            right: "-65px",
            top: 30,
          }}
        >
          <Avatar
            sx={{
              width: "140px",
              height: "140px",
            }}
          >
            <Image src={item.image} alt="food" width="140" height="140" />
          </Avatar>
        </Stack>
      </Box>
    </>
  );
};

export default ReviewCard2;
