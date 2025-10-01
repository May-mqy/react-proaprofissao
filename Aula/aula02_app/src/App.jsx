import './App.css' //Conecta arquivo do css 
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import Conteudo from './componentes/Conteudo'
import Footer from './componentes/Footer'


function App() {

  return ( 
    <main className='principal'>
      <Header />
      <Menu />
      <Conteudo />
      <Footer />

    </main> //fraqments, tem que ser uma tag pai
  )
}

export default App
