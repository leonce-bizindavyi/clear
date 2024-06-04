"use client"
import React, { useEffect, useState } from 'react';

const ServiceContext = React.createContext();

function ServiceProvider(props) {
    const [wishes, setWishes] = useState([])
    const [carts, setCarts] = useState([])
    const [count, setCount] = useState(0)
    function addInWishilist(service){
        setWishes(preServ=>[...preServ,service])
    }
    function isInWishilist(service){
        const res =  wishes.find(serv=>serv.uuid === service)
        return res
    }
    function addToCart(service){
        setCarts(preServ=>[...preServ,service])
    }
    function totalIncart() {
      const totalPrice = carts.reduce((acc, product) => acc + product.totalPrice, 0);
      setCount(totalPrice)
      return totalPrice
    }
    function increment(serviceId) {
      console.log(serviceId)
      const service = carts.find(cart => cart.id === parseInt(serviceId));
      console.log(service)
    }
  return (
    <ServiceContext.Provider value={{ 
        wishes,
        carts,
        addInWishilist,
        isInWishilist,
        addToCart,
        count,
        totalIncart,
        increment
     }}>
      {props.children}
    </ServiceContext.Provider>
  );
}

export { ServiceProvider, ServiceContext };
