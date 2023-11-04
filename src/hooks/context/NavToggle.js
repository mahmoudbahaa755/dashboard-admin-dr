'use client'
import React, { createContext, useState } from 'react';

// Create a context
export const NavToggleContext = createContext();

const NavToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navigation
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavToggleContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NavToggleContext.Provider>
  );
};

export default NavToggleProvider;