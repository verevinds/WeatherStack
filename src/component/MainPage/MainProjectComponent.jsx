import ListLocation from './ListLocation/ListLocation.jsx'
import InputLocation from './InputLocation/InputLocation.jsx'
import '@styles/MainProjectComponent/MainProjectComponent.css'
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { 
  changeSearch,
  clickLocation,
  fetchLocation
} from '../../redux/actionCreators.jsx'

class MainProjectComponent extends PureComponent {

    onChange = event => {
      const { changeSearch, fetchLocation } = this.props
      const valInputSearch = event.target.value

      changeSearch( valInputSearch )
      if ( valInputSearch.length >= 3 ) {
        fetchLocation( valInputSearch )
      }
    }

    fClickLocation = event => {
      const { clickLocation, fetchLocation } = this.props
      const valButtonSearch = event.target.value

      fetchLocation( valButtonSearch )
      clickLocation( valButtonSearch )
      this.props.history.push( '/InformationPage' )
    }

  render() {
    let { query } = this.props.store.params
    
    return(      
      <Fragment>
        <InputLocation query={query} onChange={this.onChange}/>
        <ListLocation list = { this.props.store.city } fClickLocation = { this.fClickLocation }/>
      </Fragment>
    ) 
  }
}

function mapStateToProps( state ){
  return{
    store: state.initialState
  }
}


export default connect( mapStateToProps, { changeSearch, clickLocation, fetchLocation } )( MainProjectComponent );