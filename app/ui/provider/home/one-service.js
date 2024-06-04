import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Service() {
    return (
        <>
            <div className="card1 !z-5 relative flex flex-col rounded-lg  bg-white bg-clip-border shadow-2xl   w-full !p-4  ">
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <Image width={800} height={800} src="/img/img1.jpg" className="mb-3 h-full w-full rounded-lg" alt="Image" />
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-yellow-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700"> Services name </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2 line-clamp-1">Description here  </p>
                        </div>
                        <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={300} height={300} className="h-full w-full rounded-full object-cover" src="/img/img1.jpg" alt="image" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={300} height={300} className="h-full w-full rounded-full object-cover" src="/img/img1.jpg" alt="image" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={300} height={300} className="h-full w-full rounded-full object-cover" src="/img/img1.jpg" alt="image" />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-yellow-500">120 000 <span>BIF</span></p>
                        </div>
                        <Link href="components/dashboard/" className="linear rounded-[20px] bg-yellow-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-800 active:bg-yellow-700">View & Edit</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service