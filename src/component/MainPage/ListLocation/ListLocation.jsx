import React from 'react';

const ListLocation = (props) =>{
    console.log(props)
    return(
        <div className={'listLocation'}>
            {props.list.map(item=><span className={'listLocation__item'} key={item.city}>{item.city}</span>)}
        </div>
    )
}

export default React.memo(ListLocation)
    