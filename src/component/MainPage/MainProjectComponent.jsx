import ListLocation from './ListLocation/ListLocation.jsx'
import '@styles/MainProjectComponent/MainProjectComponent.css'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  changeSearch,
  clickLocation
} from '../../redux/actionCreators.jsx'

class MainProjectComponent extends PureComponent {

    onChange = event => {
    const { changeSearch } = this.props
    const valInputSearch = event.target.value
    changeSearch(valInputSearch)
    }

    fClickLocation = event =>{
    this.props.history.push('/InformationPage')
      const { clickLocation } = this.props
      const valButtonSearch = event.target.value
      clickLocation(valButtonSearch)
    }

  render(){
    let { query } = this.props.store.params
    
    return(      
      <div>
      <div className={'search'}>
          <input placeholder = "Введите название локации" value = { query } className = { 'search__input' } type = { 'search' } onChange = { this.onChange }/>
      </div>
      <ListLocation list={this.props.store.city} fClickLocation={this.fClickLocation}/>
      </div>
    ) 
  }
}

function mapStateToProps(state){
  return{
    store: state.initialState
  }
}


export default connect(mapStateToProps, { changeSearch, clickLocation })(MainProjectComponent);