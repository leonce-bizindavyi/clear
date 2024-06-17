"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Activate({ uuid }) {
    const [activating, setActivating] = useState(false)
    const [activated, setActivated] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState("")
    const { push } = useRouter()
    const handleActive = async () => {
        setActivating(true)
        try {
            const res = await fetch('/api/auth/activate', {
                method: "POST",
                body: JSON.stringify({ uuid: uuid }), // Use JSON.stringify for object data
            });

            // Handle successful response (check status code, parse JSON, etc.)
            if (res.ok) {
                const result = await res.json()
                if (result.success) {
                    setActivated(true)
                    setMessage(result.message)
                    setSuccess(result.success)
                    push('/login')
                }
            } else {
                // Handle unsuccessful Activation (e.g., display error message)
                const errorData = await res.json(); // Parse error details from response
                console.error('Activation  failed:', errorData);
            }
        } catch (error) {
            // Handle network errors or other unexpected issues
            console.error('Error during activation:', error);
        } finally {
            // Update UI state regardless of success or failure
        }
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center px-14">
            <div className='flex flex-col justify-center space-y-5'>
                <div className='flex justify-center'>
                <button onClick={handleActive} disabled={activating} className={`bg-orange-600 h-auto w-36 hover:bg-orange-500 text-white font-bold py-2 px-4 ${!activated && "border-b-4"} border-orange-800 hover:border-orange-600 rounded`}>
                    {!activated ? 
                    <>
                    {activating ? "Activating": "Activate now"}
                    </>:
                    "Activated"}
                </button>
                </div>
                {success && (
                    <div className="bg-green-100 rounded-md p-3 flex">
                    <svg
                        className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>

                    <div className="text-green-700">
                        <div className="font-bold text-xl">{message}</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sollicitudin dui vel gravida. Fusce faucibus, elit sit amet porttitor vehicula, urna nisi dapibus tellus, a tincidunt velit mi quis nulla.</div>
                    </div>
                </div>
                )}
            </div>

        </div>
    )
}

export default Activate