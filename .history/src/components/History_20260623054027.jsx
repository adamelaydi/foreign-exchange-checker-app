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
        const chart = echarts.init(chartRef.current);
        const option = {
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: Chart.X ,
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: true
                },

                axisLabel: {
                    show: true,
                    color: "#999"
                },
                min: Chart.Y.length ? Math.min(...Chart.Y) : 0,
    max: Chart.Y.length ? Math.max(...Chart.Y) : 1,
            },
            series: [
                {
                    data: Chart.Y,
                    type: "line",
                    areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                        { offset: 0, color: "rgba(66,235,5,.5)" },
                        { offset: 1, color: "rgba(66,235,5,0)" }
                        ]
                    )
                    },
                    smooth: true,
                    itemStyle: {
                        color: "#42eb05",
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                },
            ],
        };

        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [Chart]);
//#endregion
    

// MAIN COMPONENT
    return (
        <div className="history">
            <div className="header-bar">
                <div className="change-sec">
                    <div className="node">
                        <p>open</p>
                        <p>{Chart.Y[0]}</p>
                    </div>
                    <div className="node">
                        <p>last</p>
                        <p>{Chart.Y[Chart.Y.length-1]}</p>
                    </div>
                    <div className="node">
                        <p>change</p>
                        <p  className='in'>{Number(Chart.Y[Chart.Y.length-1]-Chart.Y[0]).toFixed(2)}</p>
                    </div>
                    <div className="node">
                        <p>% change</p>
                        <p  className='in'>{Number(((Chart.Y[Chart.Y.length-1]-Chart.Y[0])/Chart.Y[0])*100).toFixed(2)}%</p>
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