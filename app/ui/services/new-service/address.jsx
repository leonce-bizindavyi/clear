import React from 'react'
import { RegionDropdown } from 'react-country-region-selector'

function Address({ addresse, setAddresse }) {
    return (

        <div className="w-full max-w-[800px] bg-white">
            <form
                className="py-6 px-6 sm:px-9"
                action=""
                method="POST"
            >
                <h1 className='text-2xl text-gray-900 font-bold mb-4'>Set Physical address</h1>
                <div>
                    <section className="bg-white  w-full  " id="contact">
                        <div className="">
                            <div className="mb-4">
                                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                    <p className="text-xl text-gray-400 ">
                                        The address of the service allows the customer to choose it according to their preference
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded flex flex-col">
                                <div className="-mx-3 md:flex mb-6">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="uppercase  text-gray-800 text-sm font-bold mb-2" htmlFor="company">
                                            Quarter
                                        </label>
                                        <input
                                            value={addresse.quarter} onChange={(e) => setAddresse({ ...addresse, quarter: e.target.value })}
                                            className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3   focus:outline-orange-500"
                                            id="company"
                                            type="text"
                                            placeholder="Quarter" />
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase  text-gray-800 text-sm font-bold mb-2" htmlFor="title">
                                            house number, Avenue
                                        </label>
                                        <input
                                            value={addresse.avenue}
                                            onChange={(e)=>setAddresse({...addresse,avenue:e.target.value})}
                                            className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3   focus:outline-orange-500"
                                            id="title"
                                            type="text"
                                            placeholder="15, 2Av" />
                                    </div>
                                </div>
                                <div className="-mx-3 md:flex mb-2">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="uppercase  text-gray-800 text-sm font-bold mb-2" htmlFor="location">
                                            Town
                                        </label>
                                        <div>
                                            
                                            <RegionDropdown
                                                country={`Burundi`}
                                                value={addresse.town}
                                                onChange={(e)=> setAddresse({...addresse,town:e})}
                                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase  text-gray-800 text-sm font-bold mb-2" htmlFor="job-type">
                                            Commune
                                        </label>
                                        <div>
                                            <input value={addresse.commune} 
                                            onChange={(e)=>setAddresse({...addresse, commune: e.target.value})}
                                            className='w-full bg-gray-200 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 mb-3 rounded   focus:outline-orange-500' />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase  text-gray-800 text-sm font-bold mb-2" htmlFor="department">
                                            Zone
                                        </label>
                                        <div>
                                           <input value={addresse.zone}
                                           onChange={(e)=>setAddresse({...addresse,zone:e.target.value})}
                                           className='w-full bg-gray-200 border  text-gray-700 text-sm py-3 px-4 pr-8 mb-3 rounded  focus:outline-orange-500' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </form>

        </div>

    )
}

export default Address