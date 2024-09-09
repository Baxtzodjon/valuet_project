import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import DoughnutChart from "../components/DoughnutChart";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

function Home() {

    const wallet_data = [
        {
            "id": Math.random(),
            "name": "BitCoin",
            "currency": "BTC",
            "image": "/icons/bitcoin.png",
            "round_bg_fir": "#4D337F80",
            "round_inner_bg": "#644696",
            "bg": "bg-wallet-back",
        },
        {
            "id": Math.random(),
            "name": "GridCoin",
            "currency": "GRC",
            "image": "/icons/gridcoin.png",
            "round_bg_fir": "#AA5E6966",
            "round_inner_bg": "#BC5661",
            "bg": "bg-wallet-back-sec",
        },
    ]

    const wallet_data_sec = [
        {
            "id": Math.random(),
            "name": "Ethereum",
            "currency": "ETH",
            "image": "/icons/ethereum.png",
            "round_bg_fir": "#4948A866",
            "round_inner_bg": "#5454BD",
            "bg": "bg-wallet-back-third",
        },
        {
            "id": Math.random(),
            "name": "Aeternity",
            "currency": "AE",
            "image": "/icons/aeternity.png",
            "round_bg_fir": "#915D3B80",
            "round_inner_bg": "#C87038",
            "bg": "bg-wallet-back-fourth",
        }
    ]

    const news = [
        {
            "id": Math.random(),
            "date": "19 hours ago",
            "text": "SEC Fails to Show Court Blockvest Tokens Are Securitie",
        },
        {
            "id": Math.random(),
            "date": "23 hours ago",
            "text": "Report: Bitcoin Mining Doesn't Fuel Climate Change, It Benefits the Global Economy",
        },
        {
            "id": Math.random(),
            "date": "11.22, 15:27",
            "text": "A Look at the Multi-Currency Encrypted Messaging App 'Chat.Chat'",
        },
        {
            "id": Math.random(),
            "date": "11.21, 11:43",
            "text": "Four Ways To Commemorate Bitcoin's 10th Anniversary",
        },
        {
            "id": Math.random(),
            "date": "24 hours ago",
            "text": "SEC Fails to Show Court Blockvest Tokens Are Securitie",
        },
        {
            "id": Math.random(),
            "date": "8 hours ago",
            "text": "Report: Bitcoin Mining Doesn't Fuel Climate Change, It Benefits the Global Economy",
        },
        {
            "id": Math.random(),
            "date": "12.25, 16:44",
            "text": "A Look at the Multi-Currency Encrypted Messaging App 'Chat.Chat'",
        },
        {
            "id": Math.random(),
            "date": "7.28, 12:10",
            "text": "Four Ways To Commemorate Bitcoin's 10th Anniversary",
        },
    ]

    // const data = {
    //     labels: ['Ethereum', 'Bitcoin', 'Dash'],
    //     datasets: [
    //         {
    //             data: [18, 64, 18], // Значения в процентах для Ethereum, Bitcoin и Dash
    //             backgroundColor: ['#F5FBFE', '#018FFF', '#FAD679'], // Цвета для каждой части диаграммы
    //             hoverBackgroundColor: ['#f9f9f9', '#36a2eb', '#ffce56'],
    //             borderWidth: 0,
    //             borderColor: 'transparent',
    //             fill: false,
    //         },
    //     ],
    // };

    // const options = {
    //     plugins: {
    //         legend: {
    //             position: 'bottom', // Позиция легенды
    //             labels: {
    //                 usePointStyle: true,
    //             },
    //             display: false,
    //         },
    //     },
    //     elements: {
    //         point: {
    //             pointStyle: 'circle'
    //         },
    //     },
    //     responsive: true,
    //     cutout: '75%',
    //     maintainAspectRatio: false,
    //     color: '#FFFFFF',
    // };

    // Настройки графика
    const options_sec_chart = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#FFFFFF", // Цвет подписей по оси X
                },
            },
            y: {
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

    const data_sec = {
        labels: ["2", "4", "6", "8", "10", "12", "14", "16"], // Дни
        datasets: [
            {
                label: "Spending",
                data: [1000, 1500, 1200, 2000, 1800, 3000, 3500, 5000], // Значения трат
                fill: false,
                borderColor: "#0097E8", // Цвет линии
                backgroundColor: "#018FFF", // Цвет точек
                tension: 0.4, // Скругление линий
                pointRadius: 0,
                pointHoverRadius: 6,
                hoverRadius: 6,
                pointBackgroundColor: "#018FFF",
            },
        ],
    };

    const data_third = {
        labels: ["SEP 15", "SEP 16", "SEP 17", "SEP 18", "SEP 19", "SEP 20", "SEP 21", "SEP 22"], // Дни
        datasets: [
            {
                label: "Spending",
                data: [5500, 8000, 4500, 10000, 6000, 9500], // Значения трат
                fill: false,
                borderColor: "#0097E8", // Цвет линии
                backgroundColor: "#018FFF", // Цвет точек
                tension: 0.4, // Скругление линий
                pointRadius: 0,
                pointHoverRadius: 6,
                hoverRadius: 6,
                pointBackgroundColor: "#018FFF",
            },
        ],
    };

    // Настройки графика
    const options_third_chart = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#54669C", // Цвет подписей по оси X
                },
            },
            /* y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            }, */
            /* x: {
                grid: {
                    color: "rgba(255, 255, 255, 0.2)",
                },
                ticks: {
                    color: "#FFFFFF", // Цвет подписей по оси X
                },
            }, */
            y: {
                grid: {
                    color: "#11184E",
                },
                ticks: {
                    color: "#54669C", // Цвет подписей по оси Y
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

    const SpendingChart = () => {
        return (
            <div className="mt-6">

                <div className="w-full h-[163px]">

                    <Line data={data_sec} options={options_sec_chart} />

                </div>

            </div>
        );
    };

    const SpendingChartSec = () => {
        return (
            <div className="mt-6">

                <div className="w-full h-[163px]">

                    <Line data={data_third} options={options_third_chart} />

                </div>

            </div>
        );
    };

    const BalanceChart = () => {
        return (
            <>

                <div className="flex items-start justify-start gap-4">

                    <DoughnutChart />

                    <div className="w-[280px] h-[312px] bg-chart-background rounded-[5px] shadow-custom-chart px-6 py-4">

                        <div className="flex items-center justify-between">

                            <h4 className="text-[#FFFFFF] text-[14px] leading-[19px] font-bold">Spending</h4>

                            {/* <div className="flex items-center gap-1">

                                <span className="text-[#FFFFFF] text-[14px] leading-[19px] font-thin">January</span>

                                <img src="/icons/arrow_bottom.png" alt="" className="cursor-pointer" />

                            </div> */}

                            <div>

                                <select name="" id="" className="outline-none bg-transparent text-[#c1c1c1] text-[14px] leading-[19px] font-thin">

                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>

                                </select>

                            </div>

                        </div>

                        <div className="flex items-start justify-start flex-col gap-[6px] mt-8">

                            <h4 className="text-[#FFFFFF] text-[16px] leading-[22px] font-bold">$ 5,743.35</h4>

                            <small className="text-[#FFFFFF] text-[10px] leading-[11px] font-thin">total spending</small>

                        </div>

                        <SpendingChart />

                    </div>

                    <div className="w-[650px] h-[312px] flex flex-col gap-4">

                        <div className="flex gap-4">

                            {wallet_data.map(card => <Cards card={card} key={card.id} />)}

                        </div>

                        <div className="flex gap-4">

                            {wallet_data_sec.map(card => <Cards card={card} key={card.id} />)}

                        </div>

                        {/* <div className="w-[284px] h-[148px] bg-wallet-back"></div>

                        <div className="w-[284px] h-[148px] bg-wallet-back"></div> */}

                    </div>

                </div>

                <div className="flex items-start justify-start gap-4 mt-4">

                    <div className="w-[810px] h-[232px] bg-line-chart-back rounded-[5px] px-6 py-4">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-start gap-6">

                                <h5 className="text-[#FFFFFF] text-[14px] leading-[19px] font-bold">Market</h5>

                                <select name="" id="" className="outline-none bg-transparent text-[#c1c1c1] text-[14px] leading-[19px] font-thin">

                                    <option value="ethereum">Ethereum</option>
                                    <option value="bitcoin">Bitcoin</option>
                                    <option value="gridcoin">GridCoin</option>
                                    <option value="aeternity">Aeternity</option>

                                </select>

                            </div>

                            <div className="flex items-center justify-end">

                                <select name="" id="" className="outline-none bg-transparent text-[#c1c1c1] text-[14px] leading-[19px] font-thin">

                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>

                                </select>

                            </div>

                        </div>

                        <SpendingChartSec />

                    </div>

                    <div className="news_blc">

                        <div className="flex flex-col gap-2">

                            <h5 className="capitalize text-[#FFFFFF] text-[14px] leading-[19px] font-bold">recent news</h5>

                            <div className="w-full h-[2px] bg-[#2D317A]"></div>

                        </div>

                        {news.map(datas => <News_recent datas={datas} key={datas.id} />)}

                    </div>

                </div>

            </>
        );
    };

    function formatDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const weekday = date.toLocaleString('default', { weekday: 'long' });

        return `${day} ${month}, ${weekday}`;
    }

    return (
        <>

            <div>

                <div className="flex items-center justify-between mb-[24px]">

                    <div className="flex items-center gap-10">

                        <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Overview</h4>

                        <span className="text-[#54669C] text-[14px] leading-[19px] font-semibold capitalize">{formatDate()}</span>

                    </div>

                    <div className="flex gap-4">

                        <button className="w-[125px] h-[32px] bg-text-radial-gradient rounded-[25px] text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">Open Wallets</button>

                        <button className="w-[125px] h-[32px] bg-text-radial-gradient rounded-[25px] text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">Add Widget</button>

                    </div>

                </div>

                <div>

                    <div>

                        <BalanceChart />

                    </div>

                </div>

            </div>

        </>
    )
}

function News_recent({ datas }) {
    return (
        <>

            <div className="relative flex flex-col gap-3 mt-4">

                <div className="flex items-center justify-between">

                    <div className="absolute left-0 bottom-0 bg-news-blc-back-sec"></div>

                    <div className="w-[72px]">

                        <span className="text-[#FFFFFF] text-[12px] leading-[16px] font-thin">{datas.date}</span>

                    </div>

                    <div className="w-[264px]">

                        <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-bold">{datas.text}</p>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Home;