import React, { useContext } from "react";
import { Container, Box, Grid, Skeleton, CircularProgress } from "@mui/material";
import Video from "./Video";
import { AppContext } from "../../constants/AppContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../loader/Loader";

function Content() {
    const {appContext, appCallback} = useContext(AppContext);

    return (
        <Box sx={{ flexGrow: 1, my: 2}}>
            <InfiniteScroll
                dataLength={appContext.videos.length}
                next={appCallback.fetchMoreVideo}
                hasMore={true}
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
