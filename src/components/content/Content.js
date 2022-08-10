import React from "react";
import { Container, Box, Grid } from "@mui/material";
import Video from "./Video";

function Content() {
    return (
        <Box sx={{ flexGrow: 1, my: 2}}>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                {Array.from(Array(100)).map((_, index) => (
                    <Grid item xs={1} sm={4} md={3} key={index}>
                        <Video />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Content;
