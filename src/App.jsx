import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from "./components/navbar/nav"
import Firstshow from './components/products/firstshow'

function App() {
  return (
    <div>
      <Navbar/>
      <Firstshow/>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default App
