"use client";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FormDialogContact from "./Contact";
import ContactBtn from "./Shared/buttons/ContactBtn";

export default function Home() {
    const [showContact, setShowContact] = useState(false);

    const handleContactOpen = () => {
        setShowContact(true);
    };

    const handleContactClose = () => {
        setShowContact(false);
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                height: "800px",
                alignItems: "center", // Center the content vertically
                overflow: "hidden", // Prevent overflow if the content exceeds the container size
                px: 4,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/assets/background2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.6,
                    zIndex: -1, // Ensure the background image stays behind the content
                }}
            />
            <Box sx={{ zIndex: 1, textAlign: "center" }}>
                <Typography
                    variant="h1"
                    maxWidth="1200px"
                    sx={{
                        color: "white",
                        fontSize: "3.5rem ",
                        fontWeight: "bold",
                    }}
                >
                    Dr. Nawaz&apos;s Homoeopathy Health Care
                </Typography>
                <Typography
                    maxWidth="600px"
                    sx={{ my: 6, mx: "auto", color: "white", fontSize: "20px" }}
                >
                    &quot;Experience holistic healing with homeopathy – gentle,
                    natural, and personalized care for your well-being.&quot;
                </Typography>
                <ContactBtn handleContactOpen={handleContactOpen} />
            </Box>
            {showContact && (
                <FormDialogContact
                    isContactOpen={showContact}
                    onContactClose={handleContactClose}
                />
            )}
        </Container>
    );
}
