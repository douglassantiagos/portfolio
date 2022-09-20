import { Pages } from "./Pages"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import { Success } from "./Pages/Success"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="max-h-screen">
          <Header />
          <Pages />
          <Footer />
        </div>          
        } 
      />
      <Route path="/success" element={<Success />} />
    </Routes>    
  )
}

export default App
