import { AuthProvider } from './Lab3/AuthProvider' 
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Quiz from './Lab5/Quiz'
import Result from './Lab5/Result'
import Lab5Layout from './Lab5/Lab5Layout'
import Layout from './Lab12/Layout'
import PresentAll from './Lab12/PresentAll'
import Detail from './Lab4/Detail'
import Natural from './Lab4/Natural'
import Contact from './Lab4/Contact'
import Login from './Lab6/Login'

function App() {
  

  return (
    <AuthProvider>
      <Container className="w-150 p-0" >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<PresentAll />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/naturals" element={<Natural />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/quiz" element={<Lab5Layout />} >
            <Route index element={<Quiz />} />
            <Route path="/quiz/result" element={<Result />} />
          </Route>
        </Routes>
      </Container>
    </AuthProvider>
  )
}

export default App
