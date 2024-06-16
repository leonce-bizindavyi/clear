import Image from 'next/image';
import React, { useState } from 'react'

function AddImages({images, setImages,defaultImg, setDefaultImg}) {
  const [isDragged, setDragged] = useState(false)


  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filtredFiles = files.filter((file) => file.type.startsWith('image/'))
    setImages(filtredFiles)
}
const handleFileDrop = (e) => {
  e.preventDefault()
  const files = Array.from(e.dataTransfer.files);
  const filtredFiles = files.filter((file) => file.type.startsWith('image/'))
  setImages(filtredFiles) 
}
const handleDragOver = (e) => {
  e.preventDefault();
  setDragged(true)

};
const handleSetDefault = (index) => {
   setDefaultImg(index)
}


  return (
    <div className="  w-full max-w-[800px] bg-white">
    <form
      className="py-6 px-6 sm:px-9"
      action=""
      method="POST"
    >
        <h1 className='text-2xl text-gray-900 font-bold mb-4'>Add Images</h1>
        <div>
            <article aria-label="File Upload Modal" className="relative h-full w-full flex flex-col  bg-white  rounded-md" >

          <section className="overflow-auto  w-full h-full flex flex-col">
              <div className="flex items-center justify-center w-full">
                  {images.length === 0 && (
                      <label onDragOver={handleDragOver} onDrop={handleFileDrop} htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <i>
                                  <svg className="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                      <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                  </svg>
                              </i>
                              {isDragged ?
                                  <p className="mb-2 text-sm text-gray-500 ">
                                      <span className="font-semibold">Drop files here </span>
                                  </p>
                                  :
                                  <>
                                      <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                      <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX 8 Images. 800x400px)</p>
                                  </>}
                          </div>
                          <input id="dropzone-file" accept="image/*" multiple onChange={(e) => handleFileChange(e)} type="file" className="hidden" />
                      </label>
                  )}
              </div>
              {images.length > 0 ?
                  <div className='grid grid-rows-1 sm:grid-cols-2 gap-2 p-2 '>
                      {
                          images.map((image, index) => {
                              return (
                                  <div key={index} onClick={() => handleSetDefault(index)} className={`max-w-[25rem] h-full  ${index === defaultImg && "p-1 shadow bg-orange-500"}`}>
                                      <Image width={800} height={800} alt="upload preview" src={URL.createObjectURL(image)} className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                                  </div>
                              )
                          })
                      }
                  </div>
                  :
                  <ul id="gallery" className="flex flex-1 flex-wrap mt-3">
                      <li id="empty" className="h-full w-full text-center flex flex-col justify-center items-center">
                          <Image width={700} height={700} className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                          <span className="text-small text-gray-500">No files selected</span>
                      </li>
                  </ul>
              }

          </section>
          </article>
        </div>
        

    </form>

</div>
  )
}

export default AddImages