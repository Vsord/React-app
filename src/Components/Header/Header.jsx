import React from 'react'
import headerClass from './Header.module.css'

const Header = () => {
  return (
    <div className={headerClass.header}>
      <div className={headerClass.header_logo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eXij3wXWCP96Le5indhsKgIrI8yflR21-g&usqp=CAU" alt="" />
      </div>
    </div>
  );
};

export default Header;