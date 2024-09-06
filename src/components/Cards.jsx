import React from "react";

function Cards({ bg, card }) {
    return (
        <>

            <div className={`relative flex items-center justify-center w-[315px] ${card.bg} h-[148px] rounded-[5px] p-4`}>

                <h5 className="absolute top-4 left-4 text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">{card.name}</h5>

                <div className="flex items-center justify-center mt-4">

                    <div className={`flex items-center justify-center w-16 h-16 bg-[${card.round_bg_fir}] rounded-full`}>

                        <div className={`flex items-center justify-center w-[50px] h-[50px] bg-[${card.round_inner_bg}] rounded-full`}>

                            <img src={card.image} alt={card.name} />

                        </div>

                    </div>

                    <div className="flex flex-col gap-1 ml-2 mr-[19px]">

                        <span className="text-[#FFFFFF] text-[14px] leading-[19px] font-semibold">600 {card.currency}</span>

                        <small className="text-[#616A8B] text-[12px] leading-[16px] font-bold">$30,000,000</small>

                    </div>

                    <div className="flex items-center justify-center flex-col gap-[6px]">

                        <div className="flex flex-col gap-[6px]">

                            <div className="flex items-center gap-[10px]">

                                <div>

                                    <img src="/icons/up.png" alt="" />

                                </div>

                                <div className="flex flex-col gap-[2px]">

                                    <span className="text-[#FFFFFF] text-[8px] leading-[11px]">$1 200= 0,074 btc</span>

                                    <small className="text-[#FFFFFF] text-[6px] leading-[8px] font-thin">1 BTC = $6 542, 35</small>

                                </div>

                            </div>

                            <div>

                                <div className="w-full h-[1px] bg-[#644696]"></div>

                            </div>

                        </div>

                        <div className="flex items-center gap-[10px]">

                            <div>

                                <img src="/icons/down.png" alt="" />

                            </div>

                            <div className="flex flex-col gap-[2px]">

                                <span className="text-[#FFFFFF] text-[8px] leading-[11px]">$1 200= 0,034 btc</span>

                                <small className="text-[#FFFFFF] text-[6px] leading-[8px]">1 BTC = $6 264, 35</small>

                            </div>

                        </div>

                        <div className="flex flex-col gap-[6px]">

                            <div>

                                <div className="w-full h-[1px] bg-[#644696]"></div>

                            </div>

                            <div className="flex items-center gap-[10px]">

                                <div>

                                    <img src="/icons/down.png" alt="" />

                                </div>

                                <div className="flex flex-col gap-[2px]">

                                    <span className="text-[#FFFFFF] text-[8px] leading-[11px]">$1 200= 0,075 btc</span>

                                    <small className="text-[#FFFFFF] text-[6px] leading-[8px] font-thin">1 BTC = $6 642, 22</small>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Cards;