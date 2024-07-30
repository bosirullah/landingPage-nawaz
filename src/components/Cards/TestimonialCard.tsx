import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "@/utils/motion";
import { useInView } from "@/utils/customHooks/useInView";
import Image from "next/image";

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
    name: string;
    date: string;
    title: string;
    content: string;
    avatar: string;
    imgPath: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    date,
    title,
    content,
    avatar,
    imgPath,
}) => {
    const [setRef, inView] = useInView({ threshold: 0.1 });

    return (
        <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={zoomIn(0.3, 0.75)}
            ref={setRef}
        >
            <Tilt
                style={{
                    backgroundColor: "var(--tertiary)", // Replace with the actual color value
                    padding: "20px",
                }}
            >
                <Card
                    sx={{
                        maxWidth: 325,
                        margin: "auto",
                        borderRadius: "15px",
                        boxShadow: 5,
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: "#e97142" }}
                                aria-label="testimonial"
                            >
                                <Image
                                    src={imgPath}
                                    alt={avatar}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 392px) 100vw, (max-width: 600px) 50vw, (max-width: 1200px) 33vw"
                                />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={name}
                        subheader={date}
                    />
                    <CardContent>
                        <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                        >
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            sx={{
                                background: "#e97142",
                                color: "white",
                                mx: 1,
                                my: 1,
                                "&:hover": { background: "#b85a35" },
                            }}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Tilt>
        </motion.div>
    );
};

export default TestimonialCard;
