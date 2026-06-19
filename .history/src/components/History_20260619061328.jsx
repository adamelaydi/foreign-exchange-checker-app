// MATERIAL UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// STYLING
import "../styling/History.css"
export default function History(){
    return (
        <div className="">
            <div className="header-bar">
                <div className="change-sec">
                    <div className="node">
                        <p>open</p>
                        <p>0.8516</p>
                    </div>
                    <div className="node">
                        <p>last</p>
                        <p>0.8530</p>
                    </div>
                    <div className="node">
                        <p>change</p>
                        <p>+0.0014</p>
                    </div>
                    <div className="node">
                        <p>% change</p>
                        <p>^ +0.16%</p>
                    </div>
                </div>
                <Stack spacing={-3} direction="row">
                    <Button variant="text">1d</Button>
                    <Button variant="text">1w</Button>
                    <Button variant="text">1m</Button>
                    <Button variant="text">3m</Button>
                    <Button variant="text">1y</Button>
                    <Button variant="text">5y</Button>
                </Stack>
            </div>
        </div>
    )
}