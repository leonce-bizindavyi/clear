import React from 'react'
import Service from './one-service'
import { getMyServices } from '@/app/_libs/datas'

async function AllServices() {
  const services = await getMyServices(0,9)
  return (
    <div className='flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll' >
        <h3 class="mb-6  text-xl font-semibold text-gray-600">My services</h3>
        {
          services.length >0 && (
            <div class="grid grid-cols-1 gap-5  mt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
              {
                services.map((service,index)=>{
                  return (
                    <Service key={index} service={service} />
                  )
                })
              }
          </div>
          )
        }
    </div>
    
  )
}

export default AllServices