"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import PassWordChanged from './PassWordChanged'
function ResetPassword({ uuid }) {
    const [reseting, setReseting] = useState(false)
    const [showpass, setShowpass] = useState(false)
    const [showcpass, setShowcpass] = useState(false)
    const [success, setSuccess] = useState(false)
    const initialValues = {
        password: "",
        cpassword: "",
    }
    const handleReset = async (data, { resetForm }) => {
        setReseting(true)
        if (uuid) {
            const datas = { ...data, uuid: uuid }
            const res = await axios.post('/api/auth/restp', datas)
                .then(result => {
                    console.log(result.data)
                    if(!result.data.error && result.data.message===1){
                        setSuccess(true)
                    }
                })
                .catch(error => console.log(error))
                .finally(() => {
                    resetForm()
                    setReseting(false)
                })
        }
    }
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("You must input a password!")
            .min(5, 'Password have 5 caracters'),
        cpassword: Yup.string()
            .required("You must confirm password!")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    return (
        <>
            <div className="flex w-full h-[90vh] justify-center items-center ">
                {success ? 
                <PassWordChanged />
                :
                <div className="w-full md:px-12 lg:w-1/2 px-2 lg:px-24">
                <div className="bg-white rounded-md shadow-2xl p-5">
                    <h1 className="text-gray-800 font-bold text-2xl mb-6">Set new password</h1>
                    <Formik initialValues={initialValues} onSubmit={handleReset} validationSchema={validationSchema}>
                        <Form>
                            <ErrorMessage component='span' className='text-red-600' name='password' />
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Field id="password" name="password" type={showpass ? "password" : "text"} className="pl-2 w-full outline-none border-none" placeholder="New Password" />
                                <div onClick={() => setShowpass(!showpass)} className='cursor-pointer'>
                                    {showpass ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>

                                    }
                                </div>
                            </div>
                            <ErrorMessage component='span' className='text-red-600' name='cpassword' />
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Field id="cpassword" name="cpassword" type={showcpass ? "password" : "text"} className="pl-2 w-full outline-none border-none" placeholder="Confirm new password" />
                                <div onClick={() => setShowcpass(!showcpass)} className='cursor-pointer'>
                                    {showcpass ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>

                                    }
                                </div>
                            </div>
                            <button type='submit' className="block w-full bg-yellow-600 mt-5 py-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"><span> {reseting ? "Reseting ..." : "Reset password"} </span></button>
                        </Form>
                    </Formik>
                    {/* {searched && (
                        <span>If you don't receive email you'll try in {remaining} </span>
                    )}
                    {error && <span className='text-lg text-red-500'>{error}</span>}
                    <button disabled={disabled} onClick={handleSearch} className={`block w-full ${disabled ? 'bg-gray-600':'bg-yellow-600'} mt-5 py-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2`}>
                        {searching ? 'Submitting ...' : 'Submit'}
                    </button> */}
                </div>
            </div>}
            </div>
            {/* <div className="antialiased bg-slate-200">
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Reset password</h1>
                <p className="text-slate-500">Fill up the form to reset the password</p>
                <Formik initialValues={initialValues} onSubmit={handleReset} validationSchema={validationSchema}>
                    <Form>
                        <div className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label htmlFor="password">
                                    <p className="font-medium text-slate-700 pb-2">New password</p>
                                </label>
                                <Field id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="new password" />
                                <ErrorMessage component='span' className='text-red-600' name='password' />

                                <label htmlFor="password">
                                    <p className="font-medium text-slate-700 pb-2">Confirm password</p>
                                </label>
                                <Field id="cpassword" name="cpassword" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm password" />
                                <ErrorMessage component='span' className='text-red-600' name='cpassword' />
                                <button disabled={reseting} type='submit' className="w-full py-3 font-medium text-white bg-orange-700 hover:bg-orange-600 rounded-lg border-orange-600 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>

                                    <span> {reseting ? "Reseting ..." : "Reset password"} </span>
                                </button>
                                <p className="text-center">Not registered yet? <a href="/signup" className="text-orange-700 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg></span></a></p>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>   */}
        </>

    )
}

export default ResetPassword