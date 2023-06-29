import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Badge, Stack } from "@mui/material";

const BadgeComponent = () => {
  return (
    <>
      <Stack direction="row" spacing={4} useFlexGap alignItems="center">
        <Badge
          badgeContent={21}
          color="badge"
          sx={{
            borderRadius: "20%",
            bgcolor: "#d6e5f3",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            py: 2,
            "& .MuiBadge-badge": {
              fontSize: 8,
              padding: "2px",
              // minWidth: 0,
              color: "#FFFF",
              border: "2px solid",
              borderRadius: "100px",
            },
          }}
        >
          <NotificationsOutlinedIcon color="badge" fontSize="medium" />
        </Badge>

        <Badge
          badgeContent={53}
          color="badge"
          sx={{
            borderRadius: "20%",
            bgcolor: "#d6e5f3",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            py: 2,
            "& .MuiBadge-badge": {
              fontSize: 8,
              padding: "2px",
              color: "#FFFF",
              border: "2px solid",
              borderRadius: "100px",
            },
          }}
        >
          <TextsmsOutlinedIcon color="badge" fontSize="medium" />
        </Badge>

        <Badge
          badgeContent={15}
          color="badge2"
          sx={{
            borderRadius: "20%",
            bgcolor: "#dddee8",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            py: 2,
            "& .MuiBadge-badge": {
              fontSize: 8,
              padding: "2px",
              color: "#FFFF",
              border: "2px solid",
              borderRadius: "100px",
            },
          }}
        >
          <CardGiftcardOutlinedIcon color="badge2" fontSize="medium" />
        </Badge>

        <Badge
          badgeContent={19}
          color="badge3"
          sx={{
            borderRadius: "20%",
            bgcolor: "#f5dce0",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            py: 2,
            "& .MuiBadge-badge": {
              fontSize: 8,
              padding: "2px",
              color: "#FFFF",
              border: "2px solid",
              borderRadius: "100px",
            },
          }}
        >
          <SettingsOutlinedIcon color="badge3" fontSize="medium" />
        </Badge>
      </Stack>
    </>
  );
};

export default BadgeComponent;
