import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import Sidebar from "@/components/Sidebar/Sidebar";

const S = () => {
  return (
    <div>
      {/* <div>
          <Image
            src={logo}
            alt="logo"
            width="30px"
            height="30px"
          />
        </div> */}

      <Sidebar />
    </div>
  );
};

export default S;
