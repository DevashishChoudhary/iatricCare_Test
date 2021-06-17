import React from 'react'

import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return(
        <div style={{padding:'15px 0 0 0',margin:'0 0 10px 10px'}}>
            <Bar
            data={{
                labels: ['Anger','Disgust','Sad','Happy','Surprise','Fear'],
                datasets: [{
                    label: '% of Emoation',
                    data: [10,70,10,60,35,15],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]

            }}
            width={600}
            height={400}
            options={{
                maintainAspectRatio:false,
                scales:{
                    yaxis:{
                        suggestedMin:0,
                        suggestedMax:100
                    }
                }
            }}
            />
        </div>
    )
}
export default BarChart;