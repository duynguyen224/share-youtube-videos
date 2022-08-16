export const searchVideo = async (videoId) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    return response.json();
};

export const getAllVideos = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/v1/videos`);
    return response.json();
}

export const addVideo = async (videoResult, currentUser) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/v1/videos/create-video`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({video: videoResult, user: currentUser}),
    });
    return response.json();
};

export const searchVideoByName = async (searchStr) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/v1/videos/search-video?search=${searchStr}`);
    return response.json();
}