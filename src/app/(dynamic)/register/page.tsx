
import Logo from "@/elements/Logo";
import AlternateLayout from './layout'
import Input from "@/elements/Input";
import Link from 'next/link'

const LoginPage = () => {
    return (
        <AlternateLayout>

        <div className="flex flex-col items-center  h-screen">
            <div className="w-full max-w-xs">
                <div className="  shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-center">
                       <Logo width={70} height={70}/>
                    </div>
                    <div className="text-gray-800 text-xl text-center mb-4 font-bold">
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
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter Username"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                    className="ml-2 block text-gray-700 font-bold"
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
                            <span className="text-gray-700 font-bold">Or Sign up With</span>
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
                <p className="text-center text-gray-500 font-bolder text-l">
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
    </AlternateLayout>
    
    );
};

export default LoginPage;