// src/components/Layout/Layout.js
import React from 'react';
import Editor from '../Editor/Editor';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import RunButton from '../RunButton/RunButton';
import Output from '../Output/Output';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Online Python Compiler</h1>
      <ThemeToggle />
      <Editor />
      <RunButton />
      <Output />
    </div>
  );
};

export default Layout;
  