import { Box, Typography } from "@mui/material";
import HomePage from "../components/Home";
import Testimonials from "../components/Testimonials";
import About from "./about/page";
import ChambersPage from "@/components/Chambers";
import LocationMap from "@/components/LocationMap";

export default function Page() {
    return (
        <Box>
            <HomePage />
            <hr />
            <About />
            <hr />
            <ChambersPage />
            <hr />
            <Box
                sx={{
                    background:
                        "linear-gradient(108deg, rgba(233,164,66,0.59156162464986) 0%, rgba(234,140,68,0.8604691876750701) 100%)",
                }}
            >
                <Testimonials />
            </Box>
            <LocationMap />
        </Box>
    );
}
