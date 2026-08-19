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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#f5c518] focus:px-5 focus:py-3 focus:text-[13px] focus:font-bold focus:tracking-[0.3px] focus:text-[#171717] focus:uppercase"
      >
        Pular para o conteúdo
      </a>
      <main id="main-content">
        <Hero />
        <QuemSomos />
        <Segmentos />
        <ServicosPrestados />
        <Frota />
        <Grupo />
        {/* <Cotacao /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
