import React from 'react';

import { sideMenus } from '@/constants/sideMenus';

const Sidebar = () => {
  return (
    <div className="w-full h-full border-r-2 border-secondary z-50">
      <div className="sticky top-20 pt-10 pl-4">
        <ul>
          {sideMenus.map((menu, i) => (
            <li key={i} className="group w-44 h-10 mb-12">
              <a href="#" className="flex items-center w-full h-full text-sm group-hover:text-cherBlue">
                <p>
                  {menu.icon}
                  {menu.menuName}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
