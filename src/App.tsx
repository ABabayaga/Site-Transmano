import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Grupo from './components/Grupo'
import Segmentos from './components/Segmentos'
import ServicosPrestados from './components/ServicosPrestados'
import Frota from './components/Frota'
/* import Cotacao from './components/Cotacao' */
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <Segmentos />
      <ServicosPrestados />
      <Frota />
      <Grupo />
      {/* <Cotacao /> */}
      <Footer />
    </>
  )
}

export default App
