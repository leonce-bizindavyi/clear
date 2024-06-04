import PriceFormat from "../../elements/price-format";
import Text from "../../elements/text";

function Review({
   images, 
   defaultImg,
   setDefaultImg, 
   handleRemoveImage,
   addresse,
   serviceInfos }) {

  const handleImageClick = (index) => {
    setDefaultImg(index)
  };

  return (
    <div className="antialiased bg-white">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            {images.length > 0 ?
              <div className="md:flex-1 px-4">
                <div className="GrandImage h-64 md:h-[25rem] rounded-lg flex justify-center items-center overflow-hidden mb-4 ">
                  <div
                    className="h-64 md:h-80 rounded-lg  duration-500   flex items-center justify-center cursor-zoom"
                  >
                    <img src={URL.createObjectURL(images[defaultImg])} alt="Image 1" className="object-contain h-full w-full" />
                  </div>

                </div>

                <div className="SmallImages flex -mx-2 mb-4  flex-row overflow-x-auto max-w-screen-sm md:max-w-xl ">
                  {images.map((img, index) => (
                    <div className="flex " key={index}>
                      <button
                        className={`focus:outline-none rounded-lg ml-4 h-14 md:h-24 w-14 md:w-24  flex items-center justify-center relative  ${index === defaultImg ? 'ring-2 ring-yellow-500 ring-inset' : ''
                          }`}
                      >
                        <img onClick={() => handleImageClick(index)} src={URL.createObjectURL(img)} alt={`Image ${img}`} className="object-contain h-full w-full" />
                        <svg onClick={() => handleRemoveImage(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-yellow-600 text-white rounded-full p-1 hover:text-red-900 absolute z-10 top-2 right-0">
                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                      </button>
                    </div>
                  ))}
                </div>

              </div>
              :
              <div className="md:flex-1 px-4">
                There is no image here uploaded
              </div>}
            <div className="Details md:flex-1 px-8  py-5 rounded-md shadow-2xl">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                <Text text={serviceInfos.title} />
              </h2>
              <p className="text-gray-500 text-sm">
                Service offered by <a href="#" className="text-yellow-600 hover:underline">Clear Solution</a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg  flex py-2 px-3 text-gray-600 font-semibold">
                    <span className="font-bold text-indigo-600 text-3xl"><PriceFormat myNumber={serviceInfos.price} /> </span>
                    <span className="text-indigo-400 mr-1 mt-1">BIF</span>/Day
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-lg sm:text-xl font-semibold">Available</p>
                  <p className="text-red-700 text-xl font-semibold hidden">Unvailable</p>
                  <p className="text-gray-400 text-sm">In good Condition</p>
                </div>
              </div>

              <p className="text-gray-600">
                <Text text={serviceInfos.body} />
                </p>

              <div className="justify-center">
                <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                  <p className="flex items-center font-medium text-gray-800 " title='places'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-yellow-700">
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                    500 Places
                  </p>
                  <p className="flex items-center font-medium text-gray-800" title='bathrooms'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-700">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>

                    {`${addresse.quarter } ${addresse.zone }`}
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review