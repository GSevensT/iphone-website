import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/> 
    </main>
  )
}
//remember highlight was used to be highlights
export default App

