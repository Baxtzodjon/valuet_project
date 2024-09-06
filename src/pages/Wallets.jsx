import React from "react";
import DoughnutChart from "../components/DoughnutChart";

function Wallets() {

    return (
        <>

            <div>

                <div className="mb-6">

                    <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Wallets</h4>

                </div>

                <div>

                    <div>

                        <DoughnutChart stylize={"yellow"} />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Wallets;