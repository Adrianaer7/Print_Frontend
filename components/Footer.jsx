import styles from "../styles/Footer.module.css"
import Image from "next/dist/client/image"
import Link from "next/dist/client/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="contenedor">
        <div className={styles.contenido}>
          <div className={styles.contacto}>
            <div>CONSULTAS: <Link  href="https://wa.me/5493446239168">(+54) 93446239168</Link></div>
            <div className={styles.redes}>SEGUINOS:
                <Link href="https://www.google.com" target="_blank" rel="noreferrer noopener">Facebook</Link>
                <Link href="/" target="_blank" rel="noreferrer noopener">Instagram</Link>
            </div>
          </div>
          <Link href="/">
            <a><Image src="/img/logo0.jpg" width={170} height={80} alt="Imagen Logo"/></a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer