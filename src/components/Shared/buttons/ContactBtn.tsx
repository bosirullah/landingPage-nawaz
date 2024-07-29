import { Button, useMediaQuery, useTheme } from "@mui/material";

export default function ContactBtn({ handleContactOpen, changeStyle }: any) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return !changeStyle ? (
        <Button
            variant="contained"
            size="large"
            sx={{
                background: "brown",
                "&:hover": { background: "#752e29" },
            }}
            onClick={handleContactOpen}
        >
            Contact Us
        </Button>
    ) : (
        <Button
            variant="contained"
            onClick={handleContactOpen}
            sx={{
                background: "#47dec5",
                borderRadius: "20px",
                color: "white",
                textTransform: "none",
                cursor: "pointer",
                p: "10px 20px",
                my: 3,
                display: "flex",
                alignSelf: isSmallScreen ? "center" : "flex-start",
                mx: isSmallScreen ? "auto" : "0",
                "&:hover": {
                    background: "#1eb098",
                },
            }}
        >
            Contact Us
        </Button>
    );
}
