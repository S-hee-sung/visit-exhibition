import React from 'react';
import { Outlet } from 'react-router';
import CustomerService from './CustomerService';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function Layout(props) {
  return (
    <>
      <Header />
      <ScrollToTop />
      <CustomerService/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;