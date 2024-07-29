import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
    const mainLinks = ["Home", "About", "Contact", "Chambers"];

    return (
        <Box
            sx={{
                backgroundColor: "#cce9ed",
                color: "black",
                padding: "50px 0",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            <Image
                                src="/assets/logo.jpeg"
                                alt="Logo"
                                width={80}
                                height={80}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    borderRadius: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Your trusted homeopathic physician for holistic and
                            natural healing.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ textDecoration: "underline" }}
                        >
                            <strong>Main</strong>
                        </Typography>
                        {mainLinks.map((link, index) => (
                            <Typography key={index} marginBottom="10px">
                                <Link
                                    href={`#${link.toLowerCase()}`}
                                    color="inherit"
                                    underline="hover"
                                    marginBottom="10px"
                                >
                                    {link}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ textDecoration: "underline" }}
                        >
                            <strong>Visiting Hours</strong>
                        </Typography>
                        <Typography marginBottom="10px">
                            (Every Monday and Tuesday)
                        </Typography>
                        <Typography marginBottom="10px">
                            8 AM to 12 PM
                        </Typography>
                        <Typography marginBottom="10px">
                            4 PM to 8 PM
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={3} alignContent="center">
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ textDecoration: "underline" }}
                        >
                            <strong>Contact Information</strong>
                        </Typography>
                        <Typography marginBottom="10px">
                            Phone: 7980870882
                        </Typography>
                        <Typography marginBottom="10px">
                            Email: drnawazsarif@gmail.com
                        </Typography>
                        <Typography marginBottom="10px">
                            Address: Bairgachi (Hatkhola), Village & P.O -
                            Bairgachi, P.S - Gazole, District - Malda, PIN -
                            732102, W.B
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 5,
                    }}
                >
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Facebook />
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Twitter />
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Instagram />
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <LinkedIn />
                    </Link>
                </Box>
                <Box
                    sx={{
                        textAlign: "center",
                        mt: 4,
                        borderTop: "1px solid #444",
                        pt: 2,
                    }}
                >
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Dr. Nawaz Sarif. All
                        rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
