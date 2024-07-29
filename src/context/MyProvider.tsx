"use client";
import React, { useState, ReactNode } from "react";
import MyContext from "./MyContext";

interface MyProviderProps {
    children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLoginClose = () => {
        setIsLoginOpen(false);
    };

    return (
        <MyContext.Provider
            value={{
                isLoginOpen,
                setIsLoginOpen,
                onLoginClose,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
