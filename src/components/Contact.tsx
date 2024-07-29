import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface ContactProps {
    isContactOpen: boolean;
    onContactClose: () => void;
}

export default function Contact({
    isContactOpen,
    onContactClose,
}: ContactProps) {
    return (
        <Dialog
            open={isContactOpen}
            onClose={onContactClose}
            // PaperProps={{
            //     sx: {
            //         maxWidth: "500px", // Set a maximum width for the dialog
            //     },
            // }}
        >
            <DialogTitle
                sx={{
                    textAlign: "center",
                    mt: 4,
                    mb: 2,
                    // fontFamily: "Playwrite AT",
                    fontWeight: "bold",
                    // textDecoration: "underline",
                }}
            >
                For Online and Offline Consultation, Contact Us
                <IconButton
                    aria-label="close"
                    onClick={onContactClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                >
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">7980870882</Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                >
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                        drnawazsarif@gmail.com
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                >
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                        Bairgachi, Gazole, Malda, PIN- 732102
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                >
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                        Every Monday & Tuesday: 8 am to 12 pm & 4 pm to 8 pm
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
