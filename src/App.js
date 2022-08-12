import { Box, Container } from "@mui/material";
import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./components/content/CategoryList";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import LoginModal from "./components/login/LoginModal";
import ShareModal from "./components/share/ShareModal";
import { AppContext } from "./constants/AppContext";
import useFetchAndSearchVideo from "./hooks/useFetchAndSearchVideo";
import useLoginModal from "./hooks/useLoginModal";
import useShareModal from "./hooks/useShareModal";

function App() {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const {showLoginModal, showLogin, hideLogin} = useLoginModal()
    const {showShareModal, showShare, hideShare} = useShareModal();
    const {videos, hasMoreVideo, loading, searchVideoResult, modeSearching, fetchMoreVideo, handleSearchByName} = useFetchAndSearchVideo();

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
                    searchVideoResult: searchVideoResult,
                    modeSearching: modeSearching,
                    hasMoreVideo: hasMoreVideo,
                    loading: loading,
                },
                appCallback: {
                    handleLogin: handleLogin,
                    showLogin: showLogin, 
                    hideLogin: hideLogin,
                    showShare: showShare,
                    hideShare: hideShare,
                    fetchMoreVideo: fetchMoreVideo,
                    handleSearchByName: handleSearchByName,
                },
            }}
        >
            <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh"}}>
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
