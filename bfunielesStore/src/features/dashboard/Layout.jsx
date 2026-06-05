import React, { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Nabvar } from './components/nabvar';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {

  return (
    <div className="font-['Arial',sans-serif] h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nabvar />
        <Outlet />
      </div>
    </div>
  );
};