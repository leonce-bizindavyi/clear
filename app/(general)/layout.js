"use client"
import { useState } from "react";
import SideBar from '@/app/ui/navbar/sidebar'
import Navbar from "../ui/navbar/navbar";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <SideBar toggleSidebar = {toggleSidebar} isOpen = {isOpen}/>
    <div className={`w-[100%] bg-gray-200 ${isOpen ? 'opacity-30' : ''} relative`}>
         

        <Navbar toggleSidebar = {toggleSidebar } isOpen = {isOpen}/>
         {children}
        </div>
        
    </>
  );
}
