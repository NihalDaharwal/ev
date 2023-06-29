import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Container, Stack } from '@mui/material';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Image from 'next/image';
import avatar1 from "@/assets/images/avatar/avatar1.png";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "0.75rem",
    backgroundColor: "white",
    "&:hover": {
        backgroundColor: "white",
    },
    marginLeft: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(1),
        width: "40%",

    },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(0, 1, 0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        paddingRight: `calc(1em + ${theme.spacing(2.5)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

const drawerWidth = 240;

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#f3f2f7', boxShadow: 'none' }}
        >
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Here"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge
                            badgeContent={21}
                            color="badge"
                            sx={{
                                ...BadgeStyled,
                                bgcolor: "#d6e5f3",
                            }}
                        >
                            <NotificationsOutlinedIcon color="badge" fontSize="medium" />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge
                            badgeContent={53}
                            color="badge"
                            sx={{
                                ...BadgeStyled,
                                bgcolor: "#d6e5f3",
                            }}
                        >
                            <TextsmsOutlinedIcon color="badge" fontSize="medium" />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <Badge
                            badgeContent={15}
                            color="badge2"
                            sx={{
                                ...BadgeStyled,
                                bgcolor: "#dddee8",
                            }}
                        >
                            <CardGiftcardOutlinedIcon color="badge2" fontSize="medium" />
                        </Badge>

                    </IconButton>

                    <IconButton size="large"
                        aria-label="show 17 new notifications"
                        color="inherit">
                        <Badge
                            badgeContent={19}
                            color="badge3"
                            sx={{
                                ...BadgeStyled,
                                bgcolor: "#f5dce0",
                            }}
                        >
                            <SettingsOutlinedIcon color="badge3" fontSize="medium" />
                        </Badge>
                    </IconButton>
                </Box>

                <Box sx={{ flexGrow: 0.5 }} />
                <Stack direction="row" spacing={2} useFlexGap alignItems="center">
                    <p>
                        Hello, <strong>Samantha</strong>
                    </p>
                    <Avatar sx={{ width: "50px", height: "50px" }}>
                        <Image src={avatar1} width="50" height="50" />
                    </Avatar>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}


const BadgeStyled = {
    borderRadius: "20%",
    width: "40px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiBadge-badge": {
        fontSize: 8,
        padding: "2px",
        color: "#FFFF",
        border: "2px solid",
        borderColor: "#f3f2f7",
        borderRadius: "100px",
    },
}