import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BotonLibros from '../components/BotonLibros'
import Imagenes from '../components/Imagenes'
import Layout from '../components/Layout'
import Preguntas from '../components/Preguntas'
import styles from '../styles/Home.module.css'

export default function Index({preguntas, imagenes}) {


  return (
    <Layout pagina="Página principal">
      <Imagenes
        imagenes={imagenes[0].carrusel}
      />
      <BotonLibros/>
      <Preguntas
        preguntas={preguntas}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const urlPreguntas = `${process.env.API_URL}/preguntas`
  const urlImagenes = `${process.env.API_URL}/inicios`
  const [resPreguntas, resImagenes] = await Promise.all([fetch(urlPreguntas), fetch(urlImagenes)])
  const [preguntas, imagenes] = await Promise.all([resPreguntas.json(), resImagenes.json()])
 
  return {
    props: {
      preguntas,
      imagenes
    }
  }
}
