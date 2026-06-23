// COMPONENTS
import Header from './components/Header'
import LiveMarket from './components/LiveMarket'
import RateSection from './components/RateSection'
import MultiProps from './components/MultiProps'

// STYLING
import './App.css'

function App() {
  const [value,setValue]=useState({sendValue:"" , base:"",quote:"" ,rate:""});
  return (
    <>
      <div className="container">
        <Header/>
        <LiveMarket />
        <RateSection/>
        <MultiProps/>   
      </div>
    </>
  )
}

export default App
