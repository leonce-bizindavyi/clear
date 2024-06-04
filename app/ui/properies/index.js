"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react';
import DropdownSearch from '../services/search/DropdownSearch';
import { Locations, Price, Types } from '@/app/_libs/placeholder';
import SelectOption from '../elements/select-option';
import ListProperty from './list-property';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

export default function Properties({ service }) {
    const { push } = useRouter()
    const pathname = usePathname();
    const params = useSearchParams()
    const [services, setServices] = useState([])
    const search = params.get('searched')
    const { replace } = useRouter()
    const [values, setValues] = useState({
        price:0,
        type: 0,
        location:0
    })
	const searchParams = useSearchParams()
	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 200)

    useEffect(() => {
        async function handleSearch() {
        const res = await axios.get(`/api/services/search`,{headers: { start: 0, limit: 6, search: search }})
            .then((results) => setServices(results.data))
            .catch((error) => console.log('Error=>', error))
        }
        if(search) handleSearch()
        else  setServices(service)
        
    }, [search])

    function getSelectedOption (option){
        let newValues = values
        if(option.name === 'price') newValues.price = option.id
        else if(option.name === 'type') newValues.type = option.id
        else if(option.name === 'location') newValues.location = option.id
        setValues(newValues)
        async function handleFilter (){
            const res = await axios.get(`/api/services/filtreds/${newValues.price}/${newValues.type}/${newValues.location}`)
            .then((results)=>setServices(results.data))
            .catch((error)=>console.log('Error',error))

        }
        handleFilter()
    }
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <div className='bg-gray-50'>
                <div className='searchFilter bg-black  sticky top-0 z-10 shadow-md w-full min-h-14 p-4 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center items-center  sm:space-x-3'>
                    <div className="searchInput relative  text-gray-600  w-max ">
                        <input onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('search') ?  searchParams.get('search').toString(): ""} 
                     type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-md  border-2 border-gray-200 text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                        <DropdownSearch />
                    </div>
                    <div className='SelectOptions flex flex-row justify-center   items-center space-x-2 sm:space-x-4 '>
                        <SelectOption SelectedOption={getSelectedOption} name='price' options={Price} selected={0} />
                        <SelectOption SelectedOption={getSelectedOption} name='type' options={Types} selected={0} />
                        <SelectOption SelectedOption={getSelectedOption} name='location' options={Locations} selected={0} />
                    </div>
                </div>
                <div className='p-4 '>

                    <ListProperty services={services} />
                </div>



            </div>
            </Suspense>
            {/*  <div className="m-2 max-w-screen">
                <div className="rounded-xl w-full bg-white p-6 shadow-lg">
                    <div>
                        <div className="inline-flex rounded-md shadow-sm">
                            <button onClick={() => handleChangeType("vehicles", 1)} aria-current="page" className={`px-4 py-2 text-sm font-medium ${type == "vehicles" ? "text-orange-700" : "text-gray-900"} bg-white border border-gray-200 rounded-s-lg  hover:text-orange-700 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  `}>
                                Vehicles
                            </button>
                            <button onClick={() => handleChangeType("conference-rooms", 2)} className={`px-4 py-2 text-sm font-medium  ${type == "conference-rooms" ? "text-orange-700" : "text-gray-900"} bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-700  dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 `}>
                                Conference rooms
                            </button>
                            <button onClick={() => handleChangeType("passing-house", 3)} className={`px-4 py-2 text-sm font-medium ${type == "passing-house" ? "text-orange-700" : "text-gray-900"} bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-orange-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 `}>
                                Passing house
                            </button>
                        </div>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <input type="text" id="name" onChange={(e) => handleSearch(e.target.value)} placeholder="town , service" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50" />

                        <select id="status" className="mt-2 block w-auto rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
                            <option selected disabled>--Select by price--</option>
                            <option>5000000Fbu</option>
                            <option>6000000Fbu</option>
                        </select>
                        <select id="status" className="mt-2 block w-auto rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
                            <option selected disabled>--Select by price--</option>
                            <option>5000000Fbu</option>
                            <option>6000000Fbu</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto p-1 sm:p-2 md:p-5'>
                <h1 className='font-bold text-3xl'>Choose your favorites Conference rooms</h1>
            </div>
            {services && services.length > 0 && (
                <div className="max-w-screen-xl mx-auto px-5  sm:px-10 md:px-16 shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {
                            services.map((service, index) => {
                                return <Service key={index} service={service} />
                            })
                        }
                    </div>
                </div>
            )} */}


        </>
    )
}