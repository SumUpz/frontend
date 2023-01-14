import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { TextProvider } from './context/context'
import Home from './pages/Home'
import Summary from './pages/Summary'

function App() {
  return (
    <TextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </TextProvider>
  )
}

export default App
