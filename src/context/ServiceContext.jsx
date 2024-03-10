import React, { createContext, useContext, useState } from "react";

// Create a context
export const ServiceContext = createContext();

// Create a provider component
export const ServiceContextProvider = ({ children }) => {
    const [selectedService, setSelectedService] = useState();
    const [isActive, setIsActive] = useState(false);
    return (
        <ServiceContext.Provider
            value={{
                selectedService,
                setSelectedService,
                isActive,
                setIsActive,
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};
