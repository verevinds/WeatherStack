import React, { useState } from 'react'

const Alert = ( props ) => {
    const [viewError, setViewError] = useState(true)

    if( viewError )
        return (
            <div className = { 'alert' }>
                <pre>Внимание! Ошибка { props.code }: { props.info }</pre>
                <pre className = { 'alert-exit' } onClick = { () => setViewError( false )}>&#10006;</pre>
            </div>
        )
    return null
}

export default React.memo( Alert )