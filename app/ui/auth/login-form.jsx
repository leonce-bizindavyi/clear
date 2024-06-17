"use client"
import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const [signing, setSigning] = useState(false)
  const { push } = useRouter()
  const initialValues = {
    email: "",
    password: "",
  }
  const handleSubmit = async (data) => {
    setSigning(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify(data), // Use JSON.stringify for object data
      });

      // Handle successful response (check status code, parse JSON, etc.)
      if (res.ok) {
        const result = await res.json()
        if (result.success) {
          setSigning(false);
          localStorage.setItem('token', result.data)
          if (result.admin == 1) {
            push('/dashoard')
          } else {
            push("/")
          }
        } else {
          console.log("Failed", result)
        }
      } else {
        // Handle unsuccessful Login (e.g., display error message)
        const errorData = await res.json(); // Parse error details from response
        console.error('login failed:', errorData);
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error('Error during login:', error);
    } finally {
      setSigning(false); // Update UI state regardless of success or failure
    }
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("You must input an email!").email("Invalid email address!"),
    password: Yup.string()
      .required("You must input a password!")
  })
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-white">
        <div className=" lg:flex w-full lg:w-1/2  bg-yell/ow-700 
            justify-around items-center py-3 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/img/img2.jpg')" }}>
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
            <Link href="/signup" >
              <button className="text-white  bg-black cursor-pointer p-4 font-medium mt-1 flex flex-row  hover:duration-300 hover:translate-x-3 hover:transition-all rounded-md">
                <span>Sign up </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

              </button>
            </Link>


            {/* <img src='/img/img1.jpg' /> */}
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-2 md:px-32 lg:px-24">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-6">Login</h1>
              <ErrorMessage component={`span`} className='text-red-700' name='email' />
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <Field id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
              </div>
              
               <ErrorMessage component={`span`} className='text-red-700' name='password' /><div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <Field className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
              </div>
              
              <button disabled={signing} type="submit" className="block w-full bg-yellow-600 mt-5 py-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">{signing ? "Signing..." : "Login"}</button>
              <div className="flex justify-between mt-4">

                <Link href="/signup" className="text-sm ml-2 text-gray-600 hover:text-yellow-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"> haven&apos;t an account</Link>
                <Link href="/forgot-password" className="text-sm ml-2 text-gray-600 hover:text-yellow-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"> forgot password</Link>
              </div>
            </Form>
            </Formik>
          </div>

        </div>
      </div>

      {/* <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                <ErrorMessage component={`span`} className='text-red-700' name='email' />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <ErrorMessage component={`span`} className='text-red-700' name='password' />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="/forgot-password" className="text-sm  text-[#E9522C] font-semibold hover:underline">Forgot password?</a>
              </div>
              <button disabled={signing} type="submit" className="mt-3 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">{signing ? "Signing..." : "Sign in"} </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t  have an account yet? <a href="/Login" className="text-[#E9522C] font-semibold">Sign up</a>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  </section> */}
    </>
  )
}

export default LoginForm