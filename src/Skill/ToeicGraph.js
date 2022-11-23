import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./ToeicGraph.css"

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend );
  

const ToeicGraph = ()=>{

    const options = {
        scales: {
          y: {
            suggestedMin: 200,
            suggestedMax: 1000
          }
        }
    }

    const data = {
        labels : ["",["Dec' 17","(Old TOEIC)"],["Jul' 18","(Old TOEIC)"],["Jan' 19","(Old TOEIC)"],["Dec' 19","(Old TOEIC)"],["Nov' 22","(Redesigned TOEIC)"],""],
        datasets: [
          {
            label: 'Total',
            data: [null,815,835,820,855,880,null],
            borderColor: 'black',
          },
          {
            label: 'Listening',
            data: [null,440,450,440,470,470,null],
            borderColor: 'green',
          },
          {
            label: 'Reading',
            data: [null,375,385,380,385,410,null],
            borderColor: 'blue',
            
          }
        ]
    };

    return (
        <div>
            <p className='graph-header'>TOEIC Score Trend</p>
            <div className='graph'><Line options={options} data={data} /></div>
        </div>
    )
}

export default ToeicGraph;
