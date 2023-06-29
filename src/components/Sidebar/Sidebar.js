import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SubjectIcon from "@mui/icons-material/Subject";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Divider, Toolbar } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }} >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {[
            "Dashboard",
            "Order List",
            "Order Detail",
            "Customer",
            "Analytics",
            "Reviews",
            "Foods",
            "Foods Detail",
            "Customer Detail",
            "Calander",
            "Chat",
            "Wallet",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  {
                    [
                      <HomeIcon />,
                      <SubjectIcon />,
                      <InsertDriveFileOutlinedIcon />,
                      <SupervisorAccountOutlinedIcon />,
                      <AnalyticsOutlinedIcon />,
                      <CreateOutlinedIcon />,
                      <LocalCafeOutlinedIcon />,
                      <BorderColorOutlinedIcon />,
                      <PersonOutlineOutlinedIcon />,
                      <CalendarTodayOutlinedIcon />,
                      <SmsOutlinedIcon />,
                      <AccountBalanceWalletOutlinedIcon />,
                    ][index]
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
