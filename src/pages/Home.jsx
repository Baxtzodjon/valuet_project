import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    elements,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

function Home() {

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
            },
        },
        elements: {
            point: {
                pointStyle: 'circle'
            },
        },
        responsive: true,
        cutout: '70%',
        maintainAspectRatio: false,
        color: '#FFFFFF'
    };

    const BalanceChart = () => {
        return (
            <div className="w-[250px] h-[250px]">

                <Doughnut data={data} options={options} />

                <div className="flex items-center justify-center flex-col gap-[6px] text-center mt-[-175px]">

                    <strong className="text-[#0097E8] text-[21px] leading-[22px]">BALANCE</strong>

                    <span className="text-[#FFFFFF] text-[18px] leading-[25px] font-bold">8 200$</span>

                </div>

            </div>
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

            {/* <h1 className="bg-red-500">Home</h1>

            <Link to={"/sign-in"}>Login</Link>

            <Link to={"/sign-up"}>Log Out</Link>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem eveniet ex, repellendus sed, sapiente pariatur id accusantium quo illo voluptates eius. Neque libero velit distinctio quae sed? Magnam, facere.</p> */}

            <div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-10">

                        <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Overview</h4>

                        <span className="text-[#54669C] text-[14px] leading-[19px] font-semibold capitalize">{formatDate()}</span>

                    </div>

                    <div>

                        <button className="w-[125px] h-[32px] bg-text-radial-gradient rounded-[25px] text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">Add widget</button>

                    </div>

                </div>

                <div>

                    {/* <div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae quisquam, alias pariatur, ea obcaecati maiores ut commodi deleniti dicta, exercitationem cum soluta tempora nesciunt odit voluptas laborum repellat facilis.</p>

                    </div> */}

                </div>

            </div>

        </>
    )
}

export default Home;