import React from 'react'
import Service from './one-service'

function Services() {
    return (
        <>
            <h3 className="mb-6 mt-12 text-xl font-semibold text-gray-600">Services Posted</h3>
            <div className="grid grid-cols-1 gap-5  mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <Service />
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
        <Service /> 
            </div>
        </>
    )
}

export default Services