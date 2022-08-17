import { useEffect, useState } from 'react';
import { filterVideoByCategory, getAllCategories } from '../services/categoryService';
import { getAllVideos, searchVideoByName } from '../services/videoService';


function useFetchAndSearchVideo() {
    // Fetch
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState([]);
    const [hasMoreVideo, setHasMoreVideo] = useState(true);
    const [loading, setLoading] = useState(true);

    // Search
    const [searchVideoResult, setSearchVideoResult] = useState([]);
    const [modeSearching, setModeSearching] = useState(false);
    
    // Category
    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        fetchAllVideos();
        fetchAllCategories();
    }, [])

    useEffect(() => {
        setLoading(true);
        handleSearchByName(searchQuery);
        let interval = null;
        interval = setInterval(() => {
            setLoading(false);
            clearInterval(interval);
        }, 1500);
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

    const fetchAllCategories = async () => {
        const res = await getAllCategories();
        setCategories(res);
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

    const getVideoByCategory = async (item) => {
        setLoading(true);
        const res = await filterVideoByCategory(item);
        setVideos(res.slice(0, 8));
        setSearchVideoResult(res);
        let interval = null;
        interval = setInterval(() => {
            setLoading(false);
            clearInterval(interval);
        }, 1500);
    }

    return {videos, categories, hasMoreVideo, loading, searchVideoResult, modeSearching, fetchMoreVideo, handleSearchByName, reloadData, searchQuery, setSearchQuery, getVideoByCategory};
}

export default useFetchAndSearchVideo;