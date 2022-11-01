import React, { ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-primary min-w-min">
      <Header />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full min-h-screen">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
