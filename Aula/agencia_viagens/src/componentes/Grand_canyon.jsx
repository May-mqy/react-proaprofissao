import Styles from './css/Grand.module.css'
import ComponentesProps from './ComponenteProps';
import BandeiraGrand from '../assets/img/bandeiraGrand.svg'

function Grand_canyon () {
    return(
        <section className={Styles.fundo_grand_canyon}>
            <h1>Venha conhecer o Grand Canyon</h1>
             <ComponentesProps
            lugar="o Grand Canyon"
            texto="Uma das maravilhas do mundo antigo e um símbolo icônico da história dos Estados Unidos. Com mais de 277 milhas de extensão, este desfiladeiro impressionante foi esculpido pelo rio Colorado ao longo de milhões de anos."
            bandeira={BandeiraGrand}/>
        </section>
    )
}

export default Grand_canyon;