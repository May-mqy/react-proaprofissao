import styles from './Header.module.css'

function Header () {
    return (
        <header>
            <div className={styles.camada1}>Conteúdo da camada 1</div>
            <div className={styles.camada2}>Conteúdo da camada 2</div>
        </header>
    )
}

export default Header

