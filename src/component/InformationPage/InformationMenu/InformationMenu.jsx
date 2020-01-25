import React from 'react'
import '@styles/InformationPage/InformationMenu/InformationMenu.css'

const InformationMenu = ( props ) => {
    return(
        <div className = { 'information-menu' }>
            <button
                value = { props.name }
                onClick = { props.fClickLocation }
            >Погода на завтра</button>
        </div>
    )
}

export default React.memo( InformationMenu )