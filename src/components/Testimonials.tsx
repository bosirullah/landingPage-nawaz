"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from "./Cards/TestimonialCard";
import { Box, Container, Typography } from "@mui/material";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#e97142",
                borderRadius: "50%",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            onClick={onClick}
        >
            &gt;
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#e97142",
                borderRadius: "50%",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            onClick={onClick}
        >
            &lt;
        </div>
    );
}

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container
            sx={{
                margin: "0 auto",
                padding: "40px 20px",
                maxWidth: "1200px",
            }}
        >
            <Typography
                variant="h3"
                align="center"
                maxWidth="700px"
                margin="30px auto"
                fontSize="40px"
                letterSpacing={2}
                color="white"
            >
                Lets See our Patients feedback
            </Typography>

            <Slider {...settings}>
                <Box sx={{ padding: "10px 0" }}>
                    <TestimonialCard
                        name="Kiran Kumar Datta"
                        date="June 17, 2024"
                        title="Exceptional Care"
                        content="Your exceptional care, professionalism, attention to detail, and compassionate approach have greatly improved my health and well-being. Thank you for always listening and addressing my concerns."
                        avatar="K"
                        imgPath="/assets/testimonialsImgs/kirankdtta.jpeg"
                    />
                </Box>
                <Box sx={{ padding: "10px 0" }}>
                    <TestimonialCard
                        name="Rima Begam"
                        date="June 30, 2024"
                        title="Great Doctor"
                        content="Great services! I am now better from my problem. The doctor is very good, and his behavior and thorough interrogation made me happy and comfortable. Highly recommended! 😊"
                        avatar="R"
                        imgPath="/assets/testimonialsImgs/rimaBegam.jpeg"
                    />
                </Box>
                <Box sx={{ padding: "10px 0" }}>
                    <TestimonialCard
                        name="Sahida Rahman"
                        date="July 15, 2024"
                        title="Gentle Care"
                        content="Nice services! The doctor’s gentle behavior and thorough care made me feel comfortable. I am now better from my problem and can live a healthier and happier life. Highly recommended!"
                        avatar="S"
                        imgPath="/assets/testimonialsImgs/sahidaRahman.jpeg"
                    />
                </Box>
                <Box sx={{ padding: "10px 0" }}>
                    <TestimonialCard
                        name="Paramita Basu"
                        date="July 27, 2024"
                        title="Wonderful Experience"
                        content="Dr. Nawaz Sarif is not only a great doctor but also a wonderful person. His homeopathic treatments are highly effective. I highly recommend visiting him for compassionate and thorough care."
                        avatar="M"
                        imgPath="/assets/testimonialsImgs/paramitaBasu.jpeg"
                    />
                </Box>
            </Slider>
        </Container>
    );
}
