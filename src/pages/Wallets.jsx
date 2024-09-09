import React, { useEffect } from "react";
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
import Cards from "../components/Cards";
import LineChart from "../components/LineChart";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

function Wallets() {

    const cards_data = [
        {
            "id": Math.random(),
            "name": "BitCoin",
            "image": "/icons/bitcoin.png",
            "round_bg_fir": "#4D337F80",
            "round_inner_bg": "#644696",
            "bg": "bg-card-fir-back",
        },
        {
            "id": Math.random(),
            "name": "Ethereum",
            "image": "/icons/ethereum.png",
            "round_bg_fir": "#4948A866",
            "round_inner_bg": "#5454BD",
            "bg": "bg-card-sec-back",
        },
        {
            "id": Math.random(),
            "name": "Dash",
            "image": "/icons/dash.png",
            "round_bg_fir": "#27A9D280",
            "round_inner_bg": "#27A9D2",
            "bg": "bg-card-third-back",
        }
    ]

    const recent_transactions = [
        {
            "id": Math.random(),
            "text": "Received BitCoin",
            "from_whom": "From Elon Musk",
            "money": "+",
        },
        {
            "id": Math.random(),
            "text": "Send BitCoin",
            "from_whom": "To Unknown",
            "money": "-",
        },
        {
            "id": Math.random(),
            "text": "Received BitCoin",
            "from_whom": "From Elon Musk",
            "money": "+",
        },
        {
            "id": Math.random(),
            "text": "Received BitCoin",
            "from_whom": "From Elon Musk",
            "money": "+",
        },
        {
            "id": Math.random(),
            "text": "Send BitCoin",
            "from_whom": "To Unknown",
            "money": "-",
        },
        {
            "id": Math.random(),
            "text": "Received BitCoin",
            "from_whom": "From Elon Musk",
            "money": "+",
        },
        {
            "id": Math.random(),
            "text": "Send BitCoin",
            "from_whom": "To Unknown",
            "money": "-",
        },
        {
            "id": Math.random(),
            "text": "Received BitCoin",
            "from_whom": "From Elon Musk",
            "money": "+",
        },
    ]

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

    const data_line_chart = {
        labels: ["JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER"],
        datasets: [
            {
                label: "Spending",
                data: [0, 6000, 4500, 8000, 4500, 14000],
                fill: false,
                borderColor: "#0097E8",
                backgroundColor: "#018FFF",
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                hoverRadius: 6,
                pointBackgroundColor: "#018FFF",
            },
        ],
    };

    const options_line_chart = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#54669C",
                },
            },
            y: {
                grid: {
                    color: "#11184E",
                },
                ticks: {
                    color: "#54669C",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
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

    const BigLineChart = () => {
        return (
            <div>

                <div className="w-full h-[351px]">

                    <Line data={data_line_chart} options={options_line_chart} />

                </div>

            </div>
        );
    };

    return (
        <>

            <div>

                <div className="mb-6">

                    <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Wallets</h4>

                </div>

                <div>

                    <div className="flex flex-col gap-6">

                        <div className="flex items-center gap-4">

                            <div className={`flex items-center justify-center gap-6 w-[293px] h-[148px] bg-chart-background rounded-[5px] shadow-custom-chart px-6`}>

                                <div className="shadow_gradient w-[105px] h-[105px]">

                                    <Doughnut data={data} options={options} />

                                    <div className="flex items-center justify-center flex-col gap-[6px] text-center mt-[-80px]">

                                        <strong className="text-[#616A8B] text-[16px] leading-[22px] font-normal">TOTAL</strong>

                                        <span className="text-[#FFFFFF] text-[18px] leading-[25px] font-bold">8 200$</span>

                                    </div>

                                </div>

                                <div className="flex items-center justify-center flex-col gap-[9px]">

                                    <div className="flex items-center justify-center gap-[17px]">

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

                                    <div className="flex items-center justify-center gap-[34px]">

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

                                    <div className="flex items-center justify-center gap-[44px]">

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

                            <div className="flex gap-6">

                                {cards_data.map(item => <WalletCards item={item} key={item.id} />)}

                            </div>

                        </div>

                        <div className="flex gap-6">

                            <div className="w-[650px] h-[395px] bg-line-chart-back rounded-[5px] p-6">

                                <BigLineChart />

                            </div>

                            <div className="transaction_blc">

                                <div className="flex flex-col gap-4">

                                    <h5 className="uppercase text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">recent transactions</h5>

                                    <div className="w-full h-[2px] bg-[#2D317A]"></div>

                                </div>

                                {recent_transactions.map(datas => <Recent_Transactions datas={datas} key={datas.id} />)}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

function WalletCards({ item }) {
    return (
        <>

            <div className={`relative w-[292px] h-[148px] ${item.bg} rounded-[5px] p-4`}>

                <h5 className="text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">{item.name}</h5>

                <div className="flex items-center justify-end gap-3">

                    <div className="flex items-end justify-end flex-col">

                        <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-semibold">5 248 USD</span>

                        <small className="text-[#616A8B] text-[12px] leading-[16px] font-bold">+2,59%</small>

                    </div>

                    <div>

                        <div className={`w-[56px] h-[56px] flex items-center justify-center rounded-full bg-[${item.round_bg_fir}]`}>

                            <div className={`w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[${item.round_inner_bg}]`}>

                                <img src={item.image} alt="" />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="absolute bottom-[2px]">

                    <LineChart />

                </div>

            </div>

        </>
    )
}

function Recent_Transactions({ datas }) {
    return (
        <>

            <div className="relative flex flex-col gap-3 mt-4">

                <div className="flex items-center justify-between">

                    <div className="absolute left-0 bottom-0 bg-news-blc-back-sec"></div>

                    <div className="flex flex-col gap-4">

                        <div className="flex items-center justify-center gap-4">

                            <div className="w-[100px] flex items-center gap-4">

                                <span className="text-gray-500 text-[12px] leading-[16px] font-bold">AM 01:16</span>

                                <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-solid border-blue-500">

                                    <img src="/icons/arrow_green.png" alt="" className="pt-[7px] rotate-[-90deg]" />

                                </div>

                            </div>

                            <div className="w-[330px]">

                                <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-bold">{datas.text}</p>

                                <span className="text-[#FFFFFF] text-[13px] leading-[16px] font-thin">{datas.from_whom}</span>

                            </div>

                            <div>

                                <span className="text-[#FFFFFF] text-[14px] leading-[16px] font-semibold">{datas.money} 4,800</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Wallets;