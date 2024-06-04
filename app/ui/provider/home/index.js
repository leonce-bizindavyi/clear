"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Services from './services';
import Sidebar from '../sidebar';

function Provider() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Sidebar backdrop */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden" style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }} />
            )}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                {/* Navbar */}
                <header className="flex-shrink-0 border-b">
                    <div className="flex items-center justify-between p-2">
                        {/* Navbar left */}
                        <div className="flex items-center space-x-3">
                            {/* Toggle sidebar button */}
                            <button onClick={toggleSidebar} className="p-2 rounded-md focus:outline-none focus:ring">
                                <svg
                                    className={`w-4 h-4 text-gray-600 transform transition-transform ${isSidebarOpen ? '-rotate-180' : ''}`}
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

                {/* Main content */}
                <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
                    {/* <!-- Main content header --> */}
                    <div
                        className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
                    >
                        <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>

                    </div>

                    {/* <!-- Start Content --> */}
                    <div className="grid grid-cols-1 gap-5  mt-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                            style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}>
                            <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                                <div>
                                    <div className="text-white text-lg flex space-x-2 items-center">
                                        <div className="bg-white rounded-md p-2 flex items-center">
                                            <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                                        </div>
                                        <p>Your services</p>
                                    </div>
                                    <h3 className="text-white text-3xl mt-2 font-bold">
                                        20
                                    </h3>
                                    <h3 className="text-white text-lg mt-2 ">
                                        4 in use
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card1 p-4  transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-gray-400">Available</span>
                                        <span className="text-lg font-semibold">16</span>
                                    </div>
                                    {/* <div className="p-10 bg-gray-200 rounded-md"></div> */}
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card1 p-4  transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-gray-400">Benefit</span>
                                        <span className="text-lg font-semibold">20</span>
                                    </div>
                                    {/* <div className="p-10 bg-gray-200 rounded-md"></div> */}
                                </div>
                                <div>
                                    <span className="inline-block px-2 text-sm text-white bg-green-300 rounded mr-4">profit 14%</span>

                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="card1 p-4  transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-gray-400">Account</span>
                                        <span className="text-lg font-semibold">1 000 000 BIF</span>
                                    </div>
                                    {/* <div className="p-10 bg-gray-200 rounded-md"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Services />
                </main>
            </div>
        </>
    );
}


export default Provider