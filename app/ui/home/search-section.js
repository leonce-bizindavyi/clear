"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

function Search() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service worker registration successful:', registration);
      }).catch((error) => {
        console.error('Service worker registration failed:', error);
      });
    }
  }, []);
  return (
    <div
      className="relative h-[400px] overflow-hidden rounded-lg bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center text-white">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Search your Property by town</h2>
            <div className="flex border-2 border-orange-500 overflow-hidden max-w-md mx-auto font-[sans-serif] rounded-md">
              <input type="text" onChange={(e)=>handleSearch(e.target.value)}  placeholder="Search Town here"
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
              <button type='button' className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 px-5 text-sm text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Search