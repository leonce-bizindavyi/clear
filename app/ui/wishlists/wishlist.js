"use client"
import React from 'react'
import { useContext } from 'react'
import { ServiceContext } from '../context/services'
import BallRoom from '../properies/room/ball-room'

function Wishlist() {
    const {wishes} = useContext(ServiceContext)
  return (
    <>
    <div className='max-w-screen-xl mx-auto p-1 sm:p-2 md:p-5'>
                <h1 className='font-bold text-3xl'>Saved services</h1>
            </div>
        {wishes && wishes.length > 0 && (
                <div className="max-w-screen-xl mx-auto px-5  sm:px-10 md:px-16 shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {
                            wishes.map((wish, index) => {
                                return <BallRoom key={index} service={wish} />
                            })
                        }
                    </div>
                </div>
            )}
    </>
  )
}

export default Wishlist