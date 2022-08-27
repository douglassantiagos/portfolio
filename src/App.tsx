import { Pages } from "./Pages"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="scroll-smooth max-h-screen scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Header />
      <Pages />       
    </div>
  )
}

export default App
