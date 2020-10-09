import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div >
      <div >
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
