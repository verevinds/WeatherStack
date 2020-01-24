import React from 'react';
import ListLocation from './ListLocation/ListLocation.jsx'
import '@styles/MainProjectComponent/MainProjectComponent.css'
import { PureComponent } from 'react';
import { connect } from 'react-redux';

class MainProjectComponent extends PureComponent {

  render(){
    return(      
      <div>
      <div className={'search'}>
          <input placeholder="Введите название локации" className={'search__input'} type={'search'}/>
      </div>
      <ListLocation list={this.props.store.city} />
      </div>
    ) 
  }
}

function mapStateToProps(state){
  return{
    store: state.initialState
  }
}


export default connect(mapStateToProps)(MainProjectComponent);