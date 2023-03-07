import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function Layout(props) {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;