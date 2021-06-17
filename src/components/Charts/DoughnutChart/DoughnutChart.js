import React from 'react'

import {Doughnut} from 'react-chartjs-2'

const Dchart = () =>{
    return(
        <div style={{position:'relative',left:'-400px',padding:'35px 0 0 0'}}>
            <Doughnut
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
                    borderWidth: 2,
                    howerOffSet:4
                }]

            }}
            height={300}
            width={100}
            options={{
                maintainAspectRatio:false,
                radius:120,
            }}
            />
        </div>
    )
}

export default Dchart