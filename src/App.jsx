import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Invitation from './components/Invitation'
import HappyCouple from './components/HappyCouple'
import WeddingEvent from './components/WeddingEvent'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Invitation/>
      <HappyCouple/>
      <WeddingEvent/>
      <Footer/>
    </>
  )
}

export default App
