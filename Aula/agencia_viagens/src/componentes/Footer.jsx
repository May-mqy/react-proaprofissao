import Styles from './css/Footer.module.css'
import Instagram from '../assets/img/Insta.png'
import Facebook from '../assets/img/face.png'
import Tiktok from '../assets/img/tiktok.png'
import Whatsapp from '../assets/img/whtas.png'

function Footer (){
    return(
        <footer>
            <p className={Styles.text_footer}>Siga-nos em nossas redes sociais</p>

            <section className={Styles.redes_sociais}>
                <img className={Styles.img_footer} src={Instagram} alt="Instagram" />
                <img className={Styles.img_footer} src={Facebook} alt="Instagram" />
                <img className={Styles.img_footer} src={Tiktok} alt="Instagram" />
                <img className={Styles.img_footer} src={Whatsapp} alt="Instagram" />
            </section>
            <p className={Styles.text_footer2}>Telefone de contato: (11) 9555 - 3355</p>
        </footer>
    )
}

export default Footer;