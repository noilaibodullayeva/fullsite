import React from 'react'
import { AppBar, Toolbar, Typography, styled, Box, Menu, MenuItem } from '@mui/material';
import Badge from '@mui/material/Badge';
import PetsIcon from '@mui/icons-material/Pets';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Mail from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Avatar from '@mui/material/Avatar';
import avatrarimage from "./noila.jpg"
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    flex: "display",
    justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    width: "40%",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled(Box)(({ theme }) => ({
    color: "white",
    display: "none",
    gap: " 20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const User = styled(Box)(({ theme }) => ({
    color: "white",
    display: "flex",
    gap: " 10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))
function Navbar() {

    const [open, setOpen] = useState((false))

    return (
        <AppBar position='fixed' >
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    LAMA DEV
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' startIcon={<SearchIcon />} color={"text.primary"} /></Search>
                <Icons >
                    <Badge badgeContent={4} color="error" >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <CircleNotificationsIcon />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={avatrarimage}
                        alt='avatar'
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <User onClick={(e) => setOpen(true)} >
                    <Typography variant='span'>
                        John
                    </Typography>
                    <Avatar sx={{ width: 30, height: 30 }} src={avatrarimage} />
                </User>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar