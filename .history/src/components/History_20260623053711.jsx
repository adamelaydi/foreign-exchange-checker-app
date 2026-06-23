// HOOKS
import { useEffect ,useContext ,useState} from 'react';
import { useRef } from 'react';
// MATERIAL UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// context
import { DataContext } from '../contexts/DataContext';
// handleClicks
import { handleHistoryClick } from '../handleClicks/historyClicks';
// STYLING
import "../styling/History.css"
// echarts library
import * as echarts from 'echarts';

export default function History(){

//#region logic and data flow
    // STATES
    const [Chart,setChart]=useState({
        X:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        Y: [1 ,3 ,2 ,15,23 ,50],
    }) 
    // CONTEXTS

    const{value,setValue}=useContext(DataContext);
    // HANDLE FUNCITONS
    async function handleGButtons(type="1d"){
        if (value){
                        let a = await handleHistoryClick(value.base,value.quote,type)
                        setChart(a);
                        console.log(Chart)
                    }
    }

    // ECHART FOR HISTORY SECITON
    const chartRef = useRef(null);
    useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    chart.setOption({
        xAxis: {
            type: "category",
            data: Chart.X || [],
        },
        yAxis: {
            type: "value",
            min: Chart.Y?.length ? Math.min(...Chart.Y) : 0,
            max: Chart.Y?.length ? Math.max(...Chart.Y) : 1,
        },
        series: [
            {
                data: Chart.Y || [],
                type: "line",
                smooth: true,
            },
        ],
    });

    return () => chart.dispose();
}, [Chart]);
//#endregion
    const Y = Chart?.Y || [];

const open = Y[0] ?? 0;
const last = Y[Y.length - 1] ?? 0;

const change = last - open;

const percent =
  open !== 0 ? (change / open) * 100 : 0;

// MAIN COMPONENT
    return (
        <div className="history">
            <div className="header-bar">
                <div className="change-sec">
                    <div className="node">
                        <p>open</p>
                        <p>{open}</p>
                    </div>
                    <div className="node">
                        <p>last</p>
                        <p>{last}</p>
                    </div>
                    <div className="node">
                        <p>change</p>
                        <p  className='in'>{change}</p>
                    </div>
                    <div className="node">
                        <p>% change</p>
                        <p  className='in'>{Number(((Chart.Y?.[Chart.Y?.length-1]-Chart.Y?.[0])/Chart.Y?.[0])*100).toFixed(2)}%</p>
                    </div>
                </div>
                <Stack className='Stack' spacing={-3} direction="row">
                    <Button className='btn' variant="text" onClick={async ()=>{
                        await handleGButtons("1d")
                    }} >1d</Button>
                    <Button  className='btn' variant="text"  onClick={async ()=>{
                        await handleGButtons("1w")
                    }}  >1w</Button>
                    <Button className='btn'  variant="text" onClick={async ()=>{
                        await handleGButtons("1m")
                    }} >1m</Button>
                    <Button className='btn'  variant="text" onClick={async ()=>{
                        await handleGButtons("3m")
                    }} >3m</Button>
                    <Button  className='btn' variant="text" onClick={async ()=>{
                        await handleGButtons("1y")
                    }} >1y</Button>
                    <Button  className='btn' variant="text" onClick={async ()=>{
                        await handleGButtons("5y")
                    }} >5y</Button>
                </Stack>
            </div>
            <div className='chart' ref={chartRef}>
                
            </div>
        </div>
    )
}