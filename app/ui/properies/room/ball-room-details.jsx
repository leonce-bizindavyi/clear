
"use client"
import React, { useState } from 'react'
import Text from '../../elements/text';
import PriceFormat from '../../elements/price-format';
import Allow from '../allow';
import Image from 'next/image';

function BallRoomDetails({ service, images }) {
  const [imageDefault, setImageDefault] = useState(service.image);
  const [showAllow, setShowAllow] = useState(false)
  const handleImageClick = (img) => {
    setImageDefault(img)
  }
  return (
    <div className="antialiased bg-white">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="GrandImage h-64 md:h-[25rem] rounded-lg flex justify-center items-center overflow-hidden mb-4 ">
                <div
                  className="h-64 md:h-80 rounded-lg  duration-500   flex items-center justify-center cursor-zoom"
                  style={{ display: 'block' }}
                >
                  <Image height={800} width={800} src={`/img/${imageDefault}`} alt="Image 1" className="object-contain h-full w-full" />
                </div>



              </div>

              <div className="SmallImages flex -mx-2 mb-4  flex-row overflow-x-auto max-w-screen-sm md:max-w-xl ">
                {images.map((img, index) => (
                  <div className="flex " key={index}>
                    <button
                      onClick={() => handleImageClick(img.photo)}
                      className={`focus:outline-none rounded-lg ml-4 h-14 md:h-24 w-14 md:w-24  flex items-center justify-center  ${imageDefault === img.photo ? 'ring-2 ring-yellow-500 ring-inset' : ''
                        }`}
                    >
                      <Image width={500} height={500} src={`/img/${img.photo}`} alt={`Image ${service.title}`} className="object-contain h-full w-full" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
            <div className="Details md:flex-1 px-4 bg-yellow-800 bg-opacity-20 pt-5 rounded-md shadow-xl">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                <Text text={service.title} />
              </h2>
              <p className="text-gray-500 text-sm">
                Service offered by <a href="#" className="text-yellow-600 hover:underline">Clear Solution</a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg  flex py-2 px-3 text-gray-600 font-semibold">
                    <span className="font-bold text-indigo-600 text-3xl"><PriceFormat myNumber={service.price} /> /Day</span>
                  </div>
                </div>
                <div className="flex-1">
                  {
                    service.status === 1 ?
                      <p className="text-green-500  text-xl font-semibold">Available</p>
                      :
                      <p className="text-red-700 text-xl font-semibold">Unvailable</p>
                  }

                  <p className="text-gray-400 text-sm">In good Condition</p>
                </div>
              </div>

              <p className="text-gray-600">
                <Text text={service.body} />
              </p>
              <p className="flex items-center font-medium text-gray-800 mt-3" title='places'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-yellow-700">
                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                </svg>
                {service.capacity} Places
              </p>

              <div className="flex py-4 space-x-4">

                <div onClick={setShowAllow} className="flex items-center space-x-1.5 rounded border-2 border-yellow-500 px-4 py-2.5 text-yellow-500 hover:text-white  hover:bg-yellow-500 hover:-translate-y-1 duration-500 transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <button className="text-md font-bold">Rent</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAllow && (<Allow service={service} setShowAllow={setShowAllow} />)}
    </div>
  );
}
export default BallRoomDetails