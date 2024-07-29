"use client";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import LoginPage from "../../../app/login/page";
import { MyContext } from "../../../context";

export default function Bttn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const context = useContext(MyContext);
    if (!context) {
        throw new Error("LoginPage must be used within a MyProvider");
    }

    const { setIsLoginOpen } = context;

    const handleLoginOpen = () => {
        setIsLoginOpen(true);
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    background: "#47dec5",
                    color: "white",
                    textDecoration: "none",
                    "&:hover": { background: "#36baa4" },
                }}
                onClick={handleLoginOpen}
            >
                Login
            </Button>
            <LoginPage />
        </>
    );
}
