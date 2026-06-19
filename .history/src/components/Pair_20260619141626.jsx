// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// IMAGE
import logo from "../assets/eg.webp"
export default function Paire(){
    return(
        <div>
            <img src={logo} alt="" />
            <div className="info">
                <div className="name">
                    <p className="code"></p>
                    <p className="fullname"></p>
                </div>
                <div className="result">
                    <p></p>
                    <GradeIcon />
                </div>
            </div>
        </div>
    )
}