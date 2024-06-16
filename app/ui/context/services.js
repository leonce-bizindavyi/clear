"use client"
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from './auth';

const ServiceContext = React.createContext();

function ServiceProvider(props) {
  const [wishes, setWishes] = useState([])
  const [carts, setCarts] = useState([])
  const [count, setCount] = useState(0)
  const {session} = useContext(SessionContext)
  
  useEffect(() => {
    if(carts.length===0){
      async function fetchCart(){
        await axios.get('/api/cart')
        .then((result)=>setCarts(result.data))
        .catch((error)=>console.log(error))
      }
      fetchCart()
    }
  }, [carts.length])
  function addInWishilist(service) {
    setWishes(preServ => [...preServ, service])
  }
  function isInWishilist(service) {
    const res = wishes.find(serv => serv.uuid === service)
    return res
  }
  async function addToCart(serviceInc,datas) {
    const service = carts.find(cart => cart.id === serviceInc.id);
    if(service){
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.id === service.id ? serviceInc : cart
        ))
        await axios.put('/api/cart', datas)
        .then((result) => console.log(result))
        .catch((error) => console.log('Error', error))
    }else{
      setCarts(preServ => [...preServ, serviceInc])
      await axios.post('/api/cart', datas)
      .then((result) => console.log(result))
      .catch((error) => console.log('Error', error))
    }
    setCount(service) 
  }
  function totalIncart() {
    const totalPrice = carts.reduce((acc, product) => acc + product.totalPrice, 0);
    setCount(totalPrice)
    return totalPrice
  }
  function increment(serviceInc) {
    const service = carts.find(cart => cart.id === parseInt(serviceInc.id));
    const end = service.end
    const start = service.start
    console.log(start,end)
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === service.id ? { ...cart, days: cart.days+1,end:service.end} : cart
      ))
  }
  function decrement(serviceInc) {
     const service = carts.find(cart => cart.id === parseInt(serviceInc.id));
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>{
        if(cart.days>1){
          return cart.id === service.id ? { ...cart, days: cart.days-1} : cart
        }
         return cart
        }
      ))
  }
  async function handleRemove (indice) {
    const newServ = carts.filter((service) => service.id != indice)
    setCarts(newServ)
    await axios.post('/api/cart/delete',{user:session.id,service:indice})
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
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
      increment,
      decrement,
      handleRemove
    }}>
      {props.children}
    </ServiceContext.Provider>
  );
}

export { ServiceProvider, ServiceContext };
