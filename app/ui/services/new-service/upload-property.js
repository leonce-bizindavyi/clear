"use client"
import React, { useContext, useState } from 'react';
import TypeOfService from './type-of-service';
import ServiceInfo from './service-info';
import AddImages from './add-images';
import SpecificInfo from './specific-info';
import Address from './address';
import Review from './review';
import Confirmation from './confirmation';
import { SessionContext } from '../../context/auth';
import axios from 'axios';

function UploadProperty() {
  const {session} = useContext(SessionContext)
  const [step, setStep] = useState(0);
  const [type, setType] = useState({
    id: 1,
    value: "Automobile"
  })
  const [serviceInfos, setServiceInfos] = useState({
    title: '',
    price: '0',
    body: ''
  })
  const [images, setImages] = useState([])
  const [defaultImg, setDefaultImg] = useState(0)
  const [addresse, setAddresse] = useState({
    quarter: '',
    avenue: '',
    zone: '',
    commune: '',
    town: ''
  })
  const [capacity, setCapacity] = useState(1)
  const [autoInfos, setAutoInfos] = useState({
    model: '0',
    serial: '',
    plaque: '',
    color: '0',
    marque: '0',

  })
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    delete newImages.splice(index, 1)
    if (defaultImg === index || defaultImg === (images.length - 1)) {
      setDefaultImg(0)
    }
    setImages(newImages)
  }
  const steps = [
    {
      id: 1,
      value: 'Type of Service',
      component: <TypeOfService type={type} setType={setType} />
    },
    {
      id: 2,
      value: 'Service info',
      component: <ServiceInfo serviceInfos={serviceInfos} setServiceInfos={setServiceInfos} />
    },
    {
      id: 3,
      value: 'Add Images',
      component: <AddImages images={images} setImages={setImages}
        defaultImg={defaultImg} setDefaultImg={setDefaultImg} />
    },
    {
      id: 4,
      value: 'Physical Address',
      component: <Address addresse={addresse} setAddresse={setAddresse} />
    },
    {
      id: 5,
      value: 'Specific Infos',
      component: <SpecificInfo type={type} autoInfos={autoInfos} 
      setAutoInfos={setAutoInfos} capacity={capacity} setCapacity={setCapacity}/>
    },
    {
      id: 6,
      value: 'Review',
      component: <Review images={images} defaultImg={defaultImg}
        setDefaultImg={setDefaultImg} handleRemoveImage={handleRemoveImage}
        addresse={addresse}
        serviceInfos={serviceInfos} />
    },
    {
      id: 7,
      value: 'Confirmation',
      component: <Confirmation />
    }
  ];
  async function handleUpload (){
    console.log(serviceInfos, images, addresse, autoInfos, type);
  
    const formData = new FormData();
  
    // Append all form data (replace with your actual data names)
    formData.append('user', session.id);
    formData.append('title', serviceInfos.title);
    formData.append('price', serviceInfos.price);
    formData.append('body', serviceInfos.body);
    formData.append('type', type.id);
    formData.append('length', images.length);
    formData.append('avenue', addresse.avenue);
    formData.append('commune', addresse.commune);
    formData.append('quarter', addresse.quarter);
    formData.append('town', addresse.town);
    formData.append('zone', addresse.zone);
    formData.append('color', autoInfos.color);
    formData.append('marque', autoInfos.marque);
    formData.append('model', autoInfos.model);
    formData.append('plaque', autoInfos.plaque);
    formData.append('serial', autoInfos.serial);
    formData.append('defaultImg', images[defaultImg]);
    formData.append('capacity', capacity);

    for (let i = 0; i < images.length; i++) {
        if(i!=defaultImg){
            formData.append(`image${i}`, images[i]);
        }
    }
  
    try {
      const response = await axios.post('/api/services/new', formData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the response as JSON (if applicable)
      console.log('Upload successful:', data); // Handle the successful response
    } catch (error) {
      console.error('Upload failed:', error); // Handle any errors during the upload process
    }
  };
  const handleNext = () => {
    switch (step){
      case 1: 
        if(serviceInfos.body && serviceInfos.title && serviceInfos.price != '0'){
          setStep(step+1)
        }
        break;
      case 2: 
      if(images.length > 0){
        setStep(step+1)
      }
        break;
      case 3:
        if(addresse.avenue && addresse.commune && addresse.quarter && addresse.zone && addresse.town){
          setStep(step+1)
        }
        break;
      case 4:
        if(type.id === 1){
          if( autoInfos.color !='0' && autoInfos.marque!='0' && autoInfos.model !='0' && autoInfos.plaque && autoInfos.serial){
            setStep(step+1)
          }
        }else{
          handleUpload()
        }
        break;
      default:
        if (step < steps.length + 1) {
          setStep(step + 1);
        }
  };
}

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-screen min-h-screen  mt-4  pb-4">
      <div className="hidden lg:flex pb-3 justify-center items-center  ">
        {steps.map((s) => (
          <div key={s.id} className='flex flex-col   justify-center items-center '>
            <div className="flex  w-full">
              <div className=' '>
                <div className={`w-14 h-14 ${step >= s.id ? 'bg-yellow-700' : step === s.id - 1 ? 'bg-gray-500 animate-pulse' : 'bg-gray-300'} mx-auto rounded-full text-lg text-white flex items-center`}>
                  <span className="text-white text-center w-full">
                    {step >= s.id ? <i className="fa fa-check w-full fill-current white"></i> : `${s.id}`}
                  </span>
                </div>
                <div className="text-gray-700 font-semibold">{s.value}</div>
              </div>
              <div className="w-14 flex items-center">
                <div className="w-full bg-gray-300 rounded">
                  <div className={`bg-yellow-500  text-xs leading-none py-1 text-center text-gray-900 rounded ${step > s.id - 1 ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='conteent flex flex-col items-center justify-center p-2 md:p-12 '>
        {steps[step].component}
        <div className="flex justify-between mt-4 w-full max-w-[800px]" >
          <button className="bg-black text-white  py-2 px-4 rounded disabled:hidden" onClick={handlePrevious} disabled={step === 0}>
            Prev
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded disabled:hidden " onClick={handleNext} disabled={step === steps.length - 1}>
            Next
          </button>
        </div>
      </div>


    </div>
  );
}

export default UploadProperty;
