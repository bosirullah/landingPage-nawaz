import { Box } from "@mui/material";

export default function LocationMap() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
            }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.588036508943!2d88.07909847483695!3d25.183384532261023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fae7007f10ba49%3A0x32b5cb80f7cf22ff!2sDr.%20Nawaz%20Sarif!5e0!3m2!1sen!2sin!4v1721491334091!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
    );
}
