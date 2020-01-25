import React, { PureComponent } from 'react'
import '@styles/InformationPage/InformationPage.css'
import { connect } from 'react-redux'
import { 
  fetchLocationFuture
} from '../../redux/actionCreators.jsx'
import DashBoard from './DashBoard/DashBoard.jsx'
import InformationMenu from './InformationMenu/InformationMenu.jsx'


class InformationPageComponent extends PureComponent{

    fClickLocation = event => {
      
      const { fetchLocationFuture } = this.props
      const valButtonSearch = event.target.value

      fetchLocationFuture( valButtonSearch )
    }

    render() {
      const { isLoading, location } = this.props.store.initialState
      
      return(
        <div>
          <InformationMenu 
            name = { this.props.store.initialState.params.query }
            fClickLocation = { this.fClickLocation }
            />

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

export default connect( mapStateToProps, { fetchLocationFuture } )( InformationPageComponent )