'use client'
import {signIn} from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const LoginPage = () => {
    const router = useRouter();

    //handle user login
    async function handleLogin(userInfo){
        //define structure object
       const newUserInfo = {
            email: userInfo.get('email'),
            password: userInfo.get('password')
       }

       //calling next auth service and passing "newUserInfo"
       const res = await signIn('credentials', {
            redirect: false,
            ...newUserInfo  
       });

       //checking login success or not
       if (res.status == 200){
        router.push("/todo-list")
       }else{
        router.push("/register")
       }
    }

    return ( 
        <main>
              <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 mx-auto">
                        <div>
                            <div className="text-2xl font-bold ml-20">
                                <Image src={"assets/icons/logo.svg"} width={150} height={150} alt='logo'></Image>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col items-center ml-52">
                            <div className="mx-auto max-w-xs mt-3">
                                <h1 className="text-2xl pb-3 font-thin">Login</h1>

                                <form action={handleLogin}>
                                    <input
                                        className="w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        htmlFor="email" name="email" type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        htmlFor="password" name="password" type="password" placeholder="Password" />
                                    <button
                                        className="mt-8 tracking-wide font-thin bg-gray text-white w-full py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                </form>

                                <p className="mt-6 text-sm text-gray-600 text-center">
                                    Do you have any account?
                                    <Link href={"register"} className="border-b border-gray-500 border-dotted text-blue-700 ml-1">
                                        Register
                                    </Link>
                                </p>
                            </div>

                            <div className="pt-3 pb-12 text-center">
                                <div className="leading-none border-b  px-3 py-3 inline-block text-sm text-gray-600 tracking-wide font-thin bg-[#eee] transform translate-y-1/2">
                                    Continue with
                                </div>
                            </div>

                            <div className="w-full flex-1">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-thin shadow-sm rounded-md py-1 border text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-1">
                                            Google
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center hidden lg:flex mr-52">
                      
                        <Image className='w-[60%] mx-auto mt-5' src={"assets/icons/login.svg"} width={100} height={100} alt={"sign in"}></Image>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default LoginPage;