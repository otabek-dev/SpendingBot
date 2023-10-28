import './App.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function App() {
  const expenseData = {
    labels: ["Продукты", "Транспорт", "Жилье", "Развлечения", "Здоровье"],
    datasets: [
      {
        data: [250, 150, 500, 100, 200], // Здесь укажите суммы расходов для каждой категории
        backgroundColor: ["#FF5733", "#FFC300", "#33FF57", "#336CFF", "#B233FF"], // Цвета для каждой секции
      },
    ],
  };

  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="container">
      <Doughnut data={expenseData} />
    </div>
  )
}

export default App
