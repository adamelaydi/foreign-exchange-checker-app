// MATERIAL UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// STYLING
import "../styling/History.css"
// E
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
};

option && myChart.setOption(option);

export default function History(){
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
            <canvas>
                {myChart}
            </canvas>
        </div>
    )
}