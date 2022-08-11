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
import { Box, Chip, Link } from "@mui/material";
import { convertToInternationalCurrencySystem, sliceText } from "../../utils";
import moment from "moment";
import YoutubeFrame from "../youtubeFrame/YoutubeFrame";

export default function Video(props) {
    const {video} = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            {/* <CardMedia
                component="img"
                height="194"
                image={video.snippet.thumbnails.high.url}
                alt="Paella dish"
            /> */}
             {/* <iframe
                width="100%"
                height="194"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                allowTransparency
                title="Embedded youtube"
            /> */}
            <YoutubeFrame video={video}/>
            <CardContent sx={{height: "160px"}}>
                <Box>
                    <Typography component="div">
                        <Box sx={{ fontWeight: "bold" }}>
                            {sliceText(video.snippet.title)}
                        </Box>
                    </Typography>
                    <Box>
                        <Chip label="Music" variant="outlined" size="small" />
                        <Chip label="Jazz" variant="outlined" size="small" />
                    </Box>
                    <Box>
                        <Link sx={{color: "#000", textDecoration: "none"}}>{video.snippet.channelTitle}</Link>
                    </Box>
                    <Box>
                        <Typography variant="p">{convertToInternationalCurrencySystem(video.statistics.viewCount)} views • </Typography>
                        <Typography variant="p">{moment(video.snippet.publishedAt).fromNow()}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
