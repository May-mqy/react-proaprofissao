import Styles from './css/Escocia.module.css'
import ComponentesProps from './ComponenteProps';
import Bandeira_escocia from '../assets/img/bandeiraEscocia.png'

function Escocia() {
  return (
    
    <section className={Styles.fundo_escocia}>
        <h1>Venha conhecer a Escócia</h1>
        <ComponentesProps
            lugar="a Escócia"
            texto="Um país cheio de história, cultura e paisagens deslumbrantes. Desde as colinas ondulantes das Terras Altas até os castelos medievais, há muito para explorar. Conhecida por sua música tradicional, culinária única e, claro, o uísque escocês. Venha descobrir a magia da Escócia!"
            bandeira={Bandeira_escocia}/>
    </section>
  )
}

export default Escocia;