import React from 'react'

const InputLocation = (props) => {
    return(
        <div className={ 'search' }>
            <input 
            placeholder = "Введите название локации" 
            value = { props.query } 
            className = { 'search__input' } 
            type = { 'search' } 
            onChange = { props.onChange }/>
            
            <button
            className = {'search-button'}
            onClick={()=>{
                this.props.history.push('/InformationPage')
                }}>
            Посмотреть
            </button>
        </div>
    )
} 

export default React.memo(InputLocation)