import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function Header({ onOpenAdmission }) {
  return (
    <header className="w-full">
      <TopBar onOpenAdmission={onOpenAdmission} />
      <Navbar onOpenAdmission={onOpenAdmission} />
    </header>
  );
}
