"use client"
import React, { useState } from 'react'

function isEmail(email) {
    const emailRegex = /^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    return isValid
}

function ForgotForm() {
    const [searching, setSearching] = useState(false)
    const [searched, setSearched] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [remaining, setRemaining] = useState(0)
    const handleSearch = async () => {
        const isValid = isEmail(email)
        setError('Wrong email address')
        if (isValid) {
            setSearching(true)
            setDisabled(true)
            setError("")
            try {
                const res = await fetch('/api/auth/search-mail', {
                    method: "POST",
                    body: JSON.stringify({ email: email }), // Use JSON.stringify for object data
                });

                // Handle successful response (check status code, parse JSON, etc.)
                if (res.ok) {
                    const result = await res.json()
                    if (result.success) {
                        setEmail('')
                        setError("")
                        setSearched(true)
                        // Initiate countdown after successful search
                        const countdownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
                        let remainingTime = countdownDuration;

                        const countdownIntervalId = setInterval(() => {
                            remainingTime -= 1000; // Decrement every second

                            const minutes = Math.floor(remainingTime / 60000);
                            const seconds = Math.floor((remainingTime % 60000) / 1000).toString().padStart(2, '0');

                            // Update UI with remaining time (consider using a s
                            setRemaining(`${minutes}:${seconds} times`)

                            if (remainingTime <= 0) {
                                clearInterval(countdownIntervalId);
                                setDisabled(false)
                                setRemaining(0) 
                                setSearched(false)// Stop timer when finished
                                // Handle research completion (e.g., display message, trigger actions)
                                console.log("Research complete!");
                            }
                        }, 1000);
                    } else {
                        setError(result.message)
                    }
                } else {
                    // Handle unsuccessful Searching (e.g., display error message)
                    const errorData = await res.json(); // Parse error details from response
                    console.error('Searching failed:', errorData);
                }
            } catch (error) {
                // Handle network errors or other unexpected issues
                console.error('Error during Searching:', error);
            } finally {
                setSearched(true)
                setSearching(false)
                setDisabled(true)  // Update UI state regardless of success or failure
            }
        } else {
            setError("Enter a valid email")
        }
    }
    return (
        <>
            <div className="flex w-full h-[90vh] justify-center items-center ">
                <div className="w-full md:px-12 lg:w-1/2 px-2 lg:px-24">
                    <div className="bg-white rounded-md shadow-2xl p-5">
                        <h1 className="text-gray-800 font-bold text-2xl mb-6">Forgot password</h1>
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                        </div>
                        {searched && (
                            <span>If you don&apos;t receive email you&apos;ll try in {remaining} </span>
                        )}
                        {error && <span className='text-lg text-red-500'>{error}</span>}
                        <button disabled={disabled} onClick={handleSearch} className={`block w-full ${disabled ? 'bg-gray-600':'bg-yellow-600'} mt-5 py-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2`}>
                            {searching ? 'Submitting ...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgotForm