import Link from 'next/link'
import React from 'react'

function Confirmation() {
  return (
    <div className=" ">
    <div className="bg-white p-6  shadow-xl md:mx-auto">
      <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
      </svg>
      <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Done!</h3>
          <p className="text-gray-600 my-2">Your service has been upload succefully</p>
          <p className="text-gray-400 "> Clear Solution is under review, it will be added soon...  </p>
          <div className="py-10 text-center">
              <Link href="/PropertyList" className="flex items-center justify-center bg-yellow-600 mt-5 p-2 rounded-md hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                 List property 
             </Link>
          </div>
      </div>
  </div>
</div>
  )
}

export default Confirmation