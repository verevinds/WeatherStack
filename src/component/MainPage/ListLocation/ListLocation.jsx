import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ListLocation = (props) =>{
    return(
        <div className={'listLocation'}>
            {props.list.map(item =>
                    <button 
                        to={'/InformationPage'}
                        className={'listLocation__item'} 
                        key={item.city} 
                        value={item.city} 
                        onClick={props.fClickLocation}>
                            {item.city}
                    </button>
                )
            }
        </div>
    )
}

export default React.memo(ListLocation)
    