// AboutDetails.tsx
// "use client";

import React from "react";
import {
    Box,
    Container,
    Typography,
} from "@mui/material";

const Page = () => {
    return (
        <Container>
            <Box mt={4} mb={4}>
                <Typography variant="h3" align="center" sx={{ mb: 6,fontFamily: "Playwrite AT" }}>
                    About Dr. Nawaz Sarif
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "20px"}}>
                    I am Dr. Nawaz Sarif, a homeopathic doctor with a BHMS degree from Metropolitan Homoeopathic Medical College and Hospital, Kolkata, under The West Bengal University of Health Sciences. My education has provided me with a comprehensive understanding of homeopathic practice, supplemented by hands-on experience in patient care.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "20px"}}>
                    During my tenure at B.N. Bose Sub Divisional Hospital, Barrackpore, Kolkata, I assisted in various medical procedures and gained practical experience. As part of my rotatory internship, I was posted in the Surgery and Gynecology & Obstetrics departments at Sambhunath Pandit Hospital (Annexure 2, IPGMER), Kolkata. Additionally, I had the opportunity to work at Beleghata (ID) General Hospital, Kolkata.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "20px"}}>
                    I have actively participated in numerous seminars at both national and state levels, enhancing my knowledge and skills. With extensive experience in treating a wide range of acute and chronic conditions, including kidney stones, thyroid disorders, gynecological diseases, skin diseases, tumors, and cysts, I am dedicated to providing effective homeopathic care to my patients.
                </Typography>
            </Box>
        </Container>
    );
};

export default Page;