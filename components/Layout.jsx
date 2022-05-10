import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import favicon from "../public/favicon.ico"

const Layout = ({children, pagina}) => {
  return (
    <>
      <Head>
        <title>The Print Company Argentina - {pagina}</title>
        <meta name="description" content="Sitio web de impresiones de libros académicos desde Gualeguaychú a todo el país"/>
        <link rel="shortcut icon" type="image/x-icon" href={favicon.src}/>
      </Head>

      <div className="flexible">
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout