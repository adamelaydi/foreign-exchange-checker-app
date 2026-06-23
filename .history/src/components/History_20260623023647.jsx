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
    const [Chart,setChart]=useState({
        X:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        Y: [1 ,3 ,2 ,15,23 ,50],
    })
    const{value,setValue}=useContext(DataContext);
    
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
                min:Math.min(...Chart.Y),
                max: Math.max(...Chart.Y)
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

    return (
        <div className="history">
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
                        <p  className='in'>+0.0014</p>
                    </div>
                    <div className="node">
                        <p>% change</p>
                        <p  className='in'>^ +0.16%</p>
                    </div>
                </div>
                <Stack className='Stack' spacing={-3} direction="row">
                    <Button className='btn' variant="text" onClick={async ()=>{
                        if (value){
                        let a = await handleHistoryClick(value.base,value.quote,"1d")
                        setChart(a);
                        console.log(Chart)
                    }
                    }} >1d</Button>
                    <Button  className='btn' variant="text"  onClick={async ()=>{
                        if (value){
                        let a = await handleHistoryClick(value.base,value.quote,"1w")
                        setChart(a);
                        console.log(Chart)
                    }
                    }} >1w</Button>
                    <Button className='btn'  variant="text">1m</Button>
                    <Button className='btn'  variant="text">3m</Button>
                    <Button  className='btn' variant="text">1y</Button>
                    <Button  className='btn' variant="text">5y</Button>
                </Stack>
            </div>
            <div className='chart' ref={chartRef}>
                
            </div>
        </div>
    )
}