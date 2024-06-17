"use client"
import Link from "next/link";
import { useContext } from "react";
import { SideContext } from "../context/sidebar";
import Image from "next/image";

export default function AccountPop(){
    const {accountDroped, setAccountDroped} = useContext(SideContext)
    return (
        <>
        {accountDroped && (
            <div className="ProfileDropdown absolute right-0 rounded-md w-full shadow-2xl md:w-max h-max z-20  ">
            <div className="h-56 w-full absolute flex justify-center items-center">
              <Image width={500} height={500}
                className="object-cover h-20 w-20 rounded-full"
                src="/img/img1.jpg"
                alt="profile"
              />
            </div>

            <div
              className="
                h-56
                w-full
                bg-yellow-600
                rounded-xl
                shadow-md
                sm:w-80 
              "
            >
              <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
                <h1 className="text-white">Profile</h1> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer z-10" onClick={()=>setAccountDroped(!accountDroped)}>
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

              </div>

              <div
                className="
                  bg-white
                  h-1/2
                  w-full
                  
                  flex flex-col
                  justify-around
                  items-center
                "
              >
                <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500 text-xs">Buyer</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500 text-xs">Online</h1>
                  </div>
                </div>
                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                  <h1 className="text-gray-700 font-bold">Maria R.</h1>
                  <h1 className="text-gray-500 text-sm">New York, USA</h1>
                </div>
                
              </div>
              
              <div class="px-2 py-2 text-gray-600 bg-white shadow dark-mode:bg-gray-800 rounded-b-xl">
            <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/profile"  onClick={()=>setAccountDroped(!accountDroped)} >Profile</Link>
            <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/provider" onClick={()=>setAccountDroped(!accountDroped)}>Dashboard</Link>
            <Link class="flex flex-row space-x-2 px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/login" onClick={()=>setAccountDroped(!accountDroped)}>
            <span>Logout</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
            </Link>
          </div>
            </div>
        </div>
        )}
        </>
        
    )
}