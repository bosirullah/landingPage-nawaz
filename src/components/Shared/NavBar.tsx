"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Bttn from "./buttons/LoginSignupBtn";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context";
import { showSuccessToast } from "../../utils/toasts/Toast";
import NestedList from "../ListPage";
import Image from "next/image";

const initialPages = [
    { label: "Home", path: "/" },
    { label: "About", path: "about" },
    { label: "Contact", path: "/" },
    { label: "Chambers", path: "chambers" },
];

const settings = ["Logout"];

function ResponsiveAppBar() {
    const context = useContext(MyContext);
    const router = useRouter();

    if (!context) {
        throw new Error("LoginPage must be used within a MyProvider");
    }

    const { isLoggedIn, setIsLoggedIn } = context;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePaths = (path: any) => {
        if (path === "about") {
            document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" });
        } else if (path === "chambers") {
            document
                .getElementById("chambers-section")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(path);
        }
    };

    const handleCloseUserMenu = (setting: any) => {
        setAnchorElUser(null);
        if (setting === "Logout") {
            handleLogout();
        }
    };

    const handleSuccessClick = () => {
        showSuccessToast("Logged out successfully!");
    };

    const handleLogout = () => {
        handleSuccessClick();
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        console.log("Logged out");
    };

    useEffect(() => {
        // Check local storage for login status
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus) {
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    const pages = isLoggedIn
        ? [...initialPages, { label: "Link", path: "/link" }]
        : initialPages;

    return (
        <AppBar position="sticky" sx={{ background: "white", margin: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src="/assets/logo.jpeg"
                                alt="Logo"
                                width={80}
                                height={80}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Link>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.label}
                                    onClick={() => handlePaths(page.path)}
                                >
                                    <Typography textAlign="center">
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            // display: { xs: "none", sm: "block" },
                            flexGrow: 60,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src="/assets/logo.jpeg"
                                alt="Logo"
                                width={80}
                                height={80}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Link>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page, index) =>
                            page.label === "Link" ? (
                                <NestedList key={index} />
                            ) : (
                                <Button
                                    key={page.label}
                                    onClick={() => handlePaths(page.path)}
                                    sx={{
                                        mx: 2,
                                        my: 2,
                                        color: "black",
                                        display: "block",
                                        "&:hover": {
                                            borderBottom: "2px solid black",
                                        },
                                    }}
                                >
                                    {page.label}
                                </Button>
                            )
                        )}
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {!isLoggedIn ? (
                            <Box>
                                {/* login button */}
                                <Bttn />
                            </Box>
                        ) : (
                            <Box sx={{ flexGrow: 0, mr: 4 }}>
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt="User Avatar"
                                            src="/assets/nawazSharif.jpeg"
                                        />
                                    </IconButton>
                                </Tooltip>

                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={() =>
                                                handleCloseUserMenu(setting)
                                            }
                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
