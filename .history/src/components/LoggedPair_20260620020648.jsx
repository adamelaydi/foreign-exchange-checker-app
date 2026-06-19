// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// STYLING
import "../styling/FavoritePair.css"
export default function LogedPair(){
    return(
        <div className='parent'>
            <div className="info">
                <div className="name">
                    <p className="code"><span className="time"></span><span className="first">eg</span> {"->"} <span className='second'>usd</span></p>
                </div>
                <div className="result">
                    <p className='value'>157.910</p>
                    <p className='rate'>^ +0.15%</p>
                </div>
            </div>
            <GradeIcon className="fav" />
        </div>
    )
}