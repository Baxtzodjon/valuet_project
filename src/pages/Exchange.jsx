import React, { useEffect, useState } from "react";

function Exchange() {

    return (
        <>

            <div>

                <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Exchange</h4>

            </div>

            <div className="flex items-center gap-6">

                <div className="flex flex-col gap-2">

                    <div>

                        <span className="text-[#616A8B] text-[14px] leading-[19px] font-semibold">From</span>

                    </div>

                    <div className="flex flex-col gap-8 w-full h-[226px] bg-currency-back rounded-[5px] p-8">

                        <div className="flex items-center justify-between">

                            <select name="" id="" className="outline-none bg-transparent text-[#c1c1c1] text-[24px] leading-[33px]">

                                <option value="bitcoin">Bitcoin</option>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="bitcoin">Bitcoin</option>

                            </select>

                            <img src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-88.png" alt="" />

                        </div>

                        <div className="flex items-center justify-between w-full h-[46px] bg-[#32395E] rounded-t-[5px] border-b-2 border-solid border-[#1288E8] p-4">

                            <h3 className="text-[#FFFFFF] text-[24px] leading-[33px] font-thin">0.45234</h3>

                            <h3 className="text-[#FFFFFF] text-[24px] leading-[33px] font-thin">BTC</h3>

                        </div>

                    </div>

                    <p>Lorem amet consectetur nisi saepe Lorem ipsum dolor sit amet. dolor sit amet sit am</p>

                </div>

                <div className="flex flex-col gap-2">

                    <div>

                        <span className="text-[#616A8B] text-[14px] leading-[19px] font-semibold">To</span>

                    </div>

                    <div className="flex flex-col gap-8 w-full h-[226px] bg-currency-back rounded-[5px] p-8">

                        <div className="flex items-center justify-between">

                            <select name="" id="" className="outline-none bg-transparent text-[#c1c1c1] text-[24px] leading-[33px]">

                                <option value="gridcoin">GridCoin</option>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="bitcoin">Bitcoin</option>

                            </select>

                            <img src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-88.png" alt="" />

                        </div>

                        <div className="flex items-center justify-between w-full h-[46px] bg-[#32395E] rounded-t-[5px] border-b-2 border-solid border-[#1288E8] p-4">

                            <h3 className="text-[#FFFFFF] text-[24px] leading-[33px] font-thin">1.45534</h3>

                            <h3 className="text-[#FFFFFF] text-[24px] leading-[33px] font-thin">GRC</h3>

                        </div>

                    </div>

                    <p>Lorem amet consectetur nisi saepe Lorem ipsum dolor sit amet. dolor sit amet sit am</p>

                </div>

            </div>

            <div>

                <button className="w-[125px] h-[42px] bg-currency-btn-back rounded-[8px] text-[#FFFFFF] text-[18px] leading-[25px] font-normal">Exchange</button>

            </div>

        </>
    )
}

export default Exchange;