import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      Cabecalho
      <Component {...pageProps} />
      Rodape
    </div>
  )
}

export default MyApp
