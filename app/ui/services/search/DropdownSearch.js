"use client"
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { Locations } from '@/app/_libs/placeholder'

function DropdownSearch() {
    const params = useSearchParams()
    const search = params.get('search')
    const [searcheds, setsearcheds] = useState([])
    useEffect(() => {
        async function handleSearch() {
            try {
                if (typeof search !== 'string' || search.trim() === '') {
                    console.log('Invalid search term');
                    return;
                }
                const res = await axios.get(`/api/search/${search}`)
                    .then((results) => setsearcheds(results.data))
                    .catch((error) => console.log('Error=>', error))
            } catch (error) {
                console.error('Error handling search:', error);
            }
        }
        if (search) {
            handleSearch()
        }
    }, [search])
    if (search && searcheds.length > 0)
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="dropdown dropdown-menu w-[100%] sm:w-[30rem] absolute z-40">
                    <div className="bg-white rounded-md shadow-xl  relative mt-8  mb-4 z-40 ">
                        <h1 className='text-gray-400 py-3 font-medium ml-4'>Places</h1>

                        <svg className="absolute bottom-full right-4" width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
                        </svg>
                        <div className='results max-h-[20rem] overflow-y-auto'>
                            {
                                searcheds.map((searched, index) => {
                                    return (
                                        <div key={index} className="result1 py-3 flex items-center w-full hover:bg-gray-200 px-4">
                                            <Link href={`/properties?searched=${searched.name.toLocaleLowerCase()}`} className="flex-1">
                                                <span className="text-gray-600 text-base line-clamp-1">{searched.name}</span>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Suspense>
        )
}

export default DropdownSearch