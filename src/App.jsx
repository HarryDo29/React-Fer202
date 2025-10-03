import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './Lab3/AuthProvider'
import Navigation from './Lab3/Navigation'
import PresentAll from './Lab12/PresentAll'
import Detail from './Lab4/Detail'
import { Container } from 'react-bootstrap'
import Contact from './Lab4/Contact'
// import { Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Container className="w-150 p-0" >
        <Navigation />
        <Routes>
          <Route path="/" element={<PresentAll />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/naturals" element={<PresentAll />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </AuthProvider>
  )
}

export default App
