
import './App.css'
import Cards from './components/main/cards/Cards'
import Hero from './components/main/Hero'
import Nav from './components/navbar/Nav'

function App() {


  return (
    <>
      <Nav/>
      <Hero></Hero>
      <Cards id="cards"></Cards>
    </>
  )
}

export default App
