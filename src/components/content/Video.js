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
import { Box, Chip } from "@mui/material";

export default function Video() {
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
            <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Box>
                    <Typography component="div">
                        <Box sx={{ fontWeight: "bold" }}>
                            This is tittle of video, can be too long
                        </Box>
                    </Typography>
                    <Box>
                        <Chip label="Music" variant="outlined" size="small" />
                        <Chip label="Jazz" variant="outlined" size="small" />
                    </Box>
                    <Box>
                        <Typography variant="p">100k views • </Typography>
                        <Typography variant="p">2 years ago</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
