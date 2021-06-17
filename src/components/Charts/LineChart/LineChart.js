import React from 'react'
import { Line} from 'react-chartjs-2'

const LineChart = () => {
    return(<div style={{padding:'15px 0 0 0',margin:'0 0 10px 10px'}}>
        <Line 
            data={{
                labels: ['January','February','March','April','May','June'],
                datasets: [
                    {
                        label:'Anger',
                        data: [65, 59, 80, 81, 56, 55],
                        borderColor:'rgba(255, 99, 132, 1)'
                    },
                    {
                        label:'Disgust',
                        data: [25, 9, 50, 41, 36, 25],
                        borderColor:'rgba(54, 162, 235, 1)'
                    },
                    {
                        label:'Sad',
                        data: [12,45,58,67,82,14],
                        borderColor:'rgba(255, 206, 86, 1)'
                    },
                    {
                        label:'Happy',
                        data: [75,55,79,16,68,48],
                        borderColor:'rgba(75, 192, 192, 1)'
                    },
                    {
                        label:'Superise',
                        data: [47,24,46,66,84,27],
                        borderColor:'rgba(153, 102, 255, 1)'
                    },
                    {
                        label:'Fear',
                        data: [47,69,60,19,18,97],
                        borderColor:'rgba(255, 159, 64, 1)'
                    }
                ]
            }}
            
            width={500}
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
    </div>)
    
}
export default LineChart