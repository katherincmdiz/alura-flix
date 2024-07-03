import styles from './Cabecera.module.css'
import CabeceraLink from '../CabeceraLink/CabeceraLink'

function Cabecera() {
    return (
        <header className={styles.cabecera}>
          <section className={styles.logo}>
              <img src="/img/logo.png" alt="logo" />
          </section>
            
            <nav>
                <CabeceraLink url="/">
                <button className={styles.botonHome}>
                HOME
                </button>
                </CabeceraLink>
                <CabeceraLink url="/nuevo video">
                <button className={styles.botonNuevo}>
                NUEVO VIDEO
                </button>
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;