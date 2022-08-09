import "./App.css";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import CategoryList from "./components/content/CategoryList";

function App() {
    return (
        <Box>
            <Container maxWidth="lg">
                <Header />
                <CategoryList/>
                <Content/>
            </Container>
        </Box>
    );
}

export default App;
