import styles from "../styles/Preguntas.module.css"
import Pregunta from "./Pregunta"


const Preguntas = ({preguntas}) => {

    
  return (
      <>
        <div className="contenedor">
            <div className={styles.preguntas}>
                {preguntas.map(pregunta => (
                    <Pregunta
                        key={pregunta._id}
                        pregunta={pregunta}
                    />
                ))}
            </div>
        </div>
        
      </>
  )
}

export default Preguntas

