import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage} style={{ backgroundImage: `url('/img/banner.png')` }}></div>
      <div className={styles.seccionTextos}>
        <div className={styles.textosContainer}>
          <div className={styles.tituloBanner}>FRONT END</div>
          <h1>Challenge React</h1>
          <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div className={styles.videoBanner}>
         <img src="https://i3.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg" alt="video" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
