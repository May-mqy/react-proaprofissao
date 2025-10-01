import Styles from './Camera.module.css'
import Camera_foto from '../assets/camera.png'

function Camera (){
    return(
        <section >
            <img className={Styles.camera} src={Camera_foto} alt="Camera" />
        </section>
    )
}

export default Camera