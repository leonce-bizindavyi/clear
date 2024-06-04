import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';
import React from 'react'

function NavBar({toggleSidebar,isOpen}) {
  const pathname = usePathname()
  const router = useRouter();
  return (
    <div className="  px-4 bg-white shadow-md ">
    <header className="flex items-center justify-between py-2">
      <div className='flex flex-row space-x-2 items-center w-max  mr-10 sm:mr-0'>
        <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"   className="block sm:hidden text-gray-800 w-9 h-9 cursor-pointer">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
        <Link href="/">
        <h1 className="text-[3rem] text-black font-bold  relative  " >C<span className='text-yellow-500 absolute left-6 -bottom-3'>S</span> </h1>
        </Link>
      </div>
      
      <nav className="flex items-center overflow-hidden  ">
        <ul className="flex items-center md:flex-row">
          <Link href="/properties" className=" sm:mx-2">
            <span className={`${pathname === "/properties" ? 'text-yellow-500': 'text-gray-800'} hover:text-yellow-500  font-semibold `}>List a Property</span>
          </Link>
          <Link href="/wishlists" className={`${pathname === "/wishlists" ? 'text-yellow-500': 'text-gray-800'}  mx-2 hidden sm:flex sm:flex-row space-x-1 hover:text-yellow-500 font-semibold`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span >Wishlist</span>
          </Link>
          <div className='connectedUser flex flex-row'>
            <Link href="/properties/new" className=" mx-2">
                <span className={` ${pathname === "/properties/new" ? 'text-yellow-500': 'text-gray-800'}  hover:text-yellow-500 font-semibold hidden sm:block`}>Upload</span>
            </Link>
            <Link href="/cart" className=" mx-2">
                <span className={` ${pathname === "/cart" ? 'text-yellow-500': 'text-gray-800'} hover:text-yellow-500 font-semibold hidden sm:block`}>Cart</span>
            </Link>
          </div>
          {/*
          <Link href="#" className=" mx-2">
            <span className="text-gray-800 hover:text-yellow-500 font-semibold hidden sm:block">Contact-Us</span>
          </Link> */}
          <div className='authentificationBtns'>
                <Link href="/login" className=" mx-2 ">
                <span className="text-gray-800 hover:text-yellow-500 font-semibold">Login</span>
            </Link>
          </div>
          
          <Link href="/notification" className=" mx-2 hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-800 hover:text-yellow-500 w-6 h-6 font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>

          </Link>
          <div className="profil mx-2 cursor-pointer  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>

          </div>
        </ul>
      </nav>
    </header>

    {/* <main className="flex flex-col items-center py-8 md:py-16">
      <h2 className="text-2xl font-bold mb-4 md:mb-8">Find Your Perfect Home</h2>
      <input type="text" placeholder="Search by location, address, or keyword" className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 md:mb-8" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
    </main>

    <footer className="text-white text-center py-4">
      &copy; 2024 Rent. All rights reserved.
    </footer> */}
  </div>
  );
}

export default NavBar