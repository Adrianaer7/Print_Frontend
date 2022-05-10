import { useState, useEffect } from "react"
import styles from "../styles/Preguntas.module.css"
const Pregunta = ({pregunta}) => {

    const [activo, setActivo] = useState(false)

  return (
      <>
      
      <div 
        className={styles.boton}
        onClick={() => {setActivo(!activo)}}
      >
          {pregunta.titulo}
      </div>
      {activo ? (
          <div>{pregunta.descripcion}</div>
      ) : null}
      </>
  )
}

export default Pregunta