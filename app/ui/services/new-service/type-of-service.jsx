import { service_types } from '@/app/_libs/values'
import React from 'react'

function TypeOfService({ type, setType }) {
   
    return (

        <div className="  w-full max-w-[800px] bg-white rounded-md">
            <form
                className="py-6 px-9"
                action=""
                method="POST"
            >
                <h1 className='text-2xl text-gray-900 font-bold mb-4'>Type Of Service</h1>
                <div>
                    {
                        service_types.map((service_type, index) => {
                            return (
                                <label key={index} onClick={() => setType({ id: service_type.id, value: service_type.text })} className={`flex bg-gray-100 text-gray-700 ${type.id === service_type.id && "bg-yellow-500"} rounded-md px-3 py-2 my-3  hover:bg-yellow-100 cursor-pointer `}>
                                    <input type="radio" onChange={() => setType({ id: service_type.id, value: service_type.text })} defaultChecked={type.id === service_type.id} name='type'/>
                                    <span className="pl-2">{service_type.text}</span>
                                </label>
                            )
                        })
                    }

                </div>

            </form>

        </div>
    )
}

export default TypeOfService