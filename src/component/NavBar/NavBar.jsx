import React from 'react';
import { NavLink } from 'react-router-dom'
import '@styles/NavBar/NavBar.css'


const NavBar = () => (
  <div className={ 'body' }>
    <NavLink exact to="/" className={ 'item' } activeClassName = { 'active' }>Главная</NavLink>
    <NavLink to="/informationpage" className={ 'item' }  activeClassName = { 'active' }>Информация</NavLink>
  </div>
)

export default React.memo( NavBar )