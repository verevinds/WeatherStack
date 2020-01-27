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
      const { changeSearch } = this.props

      changeSearch( event.target.value )
    }

    handleSubmit = event => {
      event.preventDefault();
      const { fetchLocation } = this.props
      let { query } = this.props.store.params
      
      fetchLocation( query )
      this.props.history.push( '/InformationPage' )
    }

    fClickLocation = (event) => {
      const { clickLocation  } = this.props
      const valButtonSearch = event.target.value

      clickLocation( valButtonSearch )
      this.props.history.push( '/InformationPage' )
    }

  render() {
    let { query } = this.props.store.params

    return(      
      <Fragment>
        <InputLocation 
        query={query} 
        handleSubmit = { this.handleSubmit } 
        fClickLocation = { this.fClickLocation }
        onChange = { this.onChange }/>

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