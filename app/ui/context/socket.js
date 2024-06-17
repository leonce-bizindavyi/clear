"use client";
import React, { useEffect, useState } from "react";
const SocketContext = React.createContext();

function SocketProvider(props) {
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const newSocket = io("http://localhost:8088");
        setSocket(newSocket);
        console.log(newSocket)
        return () => {
            newSocket.close();
        };
    }, [setSocket]);
    

    return (
        <SocketContext.Provider
            value={{
                socket
            }}
        >
            {props.children}
        </SocketContext.Provider>
    );
}

export { SocketContext, SocketProvider };
