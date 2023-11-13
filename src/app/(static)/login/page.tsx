'use client'

import Logo from "@/elements/Logo";
import LoginAPI from './loginUser';
import React, { useState,useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn,logOut } from '@/Redux/slices/auth-slice';

    

function LoginPage (){
    const [backgroundColor, setBackgroundColor] = useState('bg2');
    const handleSignIn = (event:any) => {
        event.preventDefault();
        console.log(event);
        const x= LoginAPI('admin@admin.com', 'admin'); 
        console.log(x)
      };
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
          setBackgroundColor(bodyBackgroundColor);
        }
      }, []);


return (
    
    <div
   
    className='bg-bg2  z-2 w-screen h-screen top-0 left-0 absolute flex items-center justify-center'>


    <div className="w-full max-w-xs">
            <div className="w-full shadow-lg  bg-inner py-4  max-w-xs">
                <div className="rounded-lg flex flex-col space-y-4 justify-center  px-8 py-6 mb-4">
                    <div className="">
                        <Logo width={70} classes='flex  justify-center '  height={70} />
                    </div>
                    <div className="text-white text-xl text-center mb-4 font-bold">
                        Sign In
                    </div>
                    <form onSubmit={handleSignIn}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
        <input
            type="text" id="email" placeholder="Enter email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
        <input
            type="password" id="password" 
            placeholder="Enter Password" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      
      </div>
      <div className="mb-6 flex justify-center">
      <button
        type='submit'
        className={`font-bold py-2 px-4 rounded focus:outline-none bg-blue-500 hover:bg-blue-700 text-white focus:shadow-outline`}
      
    >
        Sign in
    </button>
      </div>
    </form>
                </div>
              
            </div>
        </div>
    </div>
);
 }

export default LoginPage;