import React, { useContext } from "react";
import { Link, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { findByLabelText } from "@testing-library/react";
import { AppContext } from "../../constants/AppContext";

function HeaderContent() {
    let navigate = useNavigate();

    const { appContext, appCallback } = useContext(AppContext);

    const showShareModal = () => {
        appCallback.showShare();
    }

    const headerStyles = {
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    return (
        <React.Fragment>
            <Box sx={headerStyles}>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        navigate(`/`);
                    }}
                >
                    <img
                        src="YouTube_Logo_2017.svg"
                        style={{ height: "30px" }}
                    />
                </Link>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {appContext.currentUser && (
                        <Button
                            variant="contained"
                            size="small"
                            sx={{ height: "40px" }}
                            style={{
                                borderRadius: 25,
                                backgroundColor: "rgb(255 82 82)",
                                padding: "10px 20px",
                                fontSize: "15px",
                                color: "#fff"
                            }}
                            onClick={showShareModal}
                        >
                            Share video
                        </Button>
                    )}
                    <AccountMenu />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default HeaderContent;
