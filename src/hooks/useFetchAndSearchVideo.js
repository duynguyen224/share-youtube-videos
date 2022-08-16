import { useEffect, useState } from 'react';
import { listVideos } from "../constants/videosTest";
import { getAllVideos, searchVideo, searchVideoByName } from '../services/videoService';


function useFetchAndSearchVideo() {
    // Fetch
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState([]);
    const [hasMoreVideo, setHasMoreVideo] = useState(true);
    const [loading, setLoading] = useState(true);

    // Search
    const [searchVideoResult, setSearchVideoResult] = useState([]);
    const [modeSearching, setModeSearching] = useState(false);

    useEffect(() => {
        fetchAllVideos();
    }, [])

    useEffect(() => {
        handleSearchByName(searchQuery);
    }, [searchQuery])

    useEffect(() => {
        if(searchVideoResult.length > 0){
            if(videos.length < searchVideoResult.length){
                setHasMoreVideo(true);
            }
        }
    }, [searchVideoResult])

    useEffect(() => {
        if(videos.length === searchVideoResult.length || videos.length === 0 || searchVideoResult.length === 0){
            setHasMoreVideo(false);
        }
    }, [videos])

    const fetchAllVideos = async () => {
        setLoading(true);
        const res = await getAllVideos();
        setVideos(res.slice(0, 8));
        setSearchVideoResult(res);
        setInterval(() => {
            setLoading(false);
        }, 1500);
    }

    const reloadData = async () => {
        setLoading(true);
        const res = await getAllVideos();
        setVideos(res.slice(0, 8));
        setSearchVideoResult(res);
        setInterval(() => {
            setLoading(false);
        }, 1500);
    }

    const fetchMoreVideo = () => {
        setTimeout(() => {
            setVideos(videos.concat(searchVideoResult.slice(videos.length, videos.length + 8)));
        }, 1500);
    };

    const handleSearchByName = async (videoName) => {
        const result = await searchVideoByName(videoName);
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

    return {videos, hasMoreVideo, loading, searchVideoResult, modeSearching, fetchMoreVideo, handleSearchByName, reloadData, searchQuery, setSearchQuery};
}

export default useFetchAndSearchVideo;