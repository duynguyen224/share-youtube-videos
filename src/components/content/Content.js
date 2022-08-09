import React from "react";
import { Container, Box } from "@mui/material";
import Video from "./Video";

function Content() {
    return (
        <Container>
            <Box sx={{ my: 2 }}>
                {[...new Array(120)].map(() => (
                    <Video />
                ))}
            </Box>
        </Container>
    );
}

export default Content;
