import Styles from './css/Forms.module.css'
import Instagram from '../assets/img/insta.png'
import Facebook from '../assets/img/face.png'
import Whatsapp from '../assets/img/whats.png'

function Forms (){
    return(
         <section className={Styles.fundo_forms}>

            <section className={Styles.formulario}>
                <form>
                    <label className={Styles.caixa_forms} htmlFor="nome">Entre com o seu nome:</label><br/>
                    <input type="text" className={Styles.nome} name="nome" placeholder="Digite seu nome aqui:"/><br/><br/>

                    <label htmlFor="email">Entre com o seu e-mail:</label><br/>
                    <input type="email" name="email" placeholder="Digite seu email aqui:"/><br/><br/>

                    <label htmlFor="pedido">Faça seu pedido por aqui:</label><br/>
                    <textarea name="pedido" rows="4" cols="40" placeholder="Faça seu pedido por aqui:"></textarea><br/><br/>

                    <button>Enviar</button>
                </form>
            </section>

            <section className={Styles.redes_sociais}>
                <h4>Acesse também nossas Redes Sociais!</h4>
                <section className={Styles.imagens_redes}>
                    <img src={Whatsapp} alt="WhatsApp"/>
                    <img src={Instagram} alt="Instagram"/>
                    <img src={Facebook} alt="Facebook"/>
                </section>
            </section>

    </section>
    )
}

export default Forms