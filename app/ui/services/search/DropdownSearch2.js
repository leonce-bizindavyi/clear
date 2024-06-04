import React from 'react'

function DropdownSearch2() {
  return (
    
    <div className="dropdown-menu w-[100%] sm:w-[30rem] absolute  ">
      
    <div className="bg-white rounded-md shadow-xl  relative mt-8  mb-4  ">
     <h1 className='text-gray-400 py-3 font-medium ml-4'>Places</h1>

        <svg className="absolute bottom-full right-4" width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
            <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF"/>
        </svg>
        <div className='results max-h-[20rem] overflow-y-auto'>
                        <div className="result1 py-6 flex items-center w-full hover:bg-gray-200 px-4">
                            <a href="#" className="flex-1">
                                <div className="text-gray-600 text-base">Profile</div>
                            </a>
                            
                        </div>
        </div>
        

    </div>

    </div>
  )
}

export default DropdownSearch2