import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/NavBar/NavBar.css';

const NavBar = () => (
  <nav className={'navbar'}>
    <span className={'navbar__title'}>Weather Stack</span>
    <div className={'navbar__body'}>
      <NavLink exact to="/" className={'navbar__item'} activeClassName={'active'}>
        Главная
      </NavLink>
      <NavLink to="/informationpage" className={'navbar__item'} activeClassName={'active'}>
        Информация
      </NavLink>
    </div>
  </nav>
);

export default React.memo(NavBar);
