import { Pages } from "./Pages"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="max-h-screen">
      <Header />
      <Pages />
      <Footer /> 
    </div>
  )
}

export default App
