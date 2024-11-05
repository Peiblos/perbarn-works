

import './App.css'
import Navbar from './components/NavBar/NavBar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Presentation from './components/Presentation/Presentation.tsx'
import Request from './components/Request/Request'
import Carousel from './components/Carousel/Carousel.tsx'
import Services from './components/Services/Services.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Services/>
      <Presentation/>
      <Request/>
      <Footer/>
    </>
  )
}

export default App
