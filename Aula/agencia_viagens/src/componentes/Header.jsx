import Styles from './css/Header.module.css'
import Logo from '../assets/img/viagens.jpg'
import Lupa from '../assets/img/lupa-semfundo.png'

function Header(){
    return(

        <header>
            <img className={Styles.img_viagens} src={Logo} alt="Logo da empresa"/>
            <nav className={Styles.menu_header}>
                <a href="#">Home</a>
                <a href="#">Escócia</a>
                <a href="#">Grand Canyon</a>
                <a href="#">Muralhas da China</a>
                <a href="#">Aruba</a>
            </nav>

            <div className={Styles.busca}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="símbolo de lupinha" className={Styles.lupa} />
        </header>
    )
}

export default Header;