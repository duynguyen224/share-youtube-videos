import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../../constants/AppContext";
import Video from "./Video";

function Content() {
    const {appContext, appCallback} = useContext(AppContext);

    return (
        <Box sx={{ flexGrow: 1, my: 2}}>
            {appContext.modeSearching && <Box sx={{fontWeight: "bold"}}>Display {appContext.videos.length} of {appContext.searchVideoResult.length} {appContext.searchVideoResult.length > 1 ? "results" : "result"}</Box>}
            <InfiniteScroll
                dataLength={appContext.videos.length}
                next={appCallback.fetchMoreVideo}
                hasMore={appContext.hasMoreVideo}
                loader={<h3 style={{display: "flex", justifyContent: "center"}}>Loading ...</h3>}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                >
                    {appContext.videos.map((item, index) => (
                        <Grid item xs={1} sm={4} md={3} key={index}>
                            <Video video={item} loading={appContext.loading}/>
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </Box>
    );
}

export default Content;
