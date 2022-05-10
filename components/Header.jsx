import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/"> 
            <a><Image src="/img/logo0.jpg" priority="true" height={80} width={170} alt="Logo Imagen"/></a>  
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/libros">Libros</Link>
            <Link href="/nosotros">Nosotros</Link>
          </nav>
        </div>

      </div>
      
    </header>
  )
}

export default Header