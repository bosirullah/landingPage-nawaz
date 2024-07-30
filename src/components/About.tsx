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
import { fadeIn } from "@/utils/motion";
import { useInView } from "@/utils/customHooks/useInView";
import Image from "next/image";

export default function AboutPage() {
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [setRef, inView] = useInView({ threshold: 0.1 });

    const handleAboutButttonClick = () => {
        router.push("/About");
    };

    const listItemStyles = () => ({
        display: "flex",
        alignItems: "center",
        py: 0,
        margin: 0,
        padding: 0,
        "&::before": {
            content: '""',
            display: "inline-block",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#9debdc",
            marginRight: "10px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)", // Adding shadow
        },
    });

    return (
        <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeIn("up", "between", 0.1, 0.75)}
            ref={setRef}
        >
            <Container id="about-section">
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ mb: 6, fontFamily: "Playwrite AT" }}
                >
                    About Me
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isSmallScreen ? "column" : "row",
                        alignItems: isSmallScreen ? "center" : "flex-start",
                        columnGap: "50px",
                    }}
                >
                    <Image
                        src="/assets/nawazSharif.jpeg"
                        alt="nawazImg"
                        width={580}
                        height={430}
                        style={{
                            width: isSmallScreen ? "85%" : "50%",
                            height: "420px",
                            objectFit: "cover",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                            maxHeight: "430px",
                            marginBottom: isSmallScreen ? 3 : 0,
                        }}
                    />
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                marginTop: 2,
                                textAlign: isSmallScreen ? "center" : "left",
                                fontSize: "40px",
                            }}
                        >
                            Dr. Nawaz Sarif
                        </Typography>
                        <Typography
                            align={isSmallScreen ? "center" : "left"}
                            sx={{ fontSize: "21px" }}
                        >
                            (General Homoeopathic Physician)
                        </Typography>
                        <Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: isSmallScreen
                                        ? "column"
                                        : "row",
                                    alignItems: "center",
                                    color: "grey",
                                    textAlign: isSmallScreen
                                        ? "center"
                                        : "left",
                                }}
                            >
                                B.H.M.S.(W.B.U.H.S)
                                {!isSmallScreen && (
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{ mr: 2 }}
                                    />
                                )}
                                {isSmallScreen && <br />}
                                Regd. No. - 34680 (WBCHM)
                            </Box>
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                marginTop: 3,
                                fontFamily: "Playwrite AT",
                                textAlign: isSmallScreen ? "center" : "left",
                            }}
                        >
                            Formerly Attached:
                        </Typography>
                        <Box
                            sx={{
                                color: "grey",
                                mx: 3,
                                textAlign: isSmallScreen ? "center" : "left",
                            }}
                        >
                            <List
                                sx={{
                                    // listStyleType: "disc",
                                    pl: isSmallScreen ? 2 : 0,
                                }}
                            >
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText primary="Metropolitan Homoeopathic Medical College & Hospital" />
                                </ListItem>
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText primary="SNPH (Annexure 2, IPGMER), Kolkata" />
                                </ListItem>
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText primary="I D & B G Hospital, Kolkata " />
                                </ListItem>
                                <ListItem sx={listItemStyles()}>
                                    <ListItemText primary="B. N. Bose Sub Divisional Hospital, Barrackpore" />
                                </ListItem>
                            </List>
                        </Box>

                        <Button
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
                        </Button>
                    </Box>
                </Box>
            </Container>
        </motion.div>
    );
}
