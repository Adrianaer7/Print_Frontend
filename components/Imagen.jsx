import Image from "next/dist/client/image"
import styles from "../styles/Imagenes.module.css"
const Imagen = ({imagen}) => {
  return (
      <>
        <div className={styles.imagen}>
            <Image layout="responsive" width={30} height={60} src={imagen.url} alt="{`Imagen ${name}`"/>

        </div>
        
      </>
  )
}

export default Imagen