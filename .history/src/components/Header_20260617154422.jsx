// LOGO 
import logo from "../assets/logo.svg"
// STYLING
import "../"
export default function Header(){
    return(
        <>
        <header>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="data">
                <p>55 currencies . eod . ecb data</p>
            </div>
        </header>
        </>
    )
}
