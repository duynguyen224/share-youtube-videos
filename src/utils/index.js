import { YOUTUBE_PREFIX_URL } from "../constants";

export const sliceText = (input) => {
    if (input.length > 40) {
        return input.substring(0, 40) + "...";
    }
    return input;
};

export const convertToInternationalCurrencySystem = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(0) + "K"
        : Math.abs(Number(labelValue));
};

export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};

export const getIdFromYoutubeUrl = (youtubeUrl) => {
    if (youtubeUrl.includes(YOUTUBE_PREFIX_URL)) {
        const index = youtubeUrl.search("=");
        const videoId = youtubeUrl.substring(index + 1, youtubeUrl.length);
        return videoId;
    } else {
        return null;
    }
};
