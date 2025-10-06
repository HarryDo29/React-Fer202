import { Route, Routes } from 'react-router-dom'
// import './App.css'
import { AuthProvider } from './Lab3/AuthProvider'
import Navigation from './Lab3/Navigation'
import PresentAll from './Lab12/PresentAll'
import Detail from './Lab4/Detail'
import Natural from './Lab4/Natural'
import { Container } from 'react-bootstrap'
import Contact from './Lab4/Contact'
import orchids from './Lab12/ListOfOrchilds'

function App() {
  return (
    <AuthProvider>
        <Navigation />
      <Container className="w-150 p-0" >
        <Routes>
          <Route path="/" element={<PresentAll orchidsList={orchids} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/naturals" element={<Natural />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </AuthProvider>
  )
}

export default App
