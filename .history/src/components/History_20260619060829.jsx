// MATERIAL UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function History(){
    return (
        <>
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
                <Stack>
                    <Button
                </Stack>
            </div>
        </>
    )
}