import React, { ReactNode } from 'react';

// import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="grid grid-cols-12">
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className="col-span-10 min-h-screen">
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
