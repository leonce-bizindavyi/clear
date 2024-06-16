"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Service({service}) {
  const [activeTab, setActiveTab] = useState("Available");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="service1 !z-5 relative flex flex-col rounded-lg  bg-white bg-clip-border shadow-2xl   w-full !p-4  ">
      <div className="h-full w-full">
        <div className="relative w-full">
        <Image width={800} height={800} src={`/img/${service.image}`} className="mb-3 h-full w-full rounded-lg" alt="Image" />
          <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-yellow-500 hover:cursor-pointer">
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700"> Services name </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2 line-clamp-1">
              Description here{" "}
            </p>
          </div>
          <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">
              +5
            </span>
            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <Image
                width={300}
                height={300}
                className="h-full w-full rounded-full object-cover"
                src="/img/img1.jpg"
                alt="image"
              />
            </span>
            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <Image
                width={300}
                height={300}
                className="h-full w-full rounded-full object-cover"
                src="/img/img1.jpg"
                alt="image"
              />
            </span>
            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <Image
                width={300}
                height={300}
                className="h-full w-full rounded-full object-cover"
                src="/img/img1.jpg"
                alt="image"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between md:items-center lg:justify-between ">
          <div className="flex flex-col">
            <p className="!mb-2 text-sm font-bold text-yellow-500 poppins-regular">
              120 000 <span>BIF</span>
            </p>
            <div className="bg-green-300 rounded-md flex flex-row p-1">
              <span className="inline-block px-2 text-sm text-white rounded ">
                profit + 14%
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </div>
          </div>
          <Link
            href="/provider/my-services/dhdsbkdn23"
            className="linear rounded-[20px] bg-yellow-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-800 active:bg-yellow-700"
          >
            View & Edit
          </Link>
        </div>
        <div className="mt-2 ">
          <span className="font-semibold text-gray-700  ">Status :</span>
          <div className="flex justify-center pt-2">
            <div className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl bg-gray-500/20">
              <button
                role="tab"
                type="button"
                className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
                  activeTab === "Available"
                    ? " shadow  text-white bg-yellow-600"
                    : "hover:text-gray-600 text-gray-400  focus:text-gray-400"
                }`}
                onClick={() => handleTabClick("Available")}
              >
                Available
              </button>

              <button
                role="tab"
                type="button"
                className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:ring-inset ${
                  activeTab === "Unvailable"
                    ? " shadow  text-white bg-red-800"
                    : " text-gray-400 hover:text-gray-600 focus:text-gray-400"
                }`}
                onClick={() => handleTabClick("Unvailable")}
              >
                Unvailable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
