import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Home } from './routes/Home'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
