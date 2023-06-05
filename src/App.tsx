import './App.css'
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
function App() {

  return (
    <>
        <div className="w-full h-full">
            <Navbar />
            <Home />
        </div>
    </>
  )
}

export default App
