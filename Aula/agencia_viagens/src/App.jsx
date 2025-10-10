import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
        <Router>
          <Header />

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Escocia' element={<Escocia/>}/>
              <Route path='/Grand' element={<Grand_canyon />}/>
              <Route path='/China' element={<China />}/>
              <Route path='/Aruba' element={<Aruba />}/>
            </Routes>

          <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
