import React, { PureComponent, Fragment } from 'react'
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
        <Fragment>
          {
            this.props.store.initialState.params.query === undefined 
            ? 'Вернитесь на главную страницу. Заполните поле локации и нажмите "просмотреть"' 
            : isLoading !== true 
            ? 'Загрузка...' : location === undefined 
            ? 'В название локации ошибка' :
              <Fragment>
                <InformationMenu 
                  name = { this.props.store.initialState.params.query }
                  fClickLocation = { this.fClickLocation }
                  />
              <DashBoard store={this.props.store.initialState}/>
              </Fragment>
          }
        </Fragment>
      ) 
    }
}

function mapStateToProps( state ){
  return {
    store: state
  }
}

export default connect( mapStateToProps, { fetchLocationFuture } )( InformationPageComponent )