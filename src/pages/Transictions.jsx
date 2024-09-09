import React, { useState } from "react";

function Transictions() {

    return (
        <>

            <div>

                <div className="flex items-center justify-between mb-[24px]">

                    <div>

                        <h4 className="text-[#FFFFFF] text-[18px] leading-[25px]">Transictions</h4>

                    </div>

                    <div>

                        <button className="w-[125px] h-[32px] bg-text-radial-gradient rounded-[25px] text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">Export History</button>

                    </div>

                </div>

                <div>

                    <div className="flex items-center justify-between">

                        <div>

                            <span className="text-[#616A8B] text-[18px] leading-[25px] font-semibold">Total 1,543</span>

                        </div>

                        <div className="flex gap-6">

                            <ActiveBtn />

                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-center flex-col gap-[16px] mt-[13px]">

                    <div className="flex items-center w-full h-[62px] bg-custom-blue rounded-[5px] p-4">

                        <div className="w-[30%] flex items-center gap-[33px]">

                            <h5 className="text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">AM 01:16</h5>

                            <span className="text-[#FFFFFF] text-[14px] leading-[19px]">24 dec 2018</span>

                            <div className="flex items-center justify-center w-8 h-8 border-2 border-solid border-[#1190F2] rounded-full">

                                <img src="/icons/bitcoin.png" alt="" className="w-3 h-4" />

                            </div>

                        </div>

                        <div className="w-[60%] flex items-center gap-6">

                            <img src="/icons/arrow_green.png" alt="" className="pt-2" />

                            <span className="text-[#FFFFFF] text-[14px] leading-[19px]">74EKRJMXkhKDR5dj34578fgirwE22sfg</span>

                        </div>

                        <div className="flex items-center gap-6">

                            <span className="text-[#FFFFFF] text-[14px] leading-[19px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">0.0085 USD</span>

                            <button className="bg-[#32395E] w-[85px] h-[30px] rounded-[5px] text-[#FFFFFF] text-[14px] leading-[19px] capitalize font-bold">waiting</button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

function ActiveBtn() {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = ['All', 'Send', 'Recent'];

    const handleClick = (index) => {

        setActiveIndex(index)

    }

    return (
        <>

            {items.map((item, index) => (
                <span key={index} onClick={() => handleClick(index)} className={`${activeIndex === index ? 'flex items-center justify-center px-3 py-1 bg-[#32395E] text-[#FFFFFF] text-[14px] leading-[19px] font-bold rounded-t-[5px] border-b-[3px] border-solid border-[#1288E8] cursor-pointer' : 'text-[#616a8b] text-[14px] leading-[19px] font-bold cursor-pointer'} transition duration-200`}>{item}</span>
            ))}

        </>
    )
}

export default Transictions;