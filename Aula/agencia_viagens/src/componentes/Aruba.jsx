import Styles from './css/Aruba.module.css'
import ComponentesProps from './ComponenteProps';
import Bandeira_aruba from '../assets/img/bandeiraAruba.png'

function Aruba (){
    return(

        <section className={Styles.fundo_aruba}>
            <h1>Venha conhecer as praias de Aruba</h1>
             <ComponentesProps
            lugar="Aruba"
            texto="Um paraíso caribenho conhecido por suas praias de areia branca, águas cristalinas e clima ensolarado durante todo o ano. É o destino perfeito para relaxar e desfrutar de paisagens deslumbrantes."
            bandeira={Bandeira_aruba}/>
        </section>
    )
}

export default Aruba;