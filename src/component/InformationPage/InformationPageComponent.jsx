import React, { PureComponent } from 'react'
import '@styles/InformationPage/InformationPage.css'
import { connect } from 'react-redux'
import DashBoard from './DashBoard/DashBoard.jsx'


class InformationPageComponent extends PureComponent{
    render() {
      const { isLoading, location } = this.props.store.initialState

      return isLoading ? location === undefined ? 'В название локации ошибка' 
        : <DashBoard store={this.props.store.initialState}/> : 'Загрузка...'
    }
}

function mapStateToProps( state ){
  return {
    store: state
  }
}

export default connect( mapStateToProps )( InformationPageComponent )