import React from 'react'
import BallRoom from './room/ball-room'

function ListProperty({services}) {
  return (
    <div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  overflow-hidden pb-4">
        {services.map((service,index)=>{
           return <BallRoom service={service} key={index} />
        })}
    </div>
    </div>
  )
}

export default ListProperty