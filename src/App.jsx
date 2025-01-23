import Hero from "./components/hero/hero"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/services"

const App = () => {
  return (
    <div className='container'>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App