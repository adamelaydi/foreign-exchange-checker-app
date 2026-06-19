// COMPONENTS
// STYLING
import "../Loged"
// MATERIAL UI
import { Button } from "@mui/material"
export default function Loged(){
    return(
        <div className="loged">
            <div className="header">
                <p className="title">converstion</p>
                <div className="info">
                    <p><span>8</span> logged</p>
                    <Button>ClEAR ALL</Button>
                </div>
            </div>
            <div className="content">
            </div>
        </div>
    )
}