import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '@styles/Alert/Alert.css'
import Alert from './Alert.jsx';

class AlertConponent extends PureComponent{
    render(){
        const { isLoading, error } = this.props.initialState

        if(isLoading && error){
        return <Alert info = {error.info} code = {error.code}/>
        }

        return(
            <Fragment>
            </Fragment>
        )
    }
}

function mapStateToProps (props){
    return(
        props
    )
}

export default connect( mapStateToProps )( AlertConponent )