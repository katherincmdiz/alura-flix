import React, { useState, useEffect } from 'react';
import { useVideoContext } from '../../context/context';
import axios from 'axios';
import styles from './ModalEdit.module.css';


const ModalEdit = () => {
    const { isModalOpen, closeModal, selectedVideo, handleSaveVideo } = useVideoContext();
    const initialVideoState = {
        id: '',
        titulo: '',
        categoria: '',
        imagen: '',
        link: '',
        descripcion: '',
    };
    const [editedVideo, setEditedVideo] = useState(initialVideoState);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/katherincmdiz/challenge-flix-api/videos');
                const uniqueCategorias = [...new Set(response.data.map((video) => video.categoria))];
                setCategorias(uniqueCategorias);
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };
        fetchCategorias();
    }, []);

    useEffect(() => {
        if (selectedVideo) {
            setEditedVideo(selectedVideo);
        } else {
            setEditedVideo(initialVideoState);
        }
    }, [selectedVideo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedVideo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            await handleSaveVideo(editedVideo);
            closeModal();
        } catch (error) {
            console.error('Error al guardar el video:', error);
        }
    };

    const handlerClear = () => {
        setEditedVideo(initialVideoState);
    };

    return (
        isModalOpen && (
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={closeModal}>X</button>
                    <h2>EDITAR VIDEO:</h2>
                    <form className={styles.formModal}>
                        <label>Título:
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={editedVideo.titulo}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>Categoría
                            <select
                                id="categoria"
                                name="categoria"
                                value={editedVideo.categoria}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Seleccione la categoría</option>
                                {categorias.map((cat, index) => (
                                    <option className={styles.option} key={index} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>Imagen
                            <input
                                type="url"
                                id="imagen"
                                name="imagen"
                                value={editedVideo.imagen}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>Video
                            <input
                                type="url"
                                id="link"
                                name="link"
                                value={editedVideo.link}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>Descripción
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                value={editedVideo.descripcion}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </form>
                    <div className={styles.modalButtons}>
                        <button type="submit" onClick={handleSave}>GUARDAR</button>
                        <button type="button" onClick={handlerClear}>LIMPIAR</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default ModalEdit;
