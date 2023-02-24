import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;