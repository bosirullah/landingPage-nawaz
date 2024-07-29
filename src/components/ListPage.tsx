import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LanguageIcon from "@mui/icons-material/Language";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Link from "next/link"; // Import the Link component from Next.js
import { ListItemText } from "@mui/material";

export default function NestedList() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: "200px",
                maxWidth: 360,
                bgcolor: "background.paper",
                mx: 2,
                pb: 0,
                color: "black",
                display: "block",
                position: "relative", // Ensure the parent list is positioned relatively
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Links" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: "absolute", // Position the collapsed list absolutely
                        top: "100%", // Position it right below the parent list item
                        right: 0,
                        bgcolor: "background.paper",
                        borderRadius: "4px",
                        zIndex: 1, // Ensure it overlays on top
                    }}
                >
                    <ListItemButton component="div">
                        <ListItemIcon>
                            <MedicalInformationIcon />
                        </ListItemIcon>
                        <Link
                            href="https://bhmsproforma.onrender.com/"
                            passHref
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                // textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            Bhms Proforma
                        </Link>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
