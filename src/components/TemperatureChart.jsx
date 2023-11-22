import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useSensorContext } from "../context/SensorContext";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function TemperatureChart() {
  const { data } = useSensorContext();

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const dataGrafica = {
    labels: days,
    datasets: [
      {
        data: [29, 28, 27, 30, data.temperatura],
        label: "Temperatura",
        backgroundColor: "#f26c6d",
        borderColor: "#f26c6d",
        pointRadius: 0,
      },
      {
        data: [64, 66, data.humedad, data.humedad, data.humedad],
        label: "Humedad",
        backgroundColor: "#3498db",
        borderColor: "#3498db",
        pointRadius: 0,
      },
      {
        data: [50, 45, data.gasMetano * 50, data.gasMetano * 50, data.gasMetano * 50], // Multiplicamos por 50
        label: "Gas Metano",
        backgroundColor: "#2ecc71",
        borderColor: "#2ecc71",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => value + "%",
          font: {
            size: 12,
          },
        },
        grid: {
          borderDash: [10],
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    titles: {
      y: {
        display: true,
        text: "Valor (%)",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontSize: 12,
        fontColor: "black",
        fontStyle: "bold",
      },
    },
  };

  return (
      <Bar data={dataGrafica} options={options}></Bar>
  );
}

export default TemperatureChart;