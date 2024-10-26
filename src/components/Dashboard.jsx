import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import evData from '../Data.json'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [selectDate, setSelectDate] = useState(new Date(), new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const startYear = selectDate[0]?.getFullYear();
    const endYear = selectDate[1]?.getFullYear();
    
    const filteredData = evData.filter(item => {
      const modelYear = item['Model Year'];
      return modelYear >= startYear && modelYear <= endYear;
    });

    console.log("selectDate",filteredData.length);

    // const chartData = {
    //   labels: filteredData.map(item => item.Model), // Label each item by its model
    //   datasets: [
    //     {
    //       label: `Electric Range from ${startYear} to ${endYear} Models`,
    //       data: filteredData.map(item => item['Electric Range']), // Values for the bar chart
    //       backgroundColor: 'rgba(75, 192, 192, 0.6)',
    //       borderColor: 'rgba(75, 192, 192, 1)',
    //       borderWidth: 1,
    //     }
    //   ]
    // };

    const chartData = {
      labels: filteredData.map(item => item.Model), // Label each item by its model
      datasets: [
        {
          label: `Electric Range Distribution for ${startYear} to ${endYear} Models`,
          data: filteredData.map(item => item['Electric Range']), // Values for the pie chart
          backgroundColor: filteredData.map(
            (item, index) => `hsl(${(index * 45) % 360}, 70%, 60%)`
          ), // Generates a different color for each item
          borderColor: 'rgba(255, 255, 255, 1)',
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
        <button onClick={()=>setShowCalendar(pre=>!pre)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white py-2 px-10 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Choose Model Year</button>
       {  filteredData?.length < 0 || showCalendar && <div>
        <Calendar
          onChange={setSelectDate}   // Correct onChange handling for Calendar component
          value={selectDate}
          view="decade"          // Set view to decade to show years
          minDetail="decade"     // Restrict to only showing years
          maxDetail="decade"
          selectRange={true} 
        />
        </div>}
      </div>
      <div className='max-h-96'>
      {filteredData?.length > 0 ? (
        <Pie data={chartData} options={options}/>
      ) : (
        <p>No data available for the selected year</p>
      )}
      </div>
      
    </div>
  )
}

export default Dashboard
