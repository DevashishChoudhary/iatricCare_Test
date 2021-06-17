import React from 'react'
import BarChart from '../components/Charts/BarChart/BarChart'
import LineChart from '../components/Charts/LineChart/LineChart'
import PieChart from '../components/Charts/PieChart/PieChart'
import Dchart from '../components/Charts/DoughnutChart/DoughnutChart'

const Home = () => {
    return (
        <div>
            <LineChart/>
            <div>
                <PieChart />
                <Dchart/>
            </div>
            <BarChart />
        </div>
    )
}

export default Home;
