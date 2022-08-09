import React from "react";
import { Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { findByLabelText } from "@testing-library/react";

function HeaderContent() {
    let navigate = useNavigate();

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
                <AccountMenu />
            </Box>
        </React.Fragment>
    );
}

export default HeaderContent;
