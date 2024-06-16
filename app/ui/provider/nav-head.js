"use client"
import React, { useContext } from 'react'
import { SideContext } from '../context/sidebar'

function Navhead() {
    const { isOpen, setOpen } = useContext(SideContext)
  return (
    <header className="flex-shrink-0 border-b">
                    <div className="flex items-center justify-between p-2">
                        {/* Navbar left */}
                        <div className="flex items-center space-x-3">
                            {/* Toggle sidebar button */}
                            <button onClick={()=>setOpen(!isOpen)} className="p-2 rounded-md focus:outline-none focus:ring">
                                <svg
                                    className={`w-4 h-4 text-gray-600 transform transition-transform ${isOpen ? '-rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

  )
}

export default Navhead