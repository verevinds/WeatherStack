import ListLocation from './ListLocation/ListLocation.jsx'
import '@styles/MainProjectComponent/MainProjectComponent.css'
import React, { PureComponent } from 'react'
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
      <div>
        <div className={ 'search' }>
            <input 
              placeholder = "Введите название локации" 
              value = { query } 
              className = { 'search__input' } 
              type = { 'search' } 
              onChange = { this.onChange }/>
            
            <button
              className = {'search-button'}
              onClick={()=>{
                this.props.history.push('/InformationPage')
                }}>
              Посмотреть
            </button>
        </div>
        <ListLocation list = { this.props.store.city } fClickLocation = { this.fClickLocation }/>
      </div>
    ) 
  }
}

function mapStateToProps( state ){
  return{
    store: state.initialState
  }
}


export default connect( mapStateToProps, { changeSearch, clickLocation, fetchLocation } )( MainProjectComponent );