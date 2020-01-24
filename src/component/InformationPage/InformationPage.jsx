import React, {PureComponent} from 'react';
import '@styles/InformationPage/InformationPage.css'
import * as axios from 'axios';
import {connect} from 'react-redux'


class InformationPage extends PureComponent{
  state = {
    location: {},
    current: {}
  }


  componentDidMount() {
    let { query } = this.props.store.initialState.params
    query ? query : query = 'Новосибирск'

    const params = {
      access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
      query: query
    }

    axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const current = response.data.current
        this.setState({current})
        
        const location = response.data.location
        this.setState({location})
      })
      .catch(error => {
        console.log(error)
      });
  }

    render() {
      const {location, current} = this.state
      
      return (
        <div className={'info-location'}>
          <div className={'titelInfo'}><h2>{location.name}</h2><img src={current.weather_icons}/></div>
          <div>{location.localtime}</div>
          <div><p>Температура:</p> <p>{current.temperature}</p></div>
          <div><p>Сила ветра:</p> <p>{current.wind_speed}км/ч</p></div>
          <div><p>Направление ветра:</p> <p>{current.wind_dir}</p></div>
          <div><p>Давление:</p> <p>{current.pressure} MB</p></div>
          <div><p>Влажность:</p> <p>{current.humidity}%</p></div>
          <div><p>{current.weather_descriptions}</p></div>
          <div><p>Облачность:</p><p>{current.cloudcover}</p></div>
          <div><p>УФ-индекс:</p><p>{current.uv_index}</p></div>
        </div>
      )
    }

}

function mapStateToProps(state){
  return {
    store: state
  }
}

export default connect(mapStateToProps)(InformationPage)