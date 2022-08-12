import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AppContext } from "../../constants/AppContext";
import { Alert, Box, Chip, Divider, Skeleton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import YoutubeFrame from "../youtubeFrame/YoutubeFrame";
import { useState } from "react";
import { isEmptyObject, getIdFromYoutubeUrl } from "../../utils";
import { searchVideo } from "../../services/fetchYoutube.js";
import { YOUTUBE_PREFIX_URL } from "../../constants";

export default function ShareModal() {
    const { appCallback } = React.useContext(AppContext);

    const [searchUrl, setSearchUrl] = useState("");
    const [video, setVideo] = useState({});
    const [error, setError] = useState(false);
    const [frameLoading, setFrameLoading] = useState(false);
 
    useEffect(() => {
        if(searchUrl.length > 0){
            const videoId = getIdFromYoutubeUrl(searchUrl);
            if(videoId === null){
                setError(true);
            }
            if(searchUrl.includes(YOUTUBE_PREFIX_URL)){
                setFrameLoading(true);
                setTimeout(() => {
                    searchVideo(videoId).then((res) => handleSearchVideo(res));
                }, 2000);
            }
        }
    }, [searchUrl]);


    const handleSearchVideo = (response) => {
        if (response.items.length > 0) {
            setVideo(response.items[0]);
            setError(false);
            setFrameLoading(false);
        }else{
            setError(true);
        }
    };

    const handleClose = () => {
        appCallback.hideShare();
    };

    const renderSearchResult = () => {
        return (
            <React.Fragment>
                <Divider sx={{ mt: 2, mb: 2 }}>
                    <Chip label="RESULT" />
                </Divider>
                {!isEmptyObject(video) && !error && !frameLoading && <YoutubeFrame video={video} height={"400px"}/>}
                {error && (
                    <Alert severity="error">
                        May be your link is not valid, check it out!
                    </Alert>
                )}
                {frameLoading && <Skeleton animation="wave" variant="rectangle" height={400}/>}
            </React.Fragment>
        );
    };

    const dialogTitleStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    return (
        <div>
            <Dialog open={true} onClose={handleClose} fullWidth>
                <Box sx={dialogTitleStyles}>
                    <DialogTitle sx={{ fontWeight: "bold" }}>
                        Share video to the world !
                    </DialogTitle>
                    <CloseIcon
                        sx={{ marginRight: 2, cursor: "pointer" }}
                        onClick={handleClose}
                    />
                </Box>
                <Divider />
                <DialogContent>
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            id="outlined-test"
                            label="Enter video link"
                            sx={{ width: "100%" }}
                            placeholder="Example: https://www.youtube.com/watch?v=wsklajasf"
                            onChange={(e) => {
                                setSearchUrl(e.target.value);
                            }}
                        />
                        <Box sx={{ display: error ? "none" : "block" }}>
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                sx={{ height: "40px" }}
                                style={{
                                    borderRadius: 20,
                                    backgroundColor: "rgb(255 82 82)",
                                    padding: "6px 12px",
                                    marginLeft: "5px",
                                    fontSize: "15px",
                                    color: "#fff",
                                }}
                            >
                                Share
                            </Button>
                        </Box>
                    </Box>
                    {renderSearchResult()}
                </DialogContent>
            </Dialog>
        </div>
    );
}
