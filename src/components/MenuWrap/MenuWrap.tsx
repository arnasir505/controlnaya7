import React from 'react';
import './MenuWrap.css';

interface MenuWrapProps {
  menuItems: React.ReactNode[];
}

const MenuWrap: React.FC<MenuWrapProps> = ({ menuItems }) => {
  return (
    <div className='menuWrap d-flex flex-wrap justify-content-between align-items-center gap-2'>
      <span className='border-text orange'>Add items</span>
      {menuItems}
    </div>
  );
};

export default MenuWrap;
