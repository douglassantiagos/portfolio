import { Pages } from "./Pages"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="scroll-smooth max-h-screen scrollbar-thin scrollbar-thumb-gray-600 dark:scrollbar-thumb-white scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Header />
      <Pages />
      <Footer /> 
    </div>
  )
}

export default App
