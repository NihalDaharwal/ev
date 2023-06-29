import { Avatar, Stack } from "@mui/material";
import React from "react";
import avatar1 from "@/assets/images/avatar/avatar1.png";
import Image from "next/image";

const Avtaar = () => {
  return (
    <>
      <Stack direction="row" spacing={2} useFlexGap alignItems="center">
        <p>
          Hello, <strong>Samantha</strong>
        </p>
        <Avatar sx={{ width: "50px", height: "50px" }}>
          <Image src={avatar1} width="50" height="50" />
        </Avatar>
      </Stack>
    </>
  );
};

export default Avtaar;
