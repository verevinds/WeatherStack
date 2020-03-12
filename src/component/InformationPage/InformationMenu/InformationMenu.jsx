import React from 'react';
import '@styles/InformationPage/InformationMenu/InformationMenu.css';
import { NavLink } from 'react-router-dom';

const InformationMenu = props => {
  return (
    <div className={'information-menu'}>
      <NavLink exact to="/" className={'information-menu__button'}>
        Назад
      </NavLink>

      <button
        className={'information-menu__button'}
        value={props.name}
        onClick={props.fClickLocation}
      >
        Погода на завтра
      </button>
    </div>
  );
};

export default React.memo(InformationMenu);
