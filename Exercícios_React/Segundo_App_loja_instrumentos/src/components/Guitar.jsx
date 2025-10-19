import Styles from './css/Guitar.module.css'
import Violao from '../assets/img/guitarrinha.jpg'

function Guitar (){
    return (
         <section className={Styles.secao_guitar}>
            <div className= {Styles.caixas_brancas}>
                <img src={Violao} alt="guitarrinha"/> <br/><br/> <p className={Styles.texto}>Violão Yamaha C70 II - Clássico Nylon Acústico Natural Brilhante <br/><br/> <span className={Styles.destaque2}>R$989,50</span></p>
            </div>
            <div className= {Styles.caixas_brancas}>
                <img src={Violao} alt="guitarrinha"/> <br/><br/> <p className={Styles.texto}>Violão Yamaha C70 II - Clássico Nylon Acústico Natural Brilhante <br/><br/> <span className={Styles.destaque2}>R$989,50</span></p>
            </div>
            <div className= {Styles.caixas_brancas}>
                <img src={Violao} alt="guitarrinha"/> <br/><br/> <p className={Styles.texto}>Violão Yamaha C70 II - Clássico Nylon Acústico Natural Brilhante <br/><br/> <span className={Styles.destaque2}>R$989,50</span></p>
            </div>
            <div className= {Styles.caixas_brancas}>
                <img src={Violao} alt="guitarrinha"/> <br/><br/> <p className={Styles.texto}>Violão Yamaha C70 II - Clássico Nylon Acústico Natural Brilhante <br/><br/> <span className={Styles.destaque2}>R$989,50</span></p>
            </div>
         </section>
    )
}

export default Guitar