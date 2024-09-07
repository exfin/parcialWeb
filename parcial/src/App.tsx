
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Makeup from './pages/Makeup'
import Memberships from './pages/Memberships'
import Models from './pages/Models'
import Photos from './pages/Photos'

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/makeup' element={<Makeup></Makeup>}></Route>
            <Route path='/models' element={<Models></Models>}></Route>
            <Route path='/memberships' element={<Memberships></Memberships>}></Route>
            <Route path='/photos' element={<Photos></Photos>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
