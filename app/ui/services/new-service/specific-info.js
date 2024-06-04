import React from 'react'

function SpecificInfo({ type, autoInfos, setAutoInfos,capacity, setCapacity }) {
    return (
        <div className="w-full max-w-[800px] bg-white">
            <form
                className="py-6 px-6 sm:px-9"
                action=""
                method="POST"
            >

                <div>
                    {type.id === 1 ?
                        <>
                            <h1 className='text-2xl text-gray-900 font-bold mb-4'>Your Automobile information</h1>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                        Serial number
                                    </label>
                                    <input value={autoInfos.serial}
                                        onChange={(e) => setAutoInfos({ ...autoInfos, serial: e.target.value })}
                                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Quarter" />

                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                        Plaque
                                    </label>
                                    <input value={autoInfos.plaque}
                                        onChange={(e) => setAutoInfos({ ...autoInfos, plaque: e.target.value })}
                                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Q. 10" />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                                        Color
                                    </label>
                                    <div>
                                        <select defaultValue={autoInfos.color}
                                            onChange={(e) => setAutoInfos({ ...autoInfos, color: e.target.value })}
                                            className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                            <option value={`0`} disabled>select color</option>
                                            <option value={`1`}>Red</option>
                                            <option value={`2`}>White</option>
                                            <option value={`3`}>Gray</option>
                                            <option value={`4`}>Black</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
                                        Model
                                    </label>
                                    <div>
                                        <select defaultValue={autoInfos.model}
                                            onChange={(e) => setAutoInfos({ ...autoInfos, model: e.target.value })}
                                            className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                            <option value={`0`}>Select model</option>
                                            <option value={`1`}>Fusso</option>
                                            <option value={`2`}>RAV4</option>
                                            <option value={`3`}>Hias</option>
                                            <option value={`4`}>Coaster</option>
                                            <option value={`5`}>Truck</option>
                                            <option value={`6`}>Ben</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
                                        Marque
                                    </label>
                                    <div>
                                        <select defaultValue={autoInfos.marque}
                                        onChange={(e)=>setAutoInfos({...autoInfos,marque:e.target.value})}
                                            className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                            <option value={`0`} disabled>Select Brand</option>
                                            <option value={`1`}>Toyota</option>
                                            <option value={`2`}>Tesla</option>
                                            <option value={`3`}>SUZUKI</option>
                                            <option value={`4`}>Mercedes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0 flex flex-col">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                        {type.id === 2 ? "Number of places" : "Number bedrooms"}
                                    </label>
                                    <input min={1} value={capacity} onChange={(e)=>setCapacity(e.target.value)}
                                        className="w-[10rem] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="number" placeholder={type.id === 2 ? "Enter number of places" : "Enter number bedrooms"} />

                                </div>
                            </div>
                        </>
                    }
                </div>


            </form>

        </div>

    )
}

export default SpecificInfo