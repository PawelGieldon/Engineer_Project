import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import List from './pages/List'


function App() {
  

  return (
        <Routes>
          <Route path='/' element={<Contact/>} />
          <Route path='/List' element={<List/>} />
        </Routes> 
  )
}

export default App
