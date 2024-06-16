"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import NotButton from "./not-button";
import AccountBtn from "./account-button";
import AccountPop from "./account-popup";
import ToggleSide from "./toggle-side";

function NavBar({ toggleSidebar, isOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="  px-4 bg-white shadow-md ">
      <header className="flex items-center justify-between py-2">
        <div className="flex flex-row space-x-2 items-center w-max  mr-10 sm:mr-0">
          <ToggleSide />
          <Link href="/">
            <h1 className="text-[3rem] text-black font-bold  relative  ">
              C
              <span className="text-yellow-500 absolute left-6 -bottom-3">
                S
              </span>{" "}
            </h1>
          </Link>
        </div>

        <nav className="flex items-center overflow-hidden  ">
          <ul className="flex items-center md:flex-row">
            <Link href="/properties" className=" sm:mx-2">
              <span
                className={`${
                  pathname === "/properties"
                    ? "text-yellow-500"
                    : "text-gray-800"
                } hover:text-yellow-500  font-semibold `}
              >
                List a Property
              </span>
            </Link>
            <Link
              href="/wishlists"
              className={`${
                pathname === "/wishlists" ? "text-yellow-500" : "text-gray-800"
              }  mx-2 hidden sm:flex sm:flex-row space-x-1 hover:text-yellow-500 font-semibold`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className=" w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span>Wishlist</span>
            </Link>
            <div className="connectedUser flex flex-row">
              <Link href="/properties/new" className=" mx-2">
                <span
                  className={` ${
                    pathname === "/properties/new"
                      ? "text-yellow-500"
                      : "text-gray-800"
                  }  hover:text-yellow-500 font-semibold hidden sm:block`}
                >
                  Upload
                </span>
              </Link>
              <Link href="/cart" className=" mx-2">
                <span
                  className={` ${
                    pathname === "/cart" ? "text-yellow-500" : "text-gray-800"
                  } hover:text-yellow-500 font-semibold hidden sm:block`}
                >
                  Cart
                </span>
              </Link>
            </div>
            <div className="authentificationBtns">
              <Link href="/login" className=" mx-2 ">
                <span className="text-gray-800 hover:text-yellow-500 font-semibold">
                  Login
                </span>
              </Link>
            </div>

            <NotButton />
            <div className="">
              <div className="mx-2">
                <AccountBtn />
              </div>
              <AccountPop />
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

export default NavBar;
