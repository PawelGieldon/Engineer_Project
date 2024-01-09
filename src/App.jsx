import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import List from './pages/List'
import Reservation from './pages/Reservation'
import DataSave from './pages/DataSave'
import './App.scss'

function App() {
  

  return (
        <Routes>
          <Route path='/' element={<Contact/>} />
          <Route path='/List' element={<List/>} />
          <Route path='/Reservation' element={<Reservation/>} />
          <Route path='/DataSave' element={<DataSave/>} />
        </Routes> 
  )
}

export default App
