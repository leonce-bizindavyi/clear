"use client"
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Link from 'next/link';

function SignupForm() {
    const [submiting, setSubmiting] = useState(false)
    const [isBuyer, setBuyer] = useState(false)
    const [tel, setTel] = useState('')
    const initialValues = {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        bank: "",
        account: ""
    }

    const handleSubmit = async (data) => {
        setSubmiting(true);
        console.log(data, tel, isBuyer)
        const datas = { ...data, ...{ provider: isBuyer ? 2 : 1 }, ...{phone: tel} };

        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                body: JSON.stringify(datas), // Use JSON.stringify for object data
            });

            if (res.ok) {
                const result = await res.json()
                console.log(result)
            } else {
                const errorData = await res.json(); // Parse error details from response
                console.error('Signup failed:', errorData);
            }
        } catch (error) {
            // Handle network errors or other unexpected issues
            console.error('Error during signup:', error);
        } finally {
            setSubmiting(false); // Update UI state regardless of success or failure
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("You must input a first name"),
        email: Yup.string().required("You must input an email!").email("Invalid email address!"),
        password: Yup.string()
            .required("You must input a password!")
            .min(5, 'Password have 5 caracters'),
        cpassword: Yup.string()
            .required("You must confirm password!")
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        bank: Yup.string().optional(),
        account: Yup.string().optional()
    })

    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row ">
                <div className=" lg:flex w-full lg:w-1/2  bg-yellow-700
            justify-around items-center py-3">
                    <div
                        className=" 
                    bg-black 
                    opacity-20 
                    inset-0 
                    z-0"
                    >

                    </div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-3">
                        <h1 className="text-white font-bold text-4xl font-sans">Clear Solution</h1>
                        <p className="text-white font-semibold mt-1">Your Operation&apos;s partner</p>
                        <Link href="/login" >
                            <button className="text-white  bg-black cursor-pointer p-4 font-medium mt-1 flex flex-row  hover:duration-300 hover:translate-x-3 hover:transition-all rounded-md">
                                <span>Login </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </button>
                        </Link>

                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-2 md:px-32 lg:px-24">
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            <Form className='bg-white rounded-md shadow-2xl p-5' >
                                <h1 className="text-gray-800 font-bold text-2xl mb-4">Sign Up</h1>

                                <div className='mb-2'>
                                    <h3 className=' mb-2 text-gray-600'>Are you?</h3>
                                    <ul className="flex cursor-pointer">
                                        <li className={`duration-500 transition-all ${(isBuyer) ? "bg-gray-200 text-gray-500 opacity-50" : "bg-yellow-600 text-white"} py-2 px-6    rounded-l-md`} onClick={() => setBuyer(false)}>Client</li>
                                        <li className={`duration-500 transition-all ${(isBuyer) ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-500 opacity-50"} py-2 px-6  rounded-r-md `} onClick={() => setBuyer(true)}>Provider</li>
                                    </ul>
                                </div>

                                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600">
                                    <span className='bg-gray-200 p-2  rounded-s-md'>Name</span>
                                    <Field id="name" className=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Type your name" />
                                    <ErrorMessage component='span' name='name' className='text-red-600' />
                                </div>
                                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600">
                                    <span className='bg-gray-200 p-2  rounded-s-md'>Phone</span>
                                    <PhoneInput className='w-full h-full'
                                        placeholder="Type phone number"
                                        value={tel}
                                        onChange={setTel} />
                                </div>
                                {
                                    (isBuyer) && (
                                        <>
                                            <div className='flex lg:flex-row flex-col'>
                                                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600 duration-500 transition-all">
                                                    <span className='bg-gray-200 p-2  rounded-s-md'>Bank</span>
                                                    <Field name='bank' className="pl-2 w-full outline-none border-none" type="text" placeholder="Type your Bank name" />
                                                </div>
                                                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600 duration-500 transition-all">
                                                    <span className='bg-gray-200 p-2  rounded-s-md'>Account</span>
                                                    <Field name='account' className="pl-2 w-full outline-none border-none" type="number" placeholder="Type your Bank account" />
                                                </div>
                                            </div>
                                        </>
                                    )
                                }

                                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <Field type="email" name='email' className=" pl-2 w-full outline-none border-none" placeholder="Email Address" />
                                </div>
                                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <Field className="pl-2 w-full outline-none border-none" type="password" name='password' placeholder="Password" />

                                </div>
                                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl text-gray-600">
                                    <span className='bg-gray-200 p-2  rounded-s-md'>Confirm</span>
                                    <Field className="pl-2 w-full outline-none border-none" type="password" name='cpassword' placeholder="Confirm your password" />

                                </div>
                                <button disabled={submiting} type="submit" className="block w-full bg-yellow-600 mt-5 py-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">{submiting ? "Signing up":"Singup"} </button>
                                <div className="flex justify-between mt-4">

                                    <Link href="/login" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"> have an account</Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
                <div className=" flex flex-row items-end justify-between  overflow-hidden mb-2 xl:max-w-3xl w-full">
                    <div className="flex">
                        <h3 className="text-white"> Provider: &nbsp;</h3>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={provider}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setProvider(!provider);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                    <div className="flex">
                        <h3 className="text-white">Dark Mode : &nbsp;</h3>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={darkMode}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                </div>
                <div
                    className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
                        }  w-full p-5 sm:p-10 rounded-md`}
                >
                    <h1
                        className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Register for a {provider ? "provider" : "client"} account
                    </h1>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <Form>
                            <div className="w-full mt-2">
                                <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="text"
                                                placeholder="Your first name"
                                                name="first"
                                            />
                                            <ErrorMessage component='span' name='first' className='text-red-600' />
                                        </div>
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="text"
                                                placeholder="Your last name"
                                                name='last'
                                            />
                                            <ErrorMessage component='span' name='last' className='text-red-600' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="email"
                                                placeholder="Enter your email"
                                                name='email'
                                            />
                                            <ErrorMessage component='span' name='email' className='text-red-600' />
                                        </div>
                                        <div className='w-full'>
                                        
                                           {/* <PhoneInput
                                                placeholder="Enter phone number"
                                                value={tel}
                                                onChange={setTel} />*/}
            {/*   <Field
                                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="tel"
                                                placeholder="Enter your phone"
                                                name='phone'
                                            /> 
                                            {/* <button onClick={hfhf}> jjvfjkvbfvk</button> */}
            {/*    <ErrorMessage component='span' className='text-red-600' name='phone' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="password"
                                                placeholder="Your Password"
                                                name='password'
                                            />
                                            <ErrorMessage component='span' className='text-red-600' name='password' />
                                        </div>
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="password"
                                                placeholder="Confirm Password"
                                                name='cpassword'
                                            />
                                            <ErrorMessage component='span' className='text-red-600' name='cpassword' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type=""
                                                placeholder="Town"
                                                name='town'
                                            />
                                            <ErrorMessage component='span' name='bank' className='text-red-600' />
                                        </div>
                                        <div className='w-full'>
                                            <Field
                                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="text"
                                                placeholder="Commune-quarter av"
                                                name='addresse'
                                            />
                                            <ErrorMessage component='span' className='text-red-600' name='number' />
                                        </div>
                                    </div>
                                    {provider && (
                                        <>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <div className='w-full'>
                                                    <Field
                                                        className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                                            ? "bg-[#302E30] text-white focus:border-white"
                                                            : "bg-gray-100 text-black focus:border-black"
                                                            }`}
                                                        type="text"
                                                        placeholder="Account Bank"
                                                        name='bank'
                                                    />
                                                    <ErrorMessage component='span' name='bank' className='text-red-600' />
                                                </div>
                                                <div className='w-full'>
                                                    <Field
                                                        className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                            ? "bg-[#302E30] text-white focus:border-white"
                                                            : "bg-gray-100 text-black focus:border-black"
                                                            }`}
                                                        type="text"
                                                        placeholder="Account Number"
                                                        name='number'
                                                    />
                                                    <ErrorMessage component='span' className='text-red-600' name='number' />
                                                </div>
                                            </div>

                                        </>
                                    )}
                                    <button disabled={submiting} type='submit' className="mt-3 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">{submiting ? "Registing..." : "Register"} </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account?{" "}
                                        <a href="/login">
                                            <span className="text-[#E9522C] font-semibold">Login</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div> */}
        </>
    )
}

export default SignupForm