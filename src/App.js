import "./App.css";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import CategoryList from "./components/content/CategoryList";
import { AppContext } from "./constants/AppContext";
import jwt_decode from "jwt-decode";
import LoginModal from "./components/login/LoginModal";
import { gapi } from "gapi-script";
import useLoginModal from "./hooks/useLoginModal";
import ShareModal from "./components/share/ShareModal";
import useShareModal from "./hooks/useShareModal";
import { searchVideo } from "./services/fetchYoutube.js";
import { listVideos } from "./constants/videosTest";

import {addUser} from "./services/userService" 

function App() {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const {showLoginModal, showLogin, hideLogin} = useLoginModal()
    const {showShareModal, showShare, hideShare} = useShareModal();

    const [videos, setVideos] = useState(listVideos);

    console.log(videos.length)

    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: ""
            })
        }
        gapi.load("client:auth2", start);
    }, [])

    const handleLogin = (userInfo) => {
        localStorage.setItem("currentUser", JSON.stringify(userInfo.profileObj));
        window.location.reload();
    };

    return (
        <AppContext.Provider
            value={{
                appContext: {
                    currentUser: currentUser,
                    videos: videos,
                },
                appCallback: {
                    handleLogin: handleLogin,
                    showLogin: showLogin, 
                    hideLogin: hideLogin,
                    showShare: showShare,
                    hideShare: hideShare,
                },
            }}
        >
            <Box sx={{ backgroundColor: "#f1f1f1" }}>
                <Container maxWidth="lg">
                    <Header />
                    <CategoryList />
                    <Content />
                </Container>
            </Box>
            {showLoginModal && <LoginModal />}
            {showShareModal && <ShareModal/> }
        </AppContext.Provider>
    );
}

export default App;
