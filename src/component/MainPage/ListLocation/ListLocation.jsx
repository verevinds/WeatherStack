import React from 'react'

const ListLocation = ( props ) => {
    let key = 0
    return (
        <div className={ 'listLocation' }>
            {props.list.map( item =>
                    item === undefined ? null : <button 
                        to = { '/InformationPage' }
                        className = { 'listLocation__item' }
                        key = { key++ }
                        value = { item.name }
                        onClick = { props.fClickLocation }>
                        { item.name }
                    </button>
                )
            }
        </div>
    )
}

export default React.memo( ListLocation )
    