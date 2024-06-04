"use client"
import React, { useContext, useState } from 'react';
import { DateRangePicker } from '@nextui-org/date-picker';
import {getLocalTimeZone, parseDate, today} from "@internationalized/date";
import { ServiceContext } from '../context/services';


function Allow({ setShowAllow, service }) {
  const {addToCart} = useContext(ServiceContext)
  const todayNow = today(getLocalTimeZone()).subtract({days: 0})
  const [startDate, setStartSaved] = useState(todayNow);
  const [endDate, setEndSaved] = useState(todayNow);
  const [dayDiff, setdayDiff] = useState(0)
  const handleChange = ({start,end}) => {
    setStartSaved(start)
    setdayDiff((end.day-start.day)+1)
    setEndSaved(end)
  };

  const handleAllow = async () =>{
    console.log(service.price,startDate,endDate,dayDiff)
    const datas = {
      days: dayDiff,
      totalPrice: service.price * dayDiff,
      start: startDate,
      end: endDate
    }
    const newValue = {...service,...datas}
    addToCart(newValue)

    /* console.log("handleAllow")
    try {
      
    console.log("handleAllow")
      const registration = await navigator.serviceWorker.ready;
  
      // Envoi du message au service worker avec toutes les données du vidéo
      registration.active.postMessage({
        type: 'CASHE_WISH',
        datas: service
        
      });
    } catch (error) {
      console.error('Error while caching wishilist:', error);
    } */
  }
  
console.log(todayNow,today(getLocalTimeZone()))

  return (
    <>
   <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" onClick={() => setShowAllow(false)} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
            <div>
            <DateRangePicker
            onChange={handleChange}
          label="Date and time"
          minValue={today(getLocalTimeZone())}
          defaultValue={{
            start: todayNow,
            end: todayNow,
          }}
        />
            </div>
            <button onClick={handleAllow} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Allow</button>
      
            <button  onClick={() => setShowAllow(false)}  data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
          </div>
        </div>
      </div>
    </div> 

    </>
  )
}

export default Allow