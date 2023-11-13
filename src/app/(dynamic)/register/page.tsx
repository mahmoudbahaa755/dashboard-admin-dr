
import Logo from "@/elements/Logo";

import Input from "@/elements/Input";
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='bg-bg1 z-2   w-screen h-screen top-0 left-0 absolute flex items-center justify-center'>
    <div className="w-full max-w-xs">
            <div className="w-full bg-inner max-w-xs">
                <div className="shadow-lg rounded-lg flex flex-col space-y-4 justify-center  px-8 py-6 mb-4">
                    <div className="">
                        <Logo width={70} classes='flex  justify-center ' height={70} />
                    </div>
                    <div className="text-white text-xl text-center mb-4 font-bold">
                        Sign Up
                    </div>
                    <form>
                        <div className="mb-4">
                            <Input label='User Name'
                             type='text'
                             htmlFor="username"
                             id='username'
                             placeholder='user name'/>
                            {/* <label
                                htmlFor="username"
                                className="block text-white font-bold mb-2"
                            >
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter Username"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div> */}
                        </div>
                        <div className="mb-6">
                        <Input label='Password'
                             type='password'
                             htmlFor="password"
                             id='password'
                             placeholder='Enter Password'/>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="rounded-xl border-0 h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-white font-bold"
                                >
                                    Remember me
                                </label>
                            </div>
                           
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="text-center mb-4">
                            <span className="text-white font-bold">Or Sign up With</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="mr-2">
                                <button
                                    type="submit"
                                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    aria-label="Sign in with Facebook"
                                >
                                    Facebook
                                </button>
                            </div>
                            <div className="ml-2">
                                <button
                                    type="submit"
                                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    aria-label="Sign in with Twitter"
                                >
                                    twitter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className="text-center text-white font-bolder text-l">
                    have an account?
                    <Link
                        href="/login"
                        className="text-blue-500 text-l  hover:text-blue-700 font-bolder"
                    >
                        Sign Up here
                    </Link>
                </p>
            </div>
        </div>
        </div>
   
    
    );
};

export default LoginPage;