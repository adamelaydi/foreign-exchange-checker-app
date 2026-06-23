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

function App() {
  const [value,setValue]=useState({sendValue:"" , base:"",quote:"" ,rate:""});
  return (
    <>
      <div className="container">
        <Header/>
        <LiveMarket />
        <DataContext.Provider value={{value,setValue}}>
          
          <RateSection/>
          <MultiProps/> 
        </DataContext.Provider>  
      </div>
    </>
  )
}

export default App
