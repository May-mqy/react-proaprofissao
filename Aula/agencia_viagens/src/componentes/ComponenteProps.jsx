import Styles from './css/ComponentesProps.module.css'

function ComponentesProps({lugar,texto,bandeira}) {
    return(

        <div className={Styles.corpo_texto}>
          <h2>Venha conhecer {lugar}!!</h2>
          <p>
            {texto}
          </p>

          <img src={bandeira} alt="bandeira do país" className={Styles.imagem_props}/>
        </div>

    )
}

export default ComponentesProps