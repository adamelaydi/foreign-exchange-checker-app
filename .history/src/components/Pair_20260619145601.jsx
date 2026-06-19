// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// IMAGE
import logo from "../assets/eg.webp"
// STYLING
import "../styling/Paire.css"
export default function Paire(){
    return(
        <div className='parent'>
            <img src={logo}/>
            <div className="info">
                <div className="name">
                    <p className="code">eg</p>
                    <p className="fullname">egypt</p>
                </div>
                <div className="result">
                    <p className=''>157.910</p>
                    <p><span>@ </span> 157.91</p>
                </div>
            </div>
            <GradeIcon />
        </div>
    )
}