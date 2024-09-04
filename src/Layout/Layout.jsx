import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import menu from "/icons/candy_box_menu.png"
import wallet from "/icons/wallet.png"
import transaction from "/icons/transaction_icon.png"
import exchange from "/icons/exchange_icon.png"
import market from "/icons/market_icon.png"
import log_out from "/icons/log_out.png"
import message from "/icons/message.png"
import bell from "/icons/bell.png"

function Layout() {
    const [open, setOpen] = useState(true)
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(res => res.json())
            .then(res => setUser(res))
    }, []);

    return (
        <>

            <div className="bg-custom-radial-gradient flex">

                <aside className={`bg-aside-background shadow-aside-shadow min-h-screen ${open ? 'w-[300px]' : 'w-[72px]'} duration-500 py-[24px] px-[15px]`}>

                    <div className="flex items-center justify-center flex-col gap-1">

                        {/* <div className="text-3xl">

                            <i className='bx bx-menu-alt-right' onClick={() => setOpen(!open)}></i>

                        </div> */}

                        <h1 className={`bg-text-radial-gradient bg-clip-text text-transparent text-[24px] leading-[28px] font-bold tracking-wider text-left uppercase whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>valuet</h1>

                        <div className={`w-[100px] h-[2px] bg-[#1288E8] whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}></div>

                    </div>

                    <div className="flex flex-col gap-[24px] mt-[40px] ml-[32px]">

                        <Link to={'/'} className="flex items-center gap-[16px] p-2 hover:bg-[#32395E] duration-300 rounded-[5px]"><div><img src={menu} alt="" /></div> <h2 className={`whitespace-pre duration-500 text-white text-[14px] leading-[19px] font-bold ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Overview</h2></Link>

                        <Link to={'/'} className="flex items-center gap-[16px] p-2 hover:bg-[#32395E] duration-300 rounded-[5px]"><div><img src={wallet} alt="" /></div> <h2 className={`whitespace-pre duration-500 text-[#616A8B] text-[14px] leading-[19px] font-bold ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Wallets</h2></Link>

                        <Link to={'/'} className="flex items-center gap-[16px] p-2 hover:bg-[#32395E] duration-300 rounded-[5px]"><div><img src={transaction} alt="" /></div> <h2 className={`whitespace-pre duration-500 text-[#616A8B] text-[14px] leading-[19px] font-bold ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Transictions</h2></Link>

                        <Link to={'/'} className="flex items-center gap-[16px] p-2 hover:bg-[#32395E] duration-300 rounded-[5px]"><div><img src={exchange} alt="" /></div> <h2 className={`whitespace-pre duration-500 text-[#616A8B] text-[14px] leading-[19px] font-bold ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Exchange</h2></Link>

                        <Link to={'/'} className="flex items-center gap-[16px] p-2 hover:bg-[#32395E] duration-300 rounded-[5px]"><div><img src={market} alt="" /></div> <h2 className={`whitespace-pre duration-500 text-[#616A8B] text-[14px] leading-[19px] font-bold ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Market</h2></Link>

                    </div>

                    <div className="flex item-center justify-center">

                        <div className="absolute bottom-[130px] w-[172px] h-[2px] bg-[#018FFF]"></div>

                    </div>

                    <div className="flex flex-col gap-[24px] absolute bottom-[40px] left-[32px]">

                        <div>

                            <div className="flex items-center gap-[14px] w-[150px]">

                                <div className="w-[21px] h-[21px] border-2 border-solid border-[#018FFF] rounded-full"></div>
                                {user.map((user) => <span key={user.id} className="text-[#616A8B] text-[14px] leading-[19px] font-bold overflow-hidden text-ellipsis whitespace-nowrap">{user.name} {user.surname}</span>)}

                            </div>

                        </div>

                        <div>

                            <div className="flex items-center gap-[19px]">

                                <img src={log_out} alt="" />

                                <Link to={"/sign-up"} className="text-[#616A8B] text-[14px] leading-[19px] font-bold">Log Out</Link>

                            </div>

                        </div>

                    </div>

                </aside>

                <div className="container flex flex-col gap-7">

                    <header className="h-[88px] flex flex-col">

                        <div className="flex items-center justify-between">

                            <div>

                                <input type="text" placeholder="Search" className="inp_search" />

                            </div>

                            <div className="flex items-center justify-center gap-[32px]">

                                <img src={message} alt="" className="cursor-pointer" />

                                <img src={bell} alt="" className="cursor-pointer" />

                            </div>

                        </div>

                        <div className="w-full h-[2px] bg-[#2D317A]"></div>

                    </header>

                    <Outlet />

                </div>

                {/* <h1 className="text-red-500">Home</h1> */}

                {/* box-shadow: 0px -5px 25px 0px #00032080; */}

            </div>

        </>
    )
}

export default Layout;