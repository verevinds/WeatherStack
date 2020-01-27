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

      if(isLoading && location){
        return(
          <Fragment>
            <InformationMenu 
              name = { this.props.store.initialState.params.query }
              fClickLocation = { this.fClickLocation }
              />
            <DashBoard store={this.props.store.initialState}/>
          </Fragment>
        )
      }
      return(
        <Fragment>
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