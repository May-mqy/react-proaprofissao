import Styles from './css/Home.module.css'
import Mala from '../assets/img/mala-marrom.png'

function Home(){
    return(
        <section className={Styles.fundo_home}>

            <img className={Styles.img_mala} src={Mala} alt="Mala de viagens" />

            <div className={Styles.texto_home}>
                <h1>Encontre aqui a viagem do seus sonhos!!</h1>
                <p>Chegou a hora de tirar a viagem dos seus sonhos do papel. Com uma variedade de destinos incríveis e pacotes pensados para cada tipo de viajante, facilitamos o processo para que você possa se concentrar apenas no que realmente importa: a sua experiência. Não adie mais a sua felicidade, comece a planejar sua jornada hoje mesmo.</p>
            </div>

        </section>
    )
}

export default Home;