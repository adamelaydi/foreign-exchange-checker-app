// HOOKS
import { useEffect } from 'react';
import { useRef } from 'react';
// MATERIAL UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// STYLING
import "../styling/History.css"
// echarts library
import * as echarts from 'echarts';
import { Height, WidthFull } from '@mui/icons-material';


export default function History(){
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const option = {
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                min: 300,
                max: 1400
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
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
    }, []);

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
                    <Button className='btn' variant="text">1d</Button>
                    <Button  className='btn' variant="text">1w</Button>
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