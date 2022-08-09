import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function CategoryList() {
    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    return (
        <Box>
            <Stack direction="row" spacing={1}>
                <Chip label="All" onClick={handleClick} color="primary" />
                <Chip label="Music" variant="outlined" onClick={handleClick} />
                <Chip label="Film" variant="outlined" onClick={handleClick} />
            </Stack>
            <Divider sx={{ paddingTop: 1 }} />
        </Box>
    );
}

export default CategoryList;
