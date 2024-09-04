import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg_fir from "/images/back_first.png"
import bg_sec from "/images/back_sec.png"
import user_icon from "/icons/user.png"
import lock_icon from "/icons/lock.png"
import quadrangle from "/images/quadrangle.png"
import triangle_first from "/images/triangle_fir.png"
import triangle_second from "/images/triangle_sec.png"

function Login() {
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    const usenavigate = useNavigate()

    const ProceedLogin = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/user/" + password).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                console.log('Please Enter valid email');
            } else {
                if (resp.password === password) {
                    console.log('Success');
                    usenavigate('/sign-in')
                } else {
                    console.log('Please Enter valie credentials');
                }
            }
        }).catch((err) => {
            console.log(err)
        })
            
    }

    return (
        <>

            {/* <div className="bg-custom-radial-gradient w-full h-[100vh] flex items-center justify-center">

                <form action="" className="flex items-center justify-center flex-col gap-4" onSubmit={ProceedLogin}>

                    <h1 className="text-white text-3xl font-semibold">Login</h1>

                    <input type="email" name="email" id="email" placeholder="E-mail or Login" value={email} onChange={e => updateEmail(e.target.value)} />

                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => updatePassword(e.target.value)} />

                    <button type="submit" className="capitalize p-2 w-[250px] h-[55px] rounded-2xl bg-yellow-400 text-white">login</button>
                    <Link to={'/sign-up'} className="text-red-800 text-3xl font-bold hover:underline duration-300">New User</Link>

                </form>

            </div> */}

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

                    <h1 className="text-white text-[36px] leading-[42px] font-semibold pb-[62px]">Login</h1>

                    <form action="" className="flex items-center justify-center flex-col" onSubmit={ProceedLogin}>

                        <div className="relative">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center">

                                <img src={user_icon} alt="" />

                            </div>

                            <input type="text" name="email" id="email" placeholder="E-mail or Login" value={email} onChange={e => updateEmail(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="relative mt-[26px]">

                            <div className="absolute top-[12px] left-[16px] w-[35px] h-[35px] border-2 border-solid border-[#5FB2FF] rounded-full flex items-center justify-center text-white">

                                <img src={lock_icon} alt="" />

                            </div>

                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => updatePassword(e.target.value)} required className="w-[380px] h-[58px] bg-[#2E3558] rounded-lg outline-none text-[#616A8B] text-[16px] leading-[19px] pl-[66px]" />

                        </div>

                        <div className="flex items-center justift-center gap-[32px] mt-[64px]">

                            <Link to={'/sign-up'} className="w-[105px] h-[42px] rounded-lg bg-btn-background text-[#949EC0] text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN UP</Link>
                            <button className="w-[105px] h-[42px] rounded-lg bg-btn-background_sec text-white text-[16px] leading-[19px] font-bold flex items-center justify-center hover:scale-105 duration-300">SIGN IN</button>

                        </div>

                    </form>

                    <Link to={'/'} className="pt-[51px] text-[#5FB2FF] text-[16px] leading-[17px] border-b-[1px] border-solid border-[#5FB2FF]">Forgot your password?</Link>

                    {/* <button className="pt-[103px] text-[#5FB2FF] text-[16px] leading-[17px] border-b-[1px] border-solid border-[#5FB2FF]">Forgot your password?</button> */}

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

export default Login;