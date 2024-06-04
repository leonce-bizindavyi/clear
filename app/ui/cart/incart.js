"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { ServiceContext } from '../context/services';
import Image from 'next/image';
import PriceFormat from '../elements/price-format';

function InCart() {

  const { push } = useRouter()
  const [open, setOpen] = useState(true)
  const { totalIncart, carts, count, increment } = useContext(ServiceContext)
  const totalPrice = totalIncart()
  const taxe = (totalPrice * 18 / 100).toFixed(2)
  const total = parseFloat(totalPrice) + parseFloat(taxe)
  const [clickedHeart, setClickedHeart] = useState(false)
    const AddToWhishlist = () => {
        setClickedHeart(!clickedHeart);
      };
  const handleCheckout = () => {
    push(`/checkout`)
  }
  return (

    <div className="containerCart mx-auto mt-10">
      <div className="sm:flex  my-10 px-4">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10 shadow-md ">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-gray-700">Orders</h1>
            <h2 className="font-semibold text-2xl text-gray-700">{carts.length} Items</h2>
          </div>
          {carts.length > 0 ?
            <>
              {carts.map((service, index) => {
                return (
                  <div key={index} className="CARS md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                      <Image width={500} height={500} src={`/img/${service.image}`}
                        alt={service.title} className="h-full w-full object-center object-contain " />
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-base font-black leading-none text-gray-800">{service.title}</p>
                        <div className="flex items-center border-gray-100 text-gray-700 mt-3">
                          <span className="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"  > - </span>
                          <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={count} min="1" readOnly />
                          <span className="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" > + </span>
                        </div>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">TOYOTA</p>
                      <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                      <div className="flex items-center justify-between pt-5">
                        <div className="flex itemms-center justify-center space-x-4">
                          <svg onClick={AddToWhishlist} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` w-6 h-6 cursor-pointer ${clickedHeart ? "text-red-600" : "text-gray-600"} duration-500`} >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="remove text-gray-600 h-6 w-6 cursor-pointer duration-150 hover:text-red-500" title="remove">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800"><PriceFormat myNumber={service.totalPrice} /> /Day</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
            :
            <h1>Empty cart</h1>
          }





          <Link href="/properties" className="flex font-semibold text-yellow-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-yellow-600 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            List Property
          </Link>
        </div>
        <div className="TOTAL mt-6 sm:ml-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">120 000 000 000 BIF</p>
        </div> */}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-gray-700">Sub-Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-gray-700"><PriceFormat myNumber={totalPrice} /> BIF</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-lg font-bold text-gray-700">Taxe</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-gray-700"><PriceFormat myNumber={taxe} /> </p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-lg font-bold text-gray-700">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-gray-700"><PriceFormat myNumber={total} /> </p>
              <p className="text-sm text-gray-500">including OBR</p>
            </div>
          </div>
            <button onClick={handleCheckout} className="mt-6 w-full rounded-md bg-yellow-500 py-1.5 font-medium text-blue-50 hover:bg-yellow-600 hover:-translate-y-1 duration-500 transition-all">Check out</button>
        </div>
      </div>
    </div>
  )
}

export default InCart