import Styles from './css/Footer.module.css'

import whatsapp from '../assets/img/whats.png'
import instagram from '../assets/img/insta.png'
import facebook from '../assets/img/face.png'

function Footer (){
    return (
        <footer>
            <p className={Styles.texto_footer}> <br/><span className={Styles.destaque}> Nossa Loja - Instrumentos Musicais </span> <br/> Rua Tito,54 - Lapa <br/> São Paulo - Brasil </p>

            <section className={Styles.social_links}>
                <img src={whatsapp} alt="WhatsApp"/>
                <img src={instagram} alt="Instagram"/>
                <img src={facebook} alt="Facebook"/>
            </section>
        </footer>
    )
}

export default Footer