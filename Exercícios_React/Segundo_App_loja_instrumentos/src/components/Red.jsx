import Styles from './css/Red.module.css'

function Red (){
    return (
        <section className={Styles.vermelho}>
            
            <div className={Styles.rosa1}>
                <p><span className={Styles.destaque}>Nossa Loja - Instrumentos Musicais</span></p>
                <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: Teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopranos e muito mais! Nossos intrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
            </div>

                <div className={Styles.rosa2}></div>

        </section>
    )
}

export default Red