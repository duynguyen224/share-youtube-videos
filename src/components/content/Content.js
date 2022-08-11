import React, { useContext } from "react";
import { Container, Box, Grid } from "@mui/material";
import Video from "./Video";
import { AppContext } from "../../constants/AppContext";

function Content() {
    const {appContext} = useContext(AppContext);

    return (
        <Box sx={{ flexGrow: 1, my: 2}}>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                {appContext.videos.map((item, index) => (
                    <Grid item xs={1} sm={4} md={3} key={index}>
                        <Video video={item}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Content;
