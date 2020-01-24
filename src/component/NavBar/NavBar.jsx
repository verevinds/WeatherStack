import React from 'react';
import { NavLink } from 'react-router-dom'
import '@styles/NavBar/NavBar.css'


const NavBar = () => (
  <div className={ 'body' }>
    <NavLink to="/" className={ 'item' }>Главная</NavLink>
    <NavLink to="/InformationPage" className={ 'item' }>Информация</NavLink>
  </div>
)

export default React.memo( NavBar )