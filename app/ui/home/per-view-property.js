import { getTrendingServices } from '@/app/_libs/datas'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from '../elements/text'

async function PerViewProperty({ start, limit }) {
  const services = await getTrendingServices(start, limit)
  return (
    <>
      <div className="relative flex  flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className="  px-4 w-full mb-8">
          <h2 className="mb-4 font-bold text-[2rem] sm:text-[3rem]  md:text-[3.5rem] text-gray-800 ">Properties for you</h2>
          <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3  gap-6 ">
            {
              services.map((service, index) => {
                return (
                  <div key={index} className="item1 relative flex flex-col shadow-md rounded-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md  h-[20rem]">
                    <button type='button' className="hover:text-yellow-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </button>
                    <Link href={`/properties/${service.uuid}/detail`} className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</Link>
                    <div className='flex flex-col   h-full'>
                      <div className=" overflow-hidden">
                        <div className="h-full overflow-hidden relative object-fill">
                          <Image
                            src={`/img/${service.image}`}
                            alt=''
                            width={448}
                            height={300}
                          />
                        </div>
                      </div>
                      <div className="bg-black h-[6rem] p-3 lg:h-[8rem]">
                        <h3 className=" text-md  font-medium line-clamp-2 "><Text text={service.title} /> </h3>
                        <div className="flex justify-between items-center ">
                          <p className="text-xs text-gray-400">
                          <Text text={service.body} />
                          </p>

                        </div>
                      </div>
                    </div>

                  </div>
                )
              })
            }

          </div>
        </div>
        <button className="ml-4 inline-flex items-center justify-center rounded-md bg-yellow-600 py-3 px-6 w-max text-base font-medium text-white shadow-xl shadow-yellow-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
        >
          <span>
            <Link href={`/properties`}>View More</Link>
          </span>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-2">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      
    </>
  )
}

export default PerViewProperty