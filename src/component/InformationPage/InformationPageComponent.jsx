import React, { PureComponent } from 'react'
import '@styles/InformationPage/InformationPage.css'
import { connect } from 'react-redux'
import DashBoard from './DashBoard/DashBoard.jsx'
import InformationMenu from './InformationMenu/InformationMenu.jsx'


class InformationPageComponent extends PureComponent{
    render() {
      const { isLoading, location } = this.props.store.initialState

      return(
        <div>
          <InformationMenu />

          {
            isLoading ? location === undefined ? 'В название локации ошибка' 
            : <DashBoard store={this.props.store.initialState}/> : 'Загрузка...'
          }
        </div>
      ) 
    }
}

function mapStateToProps( state ){
  return {
    store: state
  }
}

export default connect( mapStateToProps )( InformationPageComponent )