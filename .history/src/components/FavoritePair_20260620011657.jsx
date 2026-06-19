// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// STYLING
import "../styling/FavoritePair.css"
export default function FavoritePaire(){
    return(
        <div className='parent'>
            <div className="info">
                <div className="name">
                    <p className="code">SPA</p>
                    <p className="fullname">egypt</p>
                </div>
                <div className="result">
                    <p className='value'>157.910</p>
                    <p className='rate'><span>@ </span> 157.91</p>
                </div>
            </div>
            <GradeIcon className="fav" />
        </div>
    )
}