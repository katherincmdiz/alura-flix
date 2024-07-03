import React from 'react';
import VideoCard from "../../components/VideoCard/VideoCard";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import styles from "./Inicio.module.css";
import { useVideoContext } from '../../context/context';

const categoriasColores = {
    "FRONT END": "#6BD1FF",
    "BACK END": "#0c4b13",
    "INNOVACIÓN Y GESTIÓN": "#FFBA05",
};

const Inicio = () => {
    const { videos, openModal } = useVideoContext();

    return (
        <section className={styles.container}>
            {Object.keys(categoriasColores).map((category) => (
                <div className={styles.category} key={category}>
                    <h2 className={styles.categoryTitle} 
                    style={{ backgroundColor: categoriasColores[category] }}>{category}</h2>
                    <div className={styles.videosList}>
                        {videos
                            .filter((video) => video.categoria.toUpperCase() === category)
                            .map((video) => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                    borderColor={categoriasColores[category]}
                                />
                            ))}
                    </div>
                    <ModalEdit />
                </div>
            ))}
        </section>
    );
};

export default Inicio;
