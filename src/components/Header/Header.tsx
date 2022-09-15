import React, { memo } from 'react'

import './Header.scss';
import logo from '../../logo.svg';

function Header() {

  return (
       <header className='header'>
          <img src={logo} alt="af-logo" className='header__logo' />
       </header> 
    )
}

export default memo(Header);
