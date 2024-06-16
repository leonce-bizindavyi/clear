"use client"
import React, { useState } from "react";
const SideContext = React.createContext();

function SideProvider(props) {
  const [isOpen, setOpen] = useState(false);
  const [noticationOpened, setNoticationOpened] = useState(false)
  const [accountDroped, setAccountDroped] = useState(false)
  const [isClientOpen, setisClientOpen] = useState(false);
  
  return (
    <SideContext.Provider value={{ 
      isOpen, setOpen,
      noticationOpened, setNoticationOpened,
      accountDroped, setAccountDroped,
      isClientOpen, setisClientOpen
     }}>
      {props.children}
    </SideContext.Provider>
  );
}

export { SideProvider, SideContext };
