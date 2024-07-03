import React, { useState } from 'react';
import styles from './Formulario.module.css';
import { useVideoContext } from '../../context/context';
import Swal from 'sweetalert2';

function Formulario() {
    const { handleAddVideo } = useVideoContext();
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        link: '',
        descripcion: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.titulo) newErrors.titulo = 'El título es requerido';
        if (!formData.categoria) newErrors.categoria = 'La categoría es requerida';
        if (!formData.imagen) newErrors.imagen = 'La imagen es requerida';
        if (!formData.link) newErrors.link = 'El enlace del video es requerido';
        if (!formData.descripcion) newErrors.descripcion = 'La descripción es requerida';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await handleAddVideo(formData);
            Swal.fire({
                icon: 'success',
                title: 'Video creado',
                text: 'El video ha sido creado exitosamente',
            });
            setFormData({
                titulo: '',
                categoria: '',
                imagen: '',
                link: '',
                descripcion: ''
            });
            setErrors({});
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al crear el video',
            });
            console.error('Error al crear el video:', error);
        }
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        handleSubmit(e);
    };

    const handleClear = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagen: '',
            link: '',
            descripcion: ''
        });
        setErrors({});
    };

    return (
        <div className={styles.formulario}>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <div className={styles.crear}><h2>Crear Tarjeta</h2></div>
            
            <form className={styles.crearVideo} onSubmit={handleSubmit}>
                <div>
                    <label>Titulo</label>
                    {errors.titulo && <p className={styles.error}>{errors.titulo}</p>}
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Ingrese el título"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Categoría</label>
                    {errors.categoria && <p className={styles.error}>{errors.categoria}</p>}
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Gestión">Innovación y Gestión</option>
                    </select>
                </div>
                <div>
                    <label>Imagen</label>
                    {errors.imagen && <p className={styles.error}>{errors.imagen}</p>}
                    <input
                        type="text"
                        name="imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        value={formData.imagen}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Video</label>
                    {errors.link && <p className={styles.error}>{errors.link}</p>}
                    <input
                        type="text"
                        name="link"
                        placeholder="Ingrese el enlace del video"
                        value={formData.link}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descripción</label>
                    {errors.descripcion && <p className={styles.error}>{errors.descripcion}</p>}
                    <textarea
                        name="descripcion"
                        placeholder="¿De qué se trata este video?"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
            <section className={styles.buttons}>
                <button className={styles.saveButton} type="button" onClick={handleSaveClick}>GUARDAR</button>
                <button className={styles.clearButton} type="button" onClick={handleClear}>LIMPIAR</button>
            </section>
        </div>
    );
}

export default Formulario;
