import {Link} from 'react-router-dom'

import Styles from './css/Header.module.css'
import Logo from '../assets/img/viagens.jpg'
import Lupa from '../assets/img/lupa-semfundo.png'

function Header(){
    return(

        <header>
            <img className={Styles.img_viagens} src={Logo} alt="Logo da empresa"/>
            <nav className={Styles.menu_header}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/Grand'>Grand Canyon</Link>
                <Link to='/China'>Muralhas da China</Link>
                <Link to='/Aruba'>Aruba</Link>
            </nav>

            <div className={Styles.busca}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="símbolo de lupinha" className={Styles.lupa} />
        </header>
    )
}

export default Header;