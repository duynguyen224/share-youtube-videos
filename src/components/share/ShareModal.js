import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AppContext } from "../../constants/AppContext";
import { Box, Chip, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { gapi } from "gapi-script";


export default function ShareModal() {
    const { appCallback } = React.useContext(AppContext);

    const handleClose = () => {
        appCallback.hideShare();
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
                    <DialogTitle sx={{fontWeight: "bold"}}>Share video to the world !</DialogTitle>
                    <CloseIcon sx={{ marginRight: 2, cursor: "pointer" }} onClick={handleClose}/>
                </Box>
                <Divider/>
                <DialogContent>
                    <Box sx={{position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <TextField id="outlined-username" label="Enter video link" sx={{width: "80%"}} placeholder="Example: https://www.youtube.com/watch?v=wsklajasf"/>
                        <Box>
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                sx={{ height: "40px"}}
                                style={{
                                    borderRadius: 20,
                                    backgroundColor: "rgb(255 82 82)",
                                    padding: "6px 12px",
                                    fontSize: "15px",
                                    color: "#fff"
                                }}
                            >
                                Share
                            </Button>
                        </Box>
                    </Box>
                    <Divider>
                        <Chip label="RESULT" />
                    </Divider>
                </DialogContent>
            </Dialog>
        </div>
    );
}
