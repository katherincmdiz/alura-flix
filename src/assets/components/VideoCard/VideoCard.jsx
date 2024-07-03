import React from 'react';
import styles from "./VideoCard.module.css";
import iconoBorrar from "./icono-delete.png";
import iconoEditar from "./icono-editar.png";
import { useVideoContext } from "../../context/context";
import Swal from 'sweetalert2';

const VideoCard = ({ video,  borderColor }) => {
    const { handleDeleteVideo, openModal } = useVideoContext();

    const handleDelete = async () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await handleDeleteVideo(video.id);
                    Swal.fire(
                        '¡Eliminado!',
                        'El video ha sido eliminado.',
                        'success'
                    );
                } catch (error) {
                    console.error("Error al eliminar el video:", error);
                    Swal.fire(
                        'Error',
                        'Hubo un problema al eliminar el video.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEdit = () => {
        openModal(video);
    };

    return (
        <div className={styles.videoCard} style={{ borderColor}}>
            <img src={video.imagen} alt={video.titulo} className={styles.imagen} />
            <div className={styles.textContainer}>
                <div className={styles.iconSection}>
                    <img
                        className={styles.iconoBorrar}
                        src={iconoBorrar}
                        alt="icono borrar"
                        onClick={handleDelete}
                    />
                    <span>Borrar</span>
                </div>
                <div className={styles.iconSection}>
                    <img
                        className={styles.iconoEditar}
                        src={iconoEditar}
                        alt="icono editar"
                        onClick={handleEdit}
                    />
                    <span>Editar</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
