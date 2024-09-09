import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './Layout/Layout'
import Login from './pages/Login'
import Wallet from './pages/Wallets'
import Wallets from './pages/Wallets'
import Transictions from './pages/Transictions'
import Exchange from './pages/Exchange'

function App() {

  return (
    <>

      <Routes>

        <Route>

          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />

        </Route>

        <Route element={<Layout />}>

          <Route index path='/' element={<Home />} />
          <Route path='/wallets' element={<Wallets />} />
          <Route path='/transictions' element={<Transictions />} />
          <Route path='/exchange' element={<Exchange />} />

        </Route>

      </Routes>

    </>
  )
}

export default App
