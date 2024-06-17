"use client"
import React, { useState } from 'react'
import AccountSuccess from './account-success'
import Image from 'next/image'

function PaymentEdit() {
  const [newAccountRegistred , setAccount] = useState(false)
  
  return (
  <>
  {
    newAccountRegistred ? 

    
  <AccountSuccess /> 

  :
  <>
      <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5 w-max p-5 ">
    <h3 className="mt-6 text-xl font-bold">Set your payment method</h3>
  <div className="bg-white p-4 rounded-xl shadow-xl flex items-center justify-between mt-4 hover:bg-gray-100 ">
      <div className="flex space-x-6 items-center">
         <Image width={700} height={300} alt='leapa' src="/img/leapa.svg" className="w-auto h-12"/>
          <div>
              <p className="font-semibold text-base">Leapa</p>
              <p className="font-semibold text-xs text-gray-400">provider@gmail.com</p>
          </div>              
      </div>
      
      <div className="flex space-x-2 items-center ml-4">
          <div className="bg-yellow-200 rounded-md p-2 flex items-center">
              <button className="text-yellow-600 font-semibold text-xs" onClick={() => setAccount(true)}>Change</button> {/*to leapa API */}
          </div>
      </div>    
  </div>
  </div> 
  </>



  }
  </>

  )
}

export default PaymentEdit