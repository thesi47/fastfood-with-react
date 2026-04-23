
import './App.css'
import Footer from './components/footer/Footer'
import Cards from './components/main/cards/Cards'
import Hero from './components/main/Hero'
import Nav from './components/navbar/Nav'

function App() {


  return (
    <>
      <Nav/>
      <Hero></Hero>
      <Cards id="cards"></Cards>

      <Footer></Footer>
    </>
  )
}

export default App
