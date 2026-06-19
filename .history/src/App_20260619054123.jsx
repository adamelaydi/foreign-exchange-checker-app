// COMPONENTS
import Header from './components/Header'
import LiveMarket from './components/LiveMarket'
import RateSection from './components/RateSection'
import MultiProps from './components/MultiProps'
// STYLING
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <LiveMarket />
        <RateSection/>
          
      </div>
    </>
  )
}

export default App
