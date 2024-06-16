"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const WishContext = React.createContext();

function WishProvider(props) {
  const [wishes, setWishes] = useState([]);
  const [isWished, setWished] = useState(false);
  useEffect(() => {
    if (wishes.length === 0) {
      async function getWishlist() {
        await axios
          .get("/api/wish")
          .then((result) => console.log(result))
          .catch((error) => console.log("Error", error));
      }
      getWishlist();
    }
  }, [wishes.length]);
  function isInWishilist(id) {
    const newValue = wishes.filter((wish) => wish.id === id);
    setWished(newValue.length > 0)
    return newValue.length > 0
    
  }
  function AddToWhishlist(service) {
    setWishes((preWish) => [...preWish, service]);
  }
  function removeToWhishlist(id) {
    const newValue = wishes.filter((wish) => wish.id != id);
    setWishes(newValue);
  }
  return (
    <WishContext.Provider
      value={{
        wishes,
        isInWishilist,
        isWished,
        AddToWhishlist,
        removeToWhishlist,
      }}
    >
      {props.children}
    </WishContext.Provider>
  );
}

export { WishContext, WishProvider };
