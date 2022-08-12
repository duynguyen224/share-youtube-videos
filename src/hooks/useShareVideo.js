import { useEffect, useState } from 'react';
import { YOUTUBE_PREFIX_URL } from "../constants";
import { searchVideo } from "../services/fetchYoutube.js";
import { getIdFromYoutubeUrl } from "../utils";

function useShareVideo() {
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

    const handleSetSearchUrl = (e) => {
        setSearchUrl(e.target.value);
    }

    return { searchUrl, video, error, frameLoading, handleSearchVideo, handleSetSearchUrl }
}

export default useShareVideo