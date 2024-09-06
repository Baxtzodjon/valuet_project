import React from "react";
import { Doughnut } from "react-chartjs-2";
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
    elements,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

function DoughnutChart() {

    const data = {
        labels: ['Ethereum', 'Bitcoin', 'Dash'],
        datasets: [
            {
                data: [18, 64, 18], // Значения в процентах для Ethereum, Bitcoin и Dash
                backgroundColor: ['#F5FBFE', '#018FFF', '#FAD679'], // Цвета для каждой части диаграммы
                hoverBackgroundColor: ['#f9f9f9', '#36a2eb', '#ffce56'],
                borderWidth: 0,
                borderColor: 'transparent',
                fill: false,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom', // Позиция легенды
                labels: {
                    usePointStyle: true,
                },
                display: false,
            },
        },
        elements: {
            point: {
                pointStyle: 'circle'
            },
        },
        responsive: true,
        cutout: '75%',
        maintainAspectRatio: false,
        color: '#FFFFFF',
    };

    return (
        <>

            <div className={`relative flex items-center justify-center flex-col w-[280px] h-[312px] bg-chart-background rounded-[5px] shadow-custom-chart px-6`}>

                <div>

                    <h4 className="absolute top-4 left-6 text-[#FFFFFF] text-[14px] leading-[19px] font-bold">Balance</h4>

                </div>

                <div className="shadow_gradient w-[146px] h-[146px] mt-4">

                    <Doughnut data={data} options={options} />

                    <div className="flex items-center justify-center flex-col gap-[6px] text-center mt-[-95px]">

                        <strong className="text-[#0097E8] text-[16px] leading-[22px]">BALANCE</strong>

                        <span className="text-[#FFFFFF] text-[18px] leading-[25px] font-bold">8 200$</span>

                    </div>

                </div>

                <div className="flex items-center justify-center flex-col gap-[9px] mt-6">

                    <div className="flex items-center justify-center gap-[79px]">

                        <div className="flex items-center gap-2">

                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-[#FFFFFF80] rounded-full">

                                <div className="w-[6px] h-[6px] bg-[#F5FBFE] rounded-full"></div>

                            </div>

                            <h5 className="text-[#FFFFFF] text-[12px] leading-[16px]">Ethereum</h5>

                        </div>

                        <div>

                            <div className="text-[#FFFFFF] text-[12px] leading-[16px] font-semibold">18%</div>

                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-[92px]">

                        <div className="flex items-center gap-2">

                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-[#4E93F580] rounded-full">

                                <div className="w-[6px] h-[6px] bg-[#4E93F5] rounded-full"></div>

                            </div>

                            <h5 className="text-[#FFFFFF] text-[12px] leading-[16px]">Bitcoin</h5>

                        </div>

                        <div>

                            <div className="text-[#4E93F5] text-[12px] leading-[16px] font-semibold">64%</div>

                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-[103px]">

                        <div className="flex items-center gap-2">

                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-[#CCCCCC80] rounded-full">

                                <div className="w-[6px] h-[6px] bg-[#FAD679] rounded-full"></div>

                            </div>

                            <h5 className="text-[#FFFFFF] text-[12px] leading-[16px]">Dash</h5>

                        </div>

                        <div>

                            <span className="text-[#FAD679] text-[12px] leading-[16px] font-semibold">18%</span>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default DoughnutChart;