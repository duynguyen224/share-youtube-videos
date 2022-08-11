import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Chip, Link, Skeleton, Tooltip, Zoom } from "@mui/material";
import { convertToInternationalCurrencySystem, sliceText } from "../../utils";
import moment from "moment";
import YoutubeFrame from "../youtubeFrame/YoutubeFrame";
import { useState } from "react";
import { useEffect } from "react";

export default function Video(props) {
    const {video, loading} = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    loading 
                    ? <Skeleton animation="wave" variant="circular" width={40} height={40}/> 
                    : <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                        </Avatar>
                }
                title= {loading ? <Skeleton/> : "Shrimp and Chorizo Paella"}
                subheader= {loading ? <Skeleton/> : "September 14, 2016"}
            />
       
            {loading ? <Skeleton animation="wave" variant="rectangle" height={194}/> : <YoutubeFrame video={video}/>}
            <CardContent sx={{height: "160px"}}>
                <Box>
                    <Typography component="div">
                        <Tooltip TransitionComponent={Zoom} title={video.snippet.title}>
                            {loading 
                                ? <Skeleton/> 
                                : <Box sx={{ fontWeight: "bold", cursor: "pointer" }}>
                                    {sliceText(video.snippet.title)}
                                </Box>
                            }
                        </Tooltip>
                    </Typography>
                    {loading 
                        ? <Skeleton/> 
                        : <Box>
                            <Chip label="Music" variant="outlined" size="small" />
                            <Chip label="Jazz" variant="outlined" size="small" />
                        </Box>
                    }
                    {loading 
                        ? <Skeleton/> 
                        : <Box>
                            <Link sx={{color: "#000", textDecoration: "none"}}>{video.snippet.channelTitle}</Link>
                            </Box>
                    }
                    {loading 
                        ? <Skeleton/> 
                        : <Box>
                             <Typography variant="p">{convertToInternationalCurrencySystem(video.statistics.viewCount)} views • </Typography>
                             <Typography variant="p">{moment(video.snippet.publishedAt).fromNow()}</Typography>
                        </Box>
                    }
                </Box>
            </CardContent>
        </Card>
    );
}
