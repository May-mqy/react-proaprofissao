import Styles from './css/China.module.css'
import ComponentesProps from './ComponenteProps';
import Bandeira_china from '../assets/img/Bandeira-china.png'

function China (){
    return(
        <section className={Styles.fundo_china}>
            <h1>Venha conhecer as muralhas da China</h1>
            <ComponentesProps
            lugar="as Muralhas da China"
            texto="Uma das maravilhas do mundo antigo e um símbolo icônico da história chinesa. Com mais de 13.000 milhas de extensão, essas impressionantes estruturas foram construídas para proteger o império chinês contra invasões e ataques."
            bandeira={Bandeira_china}/>

        </section>
    )
}

export default China;