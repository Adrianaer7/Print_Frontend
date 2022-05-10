import Imagen from "./Imagen"
import styles from "../styles/ListadoImagen.module.css"


const Imagenes = ({imagenes}) => {
  return (
      <>
        <div className={styles.listado}>
            {imagenes.map(imagen => (
                <Imagen
                    key={imagen._id}
                    imagen={imagen}
                />
            ))}
        </div>
      </>
  )
}

export default Imagenes