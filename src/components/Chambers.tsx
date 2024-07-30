"use client";

import {
    Box,
    Button,
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";
import { useInView } from "@/utils/customHooks/useInView";
import ContactBtn from "./Shared/buttons/ContactBtn";
import FormDialogContact from "./Contact";
import { useState } from "react";
import Image from "next/image";

export default function ChambersPage() {
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [setRef, inView] = useInView({ threshold: 0.1 });
    const [showContact, setShowContact] = useState(false);

    const handleContactOpen = () => {
        setShowContact(true);
    };

    const handleContactClose = () => {
        setShowContact(false);
    };

    // const handleAboutButttonClick = () => {
    //     router.push("/Chambers");
    // };

    const listItemStyles = () => ({
        "&::before": {
            content: '""',
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#9debdc",
            marginRight: "10px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        },
    });

    return (
        <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeIn("down", "between", 0.1, 0.75)}
            ref={setRef}
        >
            <Container sx={{ mb: "100px" }} id="chambers-section">
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ my: 6, fontFamily: "Playwrite AT" }}
                >
                    Chambers
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isSmallScreen ? "column-reverse" : "row",
                        alignItems: isSmallScreen ? "center" : "flex-start",
                        columnGap: "50px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                marginTop: 3,
                                textAlign: isSmallScreen ? "center" : "left",
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            Address
                        </Typography>
                        <Typography mx={5} sx={{ fontSize: "18px", mt: 3 }}>
                            Bairgachi (Hatkhola), Village & P.O - Bairgachi, P.S
                            - Gazole, District - Malda, PIN - 732102, W.B
                            <br /> (Near Baigachi J A Shiksha Mission)
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                marginTop: 3,
                                textAlign: isSmallScreen ? "center" : "left",
                                textDecoration: "underline",
                                fontWeight: "bold",
                            }}
                        >
                            Visiting Time {isSmallScreen && <br />}(Every Monday
                            & Tuesday)
                        </Typography>
                        <Box
                            sx={{
                                color: "grey",
                                mx: 3,
                            }}
                        >
                            <List
                                sx={{
                                    pl: isSmallScreen ? 2 : 0,
                                    alignItems: isSmallScreen
                                        ? "center"
                                        : "left",
                                }}
                            >
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText
                                        primary="8 AM to 12 PM"
                                        sx={{}}
                                    />
                                </ListItem>
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText
                                        primary="4 PM to 8 PM"
                                        sx={{
                                            display: "inline-block",
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </Box>

                        {/* <Button
                            variant="contained"
                            onClick={handleAboutButttonClick}
                            sx={{
                                background: "#47dec5",
                                borderRadius: "20px",
                                color: "white",
                                textTransform: "none",
                                cursor: "pointer",
                                p: "10px 20px",
                                my: 3,
                                display: "flex",
                                alignSelf: isSmallScreen
                                    ? "center"
                                    : "flex-start",
                                mx: isSmallScreen ? "auto" : "0",
                                "&:hover": {
                                    background: "#1eb098",
                                },
                            }}
                        >
                            Read More
                        </Button> */}
                        <ContactBtn
                            handleContactOpen={handleContactOpen}
                            changeStyle={true}
                        />
                    </Box>
                    {/* <Box
                        component="img"
                        src="/assets/nawazSharif2.jpeg"
                        alt="nawazImg"
                        sx={{
                            width: isSmallScreen ? "70%" : "50%",
                            maxHeight: "400px",
                            objectFit: "cover",
                            borderRadius: "20px",
                            boxShadow: 5,
                            marginBottom: isSmallScreen ? 3 : 0,
                        }}
                    /> */}
                    <Image
                        src="/assets/nawazSharif2.jpeg"
                        alt="nawazImg"
                        priority
                        width={580}
                        height={430}
                        style={{
                            width: isSmallScreen ? "85%" : "55%",
                            objectFit: "cover",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                            maxHeight: "400px",
                            marginBottom: isSmallScreen ? 3 : 0,
                        }}
                    />
                </Box>
                {showContact && (
                    <FormDialogContact
                        isContactOpen={showContact}
                        onContactClose={handleContactClose}
                    />
                )}
            </Container>
        </motion.div>
    );
}
