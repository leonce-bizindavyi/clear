"use client";
import React, { useContext } from "react";
import { SideContext } from "../context/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const { isOpen, setOpen } = useContext(SideContext);
  const pathname = usePathname()
  return (
    <>
      {/* Sidebar backdrop */}

      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-black border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full lg:translate-x-0 lg:w-20 "
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between flex-shrink-0 p-2">
          <button onClick={()=>setOpen(!isOpen)} className="p-2 rounded-md lg:hidden">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto text-white">
          <ul className="py-2 px-4 overflow-hidden space-y-4">
            <li>
              <Link
                href="/provider"
                className={`flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-600 ${
                  isOpen ? "" : "justify-center"
                } ${
                  pathname === "/provider"
                    ? "text-yellow-500"
                    : "text-white"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6  hover:text-yellow-600  `}
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </span>
                <span className={isOpen ? "font-semibold" : "lg:hidden"}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li
            >
              <Link
                href="/provider/new-service"
                className={`flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-600 ${
                  isOpen ? "" : "justify-center"
                } ${
                  pathname === "/provider/new-service" ? "text-yellow-500" : "text-white"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6  hover:text-yellow-600 ${
                      pathname === "/provider/new-service"
                        ? "text-yellow-600"
                        : "text-white"
                    } `}
                  >
                    <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                  </svg>
                </span>
                <span className={isOpen ? "font-semibold" : "lg:hidden"}>
                  New service
                </span>
              </Link>
            </li>
            <li
            >
              <Link
                href="/provider/my-services"
                className={`flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-600 ${
                  isOpen ? "" : "justify-center"
                } ${
                  pathname ==="/provider/my-services"
                    ? "text-yellow-500"
                    : "text-white"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6  hover:text-yellow-600 ${
                      pathname ==="/provider/my-services"
                        ? "text-yellow-600"
                        : "text-white"
                    } `}
                  >
                    <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                    <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                    <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
                  </svg>
                </span>
                <span className={isOpen ? "font-semibold" : "lg:hidden"}>
                  My services
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/provider/history"
                className={`flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-600 ${
                  isOpen ? "" : "justify-center"
                } ${
                  pathname === "/provider/history" ? "text-yellow-500" : "text-white"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6  hover:text-yellow-600 ${
                      pathname === "/provider/history"
                        ? "text-yellow-600"
                        : "text-white"
                    } `}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className={isOpen ? "font-semibold" : "lg:hidden"}>
                  History
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/provider/payment"
                className={`flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-600 ${
                  isOpen ? "" : "justify-center"
                } ${
                  pathname === "/provider/payment" ? "text-yellow-500" : "text-white"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6  hover:text-yellow-600 ${
                      pathname === "/provider/payment"
                        ? "text-yellow-600"
                        : "text-white"
                    } `}
                  >
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className={isOpen ? "font-semibold" : "lg:hidden"}>
                  Payment
                </span>
              </Link>
            </li>
            {/* Add other sidebar links here */}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="flex-shrink-0 p-2 border-t max-h-14">
          <Link
            href={"/"}
            className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring"
          >
            <span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <span className={isOpen ? "font-semibold" : "lg:hidden"}>
              Home
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
