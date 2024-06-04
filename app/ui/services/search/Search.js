"use client"
import React, { Suspense } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DropdownSearch from './DropdownSearch'
import { useDebouncedCallback } from 'use-debounce';

function Search() {
	const { replace,push } = useRouter()
	const pathname = usePathname();
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
	const handleGetTown = () =>{
	   const search = searchParams.get('search').toString()
	   if(search){
		push(`/properties?searched=${search.toLocaleLowerCase()}`)
	   }
	}
return (
	<Suspense fallback={<div>Loading...</div>}>
		<div className=" h-[20rem] sm:h-[25rem] md:h-[30rem] w-screen flex flex-col justify-center items-center  bg-indigo-500  sm:p-14 bg-cover bg-[0px]  bg-no-repeat bg-opacity-20" style={{ backgroundImage: "url('/img/img2.jpg')" }}>
		<form className='  p-4 flex flex-col sm:justify-center sm:items-center space-y-5  w-full'>
			<div className='flex flex-col -space-y-3 sm:space-y-0  sm:flex-row sm:space-x-4'>
				<h1 className="text-center font-bold text-white text-[2.5rem] sm:text-[3rem]  md:text-[3.5rem] ">Find</h1>
				<h1 className="text-center font-bold text-white text-[2.5rem] sm:text-[3rem]  md:text-[3.5rem] ">the perfect place</h1>
			</div>

			<div className='relative'>
				<div className="flex w-full sm:w-[30rem] rounded bg-white ">
					<input type="text" onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('search') ?  searchParams.get('search').toString(): ""} placeholder="Search Town here" className="w-full md:text-lg border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none" x-model="search" />
					<button onClick={handleGetTown} className="m-2 rounded px-4 py-2 md:text-lg font-semibold text-gray-100 bg-yellow-500" >search</button>
				</div>
				<DropdownSearch />
			</div>


		</form>

	</div>
	</Suspense>
	
)
}

export default Search