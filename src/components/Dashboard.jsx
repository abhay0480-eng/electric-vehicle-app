import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import evData from '../Data.json'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [selectDate, setSelectDate] = useState(new Date(), new Date());
    const startYear = selectDate[0]?.getFullYear();
    const endYear = selectDate[1]?.getFullYear();
    
    const filteredData = evData.filter(item => {
      const modelYear = item['Model Year'];
      return modelYear >= startYear && modelYear <= endYear;
    });

    console.log("selectDate",filteredData.length);

    const chartData = {
      labels: filteredData.map(item => item.Model), // Label each item by its model
      datasets: [
        {
          label: `Electric Range from ${startYear} to ${endYear} Models`,
          data: filteredData.map(item => item['Electric Range']), // Values for the bar chart
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }
      ]
    };

    const options = {
      responsive: true,
      scales: {
        x: {
          ticks: {
            beginAtZero: true,
          },
        },
        y: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
    };


    
  return (
    <div className=''>
      <div>
        <p>Choose Model Year</p>
        <Calendar
          onChange={setSelectDate}   // Correct onChange handling for Calendar component
          value={selectDate}
          view="decade"          // Set view to decade to show years
          minDetail="decade"     // Restrict to only showing years
          maxDetail="decade"
          selectRange={true} 
        />
      </div>
      <div >
      {filteredData?.length > 0 ? (
        <Bar data={chartData} options={options}/>
      ) : (
        <p>No data available for the selected year</p>
      )}
      </div>
      
    </div>
  )
}

export default Dashboard
