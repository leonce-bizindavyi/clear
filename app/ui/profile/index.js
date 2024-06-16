"use client"
import React, { useContext } from 'react'
import { SessionContext } from '../context/auth'
import Image from 'next/image'

function Profile() {
    const { session } = useContext(SessionContext)
    return (
        <section class="pt-4">
            {session && (
                <div class="w-full lg:w-8/12 px-4 mx-auto">
                    <div class="relative flex flex-col min-w-0 break-words text-gray-700 bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4 flex justify-center">
                                    <div class="relative bg-red-900">
                                        <Image width={700} height={700} alt="..." src="/img/img1.jpg" class="shadow-xl  rounded-full h-[150px] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] object-cover" />
                                    </div>
                                </div>

                                <div class="w-full px-4 text-center mt-20">
                                    <div className='status flex justify-center py-4 lg:pt-8 pt-8'>
                                        <div>
                                            <span className='bg-yellow-500 px-4 py-2 rounded-md text-white'>Buyer</span>
                                            {/* <span className='bg-yellow-500 px-4 py-2 rounded-md text-white'>Client</span> */}
                                        </div>
                                    </div>
                                    <div class="flex justify-center items-center mt-12 space-x-4 py-4 lg:pt-4 pt-8">
                                        <div class="text-center">
                                            <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-700 ">
                                                {session.name}
                                            </h3>
                                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                                {session.adresse}
                                            </div>
                                            <div class="mb-2 text-blueGray-600 mt-10">
                                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                                Web Designer
                                            </div>
                                        </div>
                                        <div class="mr-4 p-3 text-center bg-black rounded-md">
                                            <span class="text-3xl font-bold block uppercase tracking-wide text-white">
                                                22
                                            </span>
                                            <span class="text-sm text-gray-400">Services Uploaded</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-gray-700">
                                            Description Profile
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Profile