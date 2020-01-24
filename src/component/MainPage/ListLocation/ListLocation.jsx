import React from 'react';

const ListLocation = (props) =>{
    return(
        <div className={'listLocation'}>
            {props.list.map(item=><span className={'listLocation__item'} key={item.city}>{item.city}</span>)}
        </div>
    )
}

export default React.memo(ListLocation)
    