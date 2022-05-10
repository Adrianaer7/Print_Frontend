import Layout from "../components/Layout"

const Libros = ({libros}) => {
  console.log(libros)
    

  return (
    <Layout pagina="Todos los libros">
      <div>Libros</div>
    </Layout>
  )
}

export default Libros


export async function getStaticProps() {
  const url = `${process.env.API_URL}/libros`
  const respuesta = await fetch(url)
  const libros = await respuesta.json()
  return {
    props: {
      libros
    }
  }
}