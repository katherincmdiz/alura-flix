import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

const VideoContext = React.createContext();

export const useVideoContext = () => {
    return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/katherincmdiz/challenge-flix-api/videos");
            setVideos(response.data);
        } catch (error) {
            console.error("Error al obtener los videos:", error);
        }
    };

    const handleSaveVideo = async (editedVideo) => {
        try {
            const response = await axios.put(
                `https://my-json-server.typicode.com/katherincmdiz/challenge-flix-api/videos/${editedVideo.id}`,
                editedVideo
            );
            setVideos((prevVideos) =>
                prevVideos.map((video) =>
                    video.id === editedVideo.id ? editedVideo : video
                )
            );
            closeModal();
        } catch (error) {
            console.error("Error al actualizar el video:", error);
        }
    };

    const handleAddVideo = async (newVideo) => {
        try {
            const response = await axios.post("https://my-json-server.typicode.com/katherincmdiz/challenge-flix-api/videos", newVideo);
            setVideos((prevVideos) => [...prevVideos, response.data]);
        } catch (error) {
            console.error("Error al agregar el video:", error);
        }
    };

    const handleDeleteVideo = async (id) => {
        try {
            await axios.delete(`https://my-json-server.typicode.com/katherincmdiz/challenge-flix-api/videos/${id}`);
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
        } catch (error) {
            console.error("Error al eliminar el video:", error);
        }
    };

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const videoContextValue = {
        videos,
        isModalOpen,
        selectedVideo,
        fetchVideos,
        handleSaveVideo,
        handleAddVideo,
        handleDeleteVideo,
        openModal,
        closeModal,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};
