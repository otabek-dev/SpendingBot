import './App.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useEffect, useState} from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'sum',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    axios.get('https://e5c7-194-93-24-99.ngrok-free.app/get-spendings', {
      headers: {
        "ngrok-skip-browser-warning": "6024"
      }})
      .then((response) => {
        const entries = Object.entries(response.data);
        const labels = [];
        const data = [];

        entries.forEach(([key, value]) => {
          labels.push(key);
          data.push(value);
        });

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'sum',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса на бэкенд:', error);
      });
  }, []);

  if (!chartData.labels.length) {
    return <div className='container'>Loading...</div>;
  }

  return (
    <div className='container'>
      <Pie data={chartData} style={{marginBottom: '30px'}}/>

      {chartData.labels.map((label , index) => (
          <div className='elements' key={index}>
            <span>{label}</span>
            <span>{chartData.datasets[0].data[index]} UZS</span>
          </div>
      ))}
    </div>
  )
}

export default App
