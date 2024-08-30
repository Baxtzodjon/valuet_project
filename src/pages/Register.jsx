import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg_fir from "/images/back_first.png"
import bg_sec from "/images/back_sec.png"
import user_icon from "/icons/user.png"
import lock_icon from "/icons/lock.png"
import quadrangle from "/images/quadrangle.png"
import triangle_first from "/images/triangle_fir.png"
import triangle_second from "/images/triangle_sec.png"

function Register() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        let registerobj = { name, surname, email, password }

        // console.log(registerobj);

        fetch("http://localhost:8080/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(registerobj)
        })
            .then((res) => { console.log(res) })
        navigate('/')
            .catch((err) => console.log(err))
    }

    return (
        <>

            <div className="bg-custom-radial-gradient w-full h-[100vh] flex items-center justify-center gap-[259px]">

                <div className="absolute bottom-0 right-0">

                    <img src={bg_sec} alt="" />

                </div>

                <div className="absolute bottom-0 right-0">

                    <img src={bg_fir} alt="" />

                </div>

                <div className="absolute top-[151px] left-[30px]">

                    <img src={triangle_first} alt="" />

                </div>

                <div className="absolute top-[82px]">

                    <img src={quadrangle} alt="" />

                </div>

                <div className="absolute bottom-[160px] right-[487px]">

                    <img src={triangle_second} alt="" />

                </div>

                <div className="w-[480px] h-[595px] py-[40px] px-[50px] flex items-center justify-center flex-col bg-form-background shadow-custom z-10">

                    <h1 className="text-white text-[36px] leading-[42px] font-semibold pb-[31px]">Welcome!</h1>

                    <form action="" className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>

                        <div className="relative">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center">

                                <img src={user_icon} alt="" />

                            </div>

                            <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="relative my-[13px]">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center text-white">

                                <i className='bx bxs-user-detail'></i>

                            </div>

                            <input type="text" name="surname" id="surname" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="relative">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center text-white">

                                <i className='bx bxs-envelope'></i>

                            </div>

                            <input type="email" name="email" id="email" placeholder="E-mail or Login" value={email} onChange={e => setEmail(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="relative mt-[13px]">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center">

                                <img src={lock_icon} alt="" />

                            </div>

                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="flex items-center justift-center gap-[32px] mt-[32px]">

                            {/* <Link to={'/sign-in'} className="w-[105px] h-[42px] rounded-lg bg-btn-background text-[#949EC0] text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN IN</Link> */}
                            <button className="w-[105px] h-[42px] rounded-lg bg-btn-background text-[#949EC0] text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN IN</button>
                            <button className="w-[105px] h-[42px] rounded-lg bg-btn-background_sec text-white text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN UP</button>
                            {/* <Link to={'/'} className="w-[105px] h-[42px] rounded-lg bg-btn-background_sec text-white text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN UP</Link> */}

                        </div>

                    </form>

                    {/* <Link to={'/'} className="pt-[51px] text-[#5FB2FF] text-[16px] leading-[17px] border-b-[1px] border-solid border-[#5FB2FF]">Forgot your password?</Link> */}

                    <button className="pt-[51px] text-[#5FB2FF] text-[16px] leading-[17px] border-b-[1px] border-solid border-[#5FB2FF]">Forgot your password?</button>

                </div>

                <div className="flex items-center justify-center flex-col">

                    <h1 className="bg-text-radial-gradient bg-clip-text text-transparent text-[72px] leading-[85px] font-bold tracking-wider text-left uppercase z-10">valuet</h1>

                    <div className="w-[175px] h-[2px] bg-[#1288E8] mt-[12px] mb-[24px] z-10"></div>

                    <span className="text-white text-[24px] leading-[28px] font-light z-10">Your currency dashboard</span>

                </div>

            </div>

        </>
    )
}

export default Register;