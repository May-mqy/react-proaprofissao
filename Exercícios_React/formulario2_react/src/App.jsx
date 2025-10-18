import './App.css'
import Monster from "./img/MonsterHigh.png"

function App() {
      const nome = "May"; 
      const idade = 18;  

  return (
    <main>
      <h1>Formulário 2</h1>
      <p>Monster High é uma franquia de fashion dolls estadunidense criada e desenvolvida pela Mattel em julho de 2010. A franquia gira em torno da vida escolar de adolescentes filhos de monstros clássicos e de filmes de terror. Tais personagens frequentam uma escola especial para monstros chamada Monster High.</p>
      <img src={Monster} alt="Monster High" width="300" />
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
    
    </main>
  )
}

export default App
