import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'

//importando os destinos
import Escocia from './componentes/Escocia'
import Grand_canyon from './componentes/Grand_canyon'
import China from './componentes/China'
import Aruba from './componentes/Aruba'

function App() {

  return (
    <>
      <main>
        <Header />
        <Home />
        <Escocia />
        <Grand_canyon />
        <China />
        <Aruba />
        <Footer />
      </main>
    </>
  )
}

export default App
