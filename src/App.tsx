import { Content } from "./Pages/Content"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="max-h-screen scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Header />
      <Content />        
    </div>
  )
}

export default App
