import React, { useState } from 'react';
import styles from './Pie.module.css';
import { Link } from 'react-router-dom';
import iconoHome from './iconoHome.png';
import iconoMas from './iconoMas.png';
import iconoHomeAzul from './icono-home.png';
import iconoMasAzul from './icono-mass.png';

function Pie() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className={styles.pie}>
            <section>
                <img className={styles.iconoAlura} src="/img/logo.png" alt="logo alura" />
            </section>
            <div className={styles.containerPie}>
                <Link to="/">
                    <button
                        onClick={() => handleButtonClick('home')}
                        className={activeButton === 'home' ? styles.active : ''}
                    >
                        <img
                            className={styles.logoHome}
                            src={activeButton === 'home' ? iconoHomeAzul : iconoHome}
                            alt="logo home"
                        />
                        {activeButton === 'home' && <h3 className={styles.articuloHome}>HOME</h3>}
                    </button>
                </Link>
                <Link to="/nuevo video">
                    <button
                        onClick={() => handleButtonClick('nuevoVideo')}
                        className={activeButton === 'nuevoVideo' ? styles.active : ''}
                    >
                        <img
                            className={styles.iconoMas}
                            src={activeButton === 'nuevoVideo' ? iconoMasAzul : iconoMas}
                            alt="icono más"
                        />
                        {activeButton === 'nuevoVideo' && <h3 className={styles.articuloMas}>NUEVO VIDEO</h3>}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Pie;
