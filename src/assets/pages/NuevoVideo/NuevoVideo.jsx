import React from 'react';
import styles from './NuevoVideo.module.css';
import Formulario from '../../components/Formulario/Formulario';

function NuevoVideo() {
    return (
        <div className={styles.container}>
            <Formulario />
        </div>
    );
}

export default NuevoVideo;
