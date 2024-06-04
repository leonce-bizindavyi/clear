"use client"
import React, { useState } from 'react'

function Notification({notificationHandler, isOpenNotification}) {

  return (
    <>
      {/* <button
        onClick={notificationHandler}
        className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Open Modal
      </button> */}
      {isOpenNotification && (
                  <div className={`w-full h-full z-20   bg-gray-800 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div  `}>
                
                  <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification">
                      <div className="2xl:w-4/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
                          <div className="flex items-center justify-between">
                              <p tabindex="0" className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
                              <button onClick={notificationHandler} role="button" aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer" >
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                              </button>
                          </div>
      
                          <div className="w-full p-3 mt-8 bg-white rounded flex">
                              <div tabindex="0" aria-label="post icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#4338CA" />
                                      </svg>
                                  </div>
                              <div className="pl-3">
                                  <p tabindex="0" className="focus:outline-none text-sm leading-none"><span className="text-yellow-700">James Doe</span> favourited an <span className="text-yellow-700">item</span></p>
                                  <p tabindex="0" className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                              </div>
                          </div>

                          <h2 tabindex="0" className="focus:outline-none text-sm leading-normal pt-8 border-b pb-2 border-gray-300 text-gray-600">YESTERDAY</h2>
                          <div className="w-full p-3 mt-6 bg-white rounded flex">
                              <div tabindex="0" aria-label="post icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#4338CA" />
                                  </svg>
                              </div>
                              <div className="pl-3">
                                  <p tabindex="0" className="focus:outline-none text-sm leading-none"><span className="text-yellow-700">Sarah</span> posted in the thread: <span className="text-yellow-700">Update gone wrong</span></p>
                                  <p tabindex="0" className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                              </div>
                          </div>

                          <div className="flex items-center justiyf-between">
                              <hr className="w-full"/>
                              <p tabindex="0" className="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500">Thats it for now :)</p>
                              <hr className="w-full"/>
                          </div>
                      </div>
                  </div>
              </div>
      )}
    </>
  );
}

export default Notification