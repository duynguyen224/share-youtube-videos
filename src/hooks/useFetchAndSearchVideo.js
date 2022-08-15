import { useEffect, useState } from 'react';
import { listVideos } from "../constants/videosTest";


function useFetchAndSearchVideo() {
    // Fetch
    const [videos, setVideos] = useState(listVideos.slice(0, 8));
    const [hasMoreVideo, setHasMoreVideo] = useState(true);
    const [loading, setLoading] = useState(true);

    // Search
    const [searchVideoResult, setSearchVideoResult] = useState(listVideos);
    const [modeSearching, setModeSearching] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    useEffect(() => {
        if(searchVideoResult.length > 0){
            if(videos.length < searchVideoResult.length){
                setHasMoreVideo(true);
            }
        }
    }, [searchVideoResult])

    useEffect(() => {
        if(videos.length === searchVideoResult.length){
            setHasMoreVideo(false);
        }
    }, [videos])

    const fetchMoreVideo = () => {
        setTimeout(() => {
            setVideos(videos.concat(searchVideoResult.slice(videos.length, videos.length + 8)));
        }, 1500);
    };

    const handleSearchByName = (videoName) => {
        const result = listVideos.filter(item => item.snippet.title.toLowerCase().includes(videoName.toLowerCase()));
        setTimeout(() => {
            setSearchVideoResult(result);
            setVideos(result.slice(0, 8));
        }, 1500);

        if(videoName.length > 0) {
            setModeSearching(true);
        }else{
            setModeSearching(false);
        }
    }

    return {videos, hasMoreVideo, loading, searchVideoResult, modeSearching, fetchMoreVideo, handleSearchByName};
}

export default useFetchAndSearchVideo;