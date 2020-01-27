import React from 'react';
import '@styles/InformationPage/InformationPage.css'


const DashBoard = (props) =>{
  const { location, current } = props.store
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

export default React.memo(DashBoard)