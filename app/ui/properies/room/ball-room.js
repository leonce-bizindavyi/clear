import Link from 'next/link';
import React, { useState } from 'react'
import Text from '../../elements/text';
import PriceFormat from '../../elements/price-format';
import { useRouter } from 'next/navigation';
import Allow from '../allow';

function BallRoom({ service }) {
  const [clickedHeart, setClickedHeart] = useState(false)
  const [showAllow, setShowAllow] = useState(false)
  const {push} = useRouter()
  const AddToWhishlist = () => {
    setClickedHeart(!clickedHeart);
  };
  const handleDetail = () =>{
    push(`/properties/${service.uuid}/detail`)
  }
  
  return (
    <>
    <div className="relative mx-auto  lg:w-[25rem] ">
      <div className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div onClick={handleDetail}  className="relative flex h-52 justify-center overflow-hidden rounded-lg">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <div className="absolute inset-0 bg-black bg-opacity-80">
                <img src={`/img/${service.image}`} alt="" className='w-full h-full object-cover cursor-pointer' />
              </div>
            </div>
            <div className="absolute bottom-0 left-5 mb-3 flex bg-black p-1 bg-opacity-50 rounded-sm">
              <div className="flex flex-row    font-medium text-white shadow-sm  space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className=''>{service.photos} </span>
              </div>
            </div>
            <div className="absolute bottom-0 right-5 mb-3 flex" title='add to whishlist'>
              <svg onClick={AddToWhishlist} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` w-6 h-6 cursor-pointer ${clickedHeart ? "text-red-600" : "text-white"} duration-500`} >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>

            </div>
            <div className='absolute top-0 right-2 z-10 mt-3 ml-3'>
              {
                service.status === 1 ?
                <span className=" inline-flex select-none rounded-sm bg-yellow-600 bg-opacity-80 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                :
                <span className=" inline-flex select-none rounded-sm bg-yellow-600 bg-opacity-80 px-2 py-1 text-xs font-semibold text-red-800"> Unvailable </span>
              }
            </div>

          </div>

          <div  className="mt-4">
            <h2 className="name line-clamp-1 text-2xl font-semibold text-gray-800 md:text-lg" title="New York"><Text text={service.title} /> </h2>

            <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
              <span className="text-2xl text-gray-600"><PriceFormat myNumber={service.price} /></span>
              <span className="text-sm uppercase text-gray-600"> BIF </span>
              <span className="text-2xl  text-gray-600"> /Day </span>

            </p>
          </div>
          <div className="mt-4">
            <p className="description line-clamp-2 mt-2 text-lg text-gray-800"><Text text={service.body} /></p>
          </div>
          <div className="justify-center">
            <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
              {!(service.type === 1) && (
                <p className="flex items-center font-medium text-gray-800" title='places'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-yellow-700">
                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                </svg>
                {service.capacity}
              </p>
              )}
              <p className="flex items-center font-medium text-gray-800" title='bathrooms'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-700">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                {service.zone}, {service.town}
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-1.5 rounded bg-black px-4 py-2.5 text-white   hover:-translate-y-1 duration-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

              <Link href={`/properties/${service.uuid}/detail`}>
                <button className="text-sm">Details</button>
              </Link>
            </div>
            <div  onClick={setShowAllow}  className="flex items-center space-x-1.5 rounded border-2 border-yellow-500 px-4 py-2.5 text-yellow-500 hover:text-white  hover:bg-yellow-500 hover:-translate-y-1 duration-500 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className="text-md font-bold">Rent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showAllow && (<Allow service={service} setShowAllow={setShowAllow}/>)}
    </>
  )
}

export default BallRoom