'use client';

import MainLayout from "@/components/mainLayout";
import { goTo } from "@/components/server/navigator";
import { loginUser, regisUser } from "@/components/server/prisma/userModel";
import { quick } from "@/config/fonts";
import { userModel } from "@/storage/local/user";
import { faKey, faSpinner, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrismaClient } from "@prisma/client";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
    const [showPass, setShowPass] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [formRegis, setFormRegis] = useState({
        fullname: '',
        username: '',
        password: ''
    })
    const [loginLoading, setLoginLoading] = useState(false);
    const [regisLoading, setRegisLoading] = useState(false);

    const submitLogin = async (e: FormEvent) => {
        e.preventDefault();
        
        setLoginLoading(state => !state);
        const {userData} = await loginUser(loginData.username, loginData.password);
        if(userData) {
            setLoginLoading(state => !state);
            toast.success('Successfully Logged in!');
        }else{
            setLoginLoading(state => !state);
            toast.error('Wrong username / password!');
        }
    }

    const submitRegis = async (e: FormEvent) => {
        e.preventDefault();

        setRegisLoading(state => !state);
        const result = await regisUser(formRegis.username, formRegis.password, formRegis.fullname);
        if(result.success) {
            setRegisLoading(state => !state);
            setFormRegis({
                fullname: '',
                username: '',
                password: ''
            })
            return toast.success('Successfully Registered! You can sign in now!');
        }else{
            setRegisLoading(state => !state);
            return toast.error('Username has already exist!');
        }
    }

    return (
        <MainLayout>
            <Toaster />
            <div className="w-5/6 md:w-1/2 p-5 bg-white/10 backdrop-blur-md  rounded-lg">
                <div className="grid grid-cols-2 md:divide-x-2 divide-white/40">
                    <div className="hidden md:block w-full md:col-span-1 md:pr-5">
                        <h1 className="text-xl font-extralight">
                            Sign in with your Account<span className="font-bold text-orange-600">.</span>
                        </h1>
                        <form onSubmit={submitLogin} className="my-5 space-y-3">
                            <div className="relative w-full">
                                <input required onChange={e => setLoginData(state => state = {...state, username: e.target.value})} type="text" className="w-full h-10 rounded bg-white/10 outline-none pl-3 peer" placeholder="Username" />
                                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-white peer-focus:text-white transition-all duration-300 peer-placeholder-shown:text-white/10">
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-inherit" />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <input required onChange={e => setLoginData(state => state = {...state, password: e.target.value})} type={showPass ? 'text' : 'password'} className="w-full h-10 rounded bg-white/10 outline-none pl-3 peer" placeholder="Password" />
                                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-white peer-focus:text-white transition-all duration-300 peer-placeholder-shown:text-white/10">
                                    <FontAwesomeIcon icon={faKey} className="w-5 h-5 text-inherit" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                    <input  type="checkbox"  id="" className="accent-white rounded-full outline-none" />
                                    <p className="font-extralight text-sm">
                                        Remember me
                                    </p>
                                </div>
                                <button onClick={() => setShowPass(state => !state)} type="button" className="text-xs text-white/60 hover:text-white focus:text-white outline-none transition-all duration-300">
                                    {showPass ? 'Hide Password' : 'Show Password'}
                                </button>
                            </div>
                            {!loginLoading ? (
                                <button type="submit" className=" w-full rounded bg-white/10 text-white/60 hover:text-white flex items-center justify-center py-2 transition-all duration-300 focus:bg-white/20 focus:text-white">
                                    Sign in
                                </button>
                            ) : (
                                <button disabled type="submit" className=" w-full rounded bg-white/10 text-white/60  flex items-center justify-center py-2 ">
                                    <FontAwesomeIcon icon={faSpinner} className="w-6 h-6 text-inherit animate-spin" />
                                </button>
                            )}
                        </form>
                        <div className="grid grid-cols-2 text-sm">
                            <div className="justify-center items-center w-full flex col-span-1 md:col-span-2">
                                <a href="" className="text-white/60 hover:text-white focus:text-white transition-all duration-300">
                                    Forgot Password
                                </a>
                            </div>
                            <div className="justify-center items-center w-full flex md:hidden">
                                <a href="" className="text-white/60 hover:text-white focus:text-white transition-all duration-300">
                                    Create an Account
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-2 md:col-span-1 md:pl-5">
                        <h1 className="text-xl font-extralight">
                            Create your Account<span className="font-bold text-orange-600">.</span>
                        </h1>
                        <form onSubmit={submitRegis} className="my-5 space-y-3">
                            <div className="relative w-full">
                                <input required value={formRegis.fullname} onChange={e => setFormRegis(state => state = {...state, fullname: e.target.value})} type="text" className="w-full h-10 rounded bg-white/10 outline-none pl-3 peer" placeholder="Fullname" />
                                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-white peer-focus:text-white transition-all duration-300 peer-placeholder-shown:text-white/10">
                                    <FontAwesomeIcon icon={faTag} className="w-5 h-5 text-inherit" />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <input required value={formRegis.username} onChange={e => setFormRegis(state => state ={...state, username: e.target.value})} type="text" className="w-full h-10 rounded bg-white/10 outline-none pl-3 peer" placeholder="Username" />
                                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-white peer-focus:text-white transition-all duration-300 peer-placeholder-shown:text-white/10">
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-inherit" />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <input required value={formRegis.password} onChange={e => setFormRegis(state => state = {...state, password: e.target.value})} type='text' className="w-full h-10 rounded bg-white/10 outline-none pl-3 peer" placeholder="Password" />
                                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-white peer-focus:text-white transition-all duration-300 peer-placeholder-shown:text-white/10">
                                    <FontAwesomeIcon icon={faKey} className="w-5 h-5 text-inherit" />
                                </div>
                            </div>
                            {!regisLoading ? (
                                <button type="submit" className=" w-full rounded bg-white/10 text-white/60 hover:text-white flex items-center justify-center py-2 transition-all duration-300 focus:bg-white/20 focus:text-white">
                                    Sign up
                                </button>
                            ) : (
                                <button disabled type="submit" className=" w-full rounded bg-white/10 text-white/60  flex items-center justify-center py-2 ">
                                    <FontAwesomeIcon icon={faSpinner} className="w-6 h-6 text-inherit animate-spin" />
                                </button>
                            )}
                        </form>
                        <div className="flex mt-3 justify-center w-full md:hidden">
                            <a href="/login" className="text-white/60 hover:text-white focus:text-white transition-all duration-300">
                                Already have an Account?
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}