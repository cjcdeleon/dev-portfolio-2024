import {LinkedIn, Email, Phone, GitHub} from "@mui/icons-material";
import {useGetEducationsQuery} from "../../app/apiSlice";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import type {PaletteMode} from "@mui/material";
import {Chip, IconButton} from "@mui/material";
import {Avatar} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import type {Dispatch, SetStateAction} from "react";

interface ToggleColorModeProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const contactList = () => {
    return [
        {link: "tel:0413201841", icon: <Phone />},
        {link: "mailto:cjcdeleon@gmail.com", icon: <Email />},
        {
            link: "https://www.linkedin.com/in/carlos-jaime-de-leon-a6771b2a/",
            icon: <LinkedIn />
        },
        {
            link: "https://github.com/cjcdeleon",
            icon: <GitHub />
        }
    ].map((item) => (
        <IconButton aria-label="redirect" onClick={(event) => (window.location.href = item.link)}>
            {item.icon}
        </IconButton>
    ));
};

function ToggleColorMode({mode, toggleColorMode}: ToggleColorModeProps) {
    return (
        <Box sx={{maxWidth: "32px"}}>
            <Button
                variant="text"
                onClick={toggleColorMode}
                size="small"
                aria-label="button to toggle theme"
                sx={{minWidth: "32px", height: "32px", p: "4px"}}
            >
                {mode === "dark" ? (
                    <WbSunnyRoundedIcon fontSize="small" />
                ) : (
                    <ModeNightRoundedIcon fontSize="small" />
                )}
            </Button>
        </Box>
    );
}
const logoStyle = {
    width: "140px",
    height: "auto",
    cursor: "pointer"
};

interface HeaderProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
    setSelectedMenu: Dispatch<SetStateAction<string>>;
}

export const Header = ({mode, toggleColorMode, setSelectedMenu}: HeaderProps) => {
    const response = useGetEducationsQuery();
    // function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: "transparent",
                    backgroundImage: "none",
                    mt: 2
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            borderRadius: "999px",
                            bgcolor:
                                theme.palette.mode === "light"
                                    ? "rgba(255, 255, 255, 0.4)"
                                    : "rgba(0, 0, 0, 0.4)",
                            backdropFilter: "blur(24px)",
                            maxHeight: 40,
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow:
                                theme.palette.mode === "light"
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)"
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0
                            }}
                        >
                            <Chip
                                icon={
                                    <Avatar
                                        alt="Carlos Jaime De Leon"
                                        src="https://media.licdn.com/dms/image/C5603AQHk8vA8yQf0Kg/profile-displayphoto-shrink_200_200/0/1592909412328?e=1723680000&amp;v=beta&amp;t=IL5A2kMnWv3P7_Ku2ys43jS7sYYvFm0SxRjNGo0IJwM"
                                        sx={{width: 56, height: 56}}
                                    />
                                }
                                label="Carlos Jaime De Leon"
                                color="primary"
                            />

                            <Box sx={{display: {xs: "none", md: "flex"}}}>
                                {["Highlights", "Experience", "Skills", "Education"].map((link) => (
                                    <MenuItem
                                        onClick={() => setSelectedMenu(link)}
                                        sx={{py: "6px", px: "12px"}}
                                    >
                                        <Typography variant="body2" color="text.primary">
                                            {link}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: "none", md: "flex"},
                                gap: 0.5,
                                alignItems: "center"
                            }}
                        >
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                            {contactList()}
                        </Box>
                        <Box sx={{display: {sm: "", md: "none"}}}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{minWidth: "30px", p: "4px"}}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "background.paper",
                                        flexGrow: 1
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1
                                        }}
                                    >
                                        <ToggleColorMode
                                            mode={mode}
                                            toggleColorMode={toggleColorMode}
                                        />
                                    </Box>
                                    {["Highlights", "Experience", "Skills", "Education"].map(
                                        (link) => (
                                            <MenuItem onClick={() => setSelectedMenu(link)}>
                                                {link}
                                            </MenuItem>
                                        )
                                    )}
                                    <Divider />
                                    {contactList()}
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};
