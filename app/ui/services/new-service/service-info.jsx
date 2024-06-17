import React from 'react'

function ServiceInfo({ serviceInfos, setServiceInfos }) {
    return (
        <div className="w-full max-w-[800px] bg-white">
            <form
                className="py-6 px-6 sm:px-9"
                action=""
                method="POST"
            >
                <h1 className='text-2xl text-gray-900 font-bold mb-4'>Service information</h1>
                <div>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2 max-w-[500px]">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Service title</label>
                            <input value={serviceInfos.title}
                             onChange={(e)=>setServiceInfos({...serviceInfos,title:e.target.value})} 
                            type="text" name="name" id="name" className="bg-gray-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-orange-500 focus:bg-white" placeholder="Type product name" required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 focus:outline-orange-500">Price</label>
                            <select defaultValue={serviceInfos.price}
                            onChange={(e)=>setServiceInfos({...serviceInfos,price: e.target.value})} className='bg-gray-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-orange-500 focus:bg-white'>
                                <option value={`0`}  disabled>Select price</option>
                                <option value={`50000`}>50000</option>
                                <option value={`60000`}>60000</option>
                                <option value={`100000`}>100000</option>
                                <option value={`250000`}>250000</option>
                                <option value={`500000`}>500000</option>
                                <option value={`10000000`}>10000000</option>
                            </select>

                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea value={serviceInfos.body} 
                            onChange={(e)=>setServiceInfos({...serviceInfos,body:e.target.value})} id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border  focus:outline-orange-500 focus:bg-white" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                </div>


            </form>

        </div>
    )
}

export default ServiceInfo