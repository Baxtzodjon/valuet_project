import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const LineChart = () => {

    const data = {
        labels: ['Ethereum', 'Bitcoin', 'Dash', 'GridCoin', 'PeerCoin', 'Aeternity', 'LiteCoin'],
        datasets: [
            {
                label: 'Sample Data',
                data: [5500, 15000, 4500, 10000, 6000, 3500, 12000],
                backgroundColor: ['#F5FBFE', '#018FFF', '#FAD679'],
                hoverBackgroundColor: ['#f9f9f9', '#36a2eb', '#ffce56'],
                borderWidth: 3,
                borderColor: "#644696",
                hoverRadius: 6,
                pointRadius: 0,
                fill: false,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Отключить легенду
            },
            tooltip: {
                enabled: true,
                intersect: false,
                mode: "index",
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.raw.toFixed(2)}`
                    }
                }
            },
        },
        hover: {
            mode: "nearest",
            intersect: false,
        }
    };

    return (
        <div>

            <div className="w-[245px] h-[64px]">

                <Line data={data} options={options} />

            </div>

        </div>
    );
};

export default LineChart;