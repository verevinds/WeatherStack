import React from 'react'
import { NavLink } from 'react-router-dom'

const InputLocation = (props) => {
    return(
        <div className={ 'search' }>
            <input 
            placeholder = "Введите название локации" 
            value = { props.query } 
            className = { 'search__input' } 
            type = { 'search' } 
            onChange = { props.onChange }/>
            
            <NavLink to={'/informationpage'} className = {'search-button'}>Посмотреть</NavLink>
        </div>
    )
} 

export default React.memo(InputLocation)