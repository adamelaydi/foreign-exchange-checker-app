// COMPONENTS
import Header from './components/Header'
import LiveMarket from './components/LiveMarket'
import RateSection from './components/RateSection'
import MultiProps from './components/MultiProps'
// HOOKES
import { useState } from 'react'
// CONTEXTS
import { DataContext } from './contexts/DataContext'
// STYLING
import './App.css'
// ROUTES
import { Routes, Route } from "react-router-dom";
import Compare from './components/Compare'

function App() {
  const [value,setValue]=useState({sendValue:"" , base:"",quote:"" ,rate:""});
  return (
    <>
      <div className="container">
        <Header/>
        <LiveMarket />
        <DataContext.Provider value={{value,setValue}}>
            <RateSection/>
          <Routes>
            <MultiProps/>
            <Route path="/" element={<History />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/favorites" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> 
        </DataContext.Provider>  
      </div>
    </>
  )
}

export default App
