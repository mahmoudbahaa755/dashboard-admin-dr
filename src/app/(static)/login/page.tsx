'use client'

import Logo from "@/elements/Logo";
import LoginAPI from './loginUser';
import React, { ReactNode,useState,useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn,logOut } from '@/Redux/slices/auth-slice';
interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    children: ReactNode;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ type, className, children, ariaLabel }) => (
    <button
        type={type}
        className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

    
interface InputFieldProps {
    type: 'text' | 'password' | 'email' | 'number';
    id: string;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, id, placeholder }) => (
    <div className="relative">
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
);
function LoginPage (){
    const [backgroundColor, setBackgroundColor] = useState('bg2');

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
          setBackgroundColor(bodyBackgroundColor);
        }
      }, []);
    const handleSignIn = () => {
        const x= LoginAPI('admin@admin.com', 'admin'); 
        console.log(x);
     };
     console.log(backgroundColor);

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
                            <label htmlFor="username" className="block text-white font-bold mb-2">Email</label>
                            <InputField type="text" id="username" placeholder="Enter Username" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
                            <InputField type="password" id="password" placeholder="Enter Password" />
                        </div>
                    
                        <div className="mb-6 flex justify-center">
                            <Button type="submit" 
                            // onClick={handleSignIn}
                             className="bg-blue-500 hover:bg-blue-700 text-white">Sign In</Button>
                        </div>
                   
                       
                    </form>
                </div>
              
            </div>
        </div>
    </div>
);
 }

export default LoginPage;