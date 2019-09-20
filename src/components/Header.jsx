import React from 'react';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src='./assets/QuantumTVlogo.png'
      alt='Logo de QuantumTV'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='./assets/UserIcon.png' alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
