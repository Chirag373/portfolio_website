import React from 'react';
import styles from '../styles/home.module.css';
import NavbarComponent from '@/components/Navbar';
import HeroComponent from '@/components/HeroSection';

export default function Home() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <HeroComponent />
    </React.Fragment>
  );
}
