// COMPONENTS
import Header from './components/Header'
import LiveMarket from './components/LiveMarket'
import RateSection from './components/RateSection'
import MultiProps from './components/MultiProps'
import Compare from './components/Compare'
import Favourite from './components/Favourite'
import Loged from './components/Loged'
import History from './components/History'
import Container from "./components/container";
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
          <Routes >
            <Route
            <Route path="/" element={<History />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/favorite" element={<Favourite />} />
            <Route path="/log" element={<Loged />} />
          </Routes> 
        </DataContext.Provider>  
      </div>
    </>
  )
}

export default App
