"use client";
import React, { useContext, useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";
import axios from "axios";
import { MyContext } from "../context";
import { showSuccessToast, showErrorToast } from "../utils/toasts/Toast";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const context = useContext(MyContext);
    if (!context) {
        throw new Error("LoginPage must be used within a MyProvider");
    }

    const { isLoginOpen, onLoginClose, setIsLoggedIn } = context;

    const handleSuccessClick = () => {
        showSuccessToast("Welcome! Dr. Nawaz Sharif");
    };

    const handleErrorClick = () => {
        showErrorToast("Invalid credentials!");
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/login", {
                email,
                password,
            });
            if (response.status === 200) {
                // alert("Login successful");
                handleSuccessClick();
                localStorage.setItem("isLoggedIn", "true");
                setIsLoggedIn(true);
                onLoginClose();
            }
        } catch (error) {
            handleErrorClick();
            setError("Invalid credentials");
        }
    };

    return (
        <Dialog
            open={isLoginOpen}
            onClose={onLoginClose}
            PaperProps={{
                sx: {
                    borderRadius: "16px",
                    boxShadow: 24,
                    width: "380px",
                    height: "380px",
                },
            }}
        >
            <DialogTitle
                sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#333",
                    textAlign: "center",
                    fontWeight: 600,
                    borderBottom: "1px solid #ddd",
                    padding: "16px 24px",
                    fontFamily: "Playwrite AT",
                }}
            >
                Login
            </DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "24px",
                }}
            >
                <DialogContentText
                    sx={{
                        textAlign: "center",
                        color: "#555",
                        mt: 1,
                    }}
                >
                    Only Admins can Log in.
                </DialogContentText>
                {error && (
                    <Typography color="error" sx={{ textAlign: "center" }}>
                        {error}
                    </Typography>
                )}
                <TextField
                    autoFocus
                    autoComplete="off"
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#ccc",
                            },
                            "&:hover fieldset": {
                                borderColor: "#47dec5",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#47dec5",
                            },
                        },
                    }}
                />
                <TextField
                    required
                    margin="dense"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#ccc",
                            },
                            "&:hover fieldset": {
                                borderColor: "#47dec5",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#47dec5",
                            },
                        },
                    }}
                />
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: "center",
                    padding: "16px",
                    borderTop: "1px solid #ddd",
                }}
            >
                <Button
                    onClick={onLoginClose}
                    sx={{
                        color: "#555",
                        "&:hover": {
                            backgroundColor: "#f1f1f1",
                        },
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleLogin}
                    variant="contained"
                    sx={{
                        backgroundColor: "#47dec5",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#1eb098",
                        },
                    }}
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
}
