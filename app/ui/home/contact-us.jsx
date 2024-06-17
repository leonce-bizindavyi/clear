"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function ContactUs() {
    const initialValues = {
        name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("The name is required !"),
        email:Yup.string() .email('The email is not valid !') .required('The email is required !'),
        message: Yup.string() .required('The message is required !')
    })
    const onSubmit = async (data, { resetForm })=>{
        const res = await axios.post('/api/contactus',data)
        .then(res =>{
            console.log(res.data)
            resetForm()
        })
        .catch(error=>console.error(error))
    }

    return (
        <div className="relative flex items-top justify-center bg-black   sm:items-center sm:pt-0 pb-5">
            <div className="max-w-6xl mx-auto  sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 md:mr-2 bg-gray-800 rounded-md">
                            <h1 className="text-4xl   dark:text-white font-bold tracking-tight">
                                Contact - us
                            </h1>
                            <p className="text-normal text-lg  font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Boulevard, mwezi gisabo
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +257 61220723
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    infos@clearsolution.com
                                </div>
                            </div>
                        </div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form className="p-8 flex flex-col justify-center">

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="relative z-0">
                                        <Field type="text" name="name" className="text-white peer block bg-black w-full appearance-none border-0 border-b border-yellow-500 bg-transparent py-2.5 px-0 text-sm focus:border-yellow-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:text-yellow-500">Your name</label>
                                    </div>
                                    <div className="relative z-0">
                                        <Field type="text" name="email" className="text-white peer block w-full bg-black  appearance-none border-0 border-b border-yellow-500 bg-transparent py-2.5 px-0 text-sm focus:border-yellow-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:text-yellow-500">Your email</label>
                                    </div>
                                    <div className="relative z-0 col-span-2">
                                        <Field
                                        component="textarea"  name="message" className="text-white peer block bg-black  w-full appearance-none border-0 border-b border-yellow-500 bg-transparent py-2.5 px-0 text-sm focus:border-yellow-600 focus:outline-none focus:ring-0"/>
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:text-yellow-500">Your message</label>
                                    </div>
                                </div>
                                <button type="submit" className="mt-5 rounded-md bg-gray-800 px-10 py-2 text-white">Send Message</button>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs