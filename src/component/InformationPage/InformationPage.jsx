import React from 'react';
import '@styles/InformationPage/InformationPage.css'

const SecondPage = () => {
  const info = {
    "request": {
        "type": "City",
        "query": "Новосибирск, Россия",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Новосибирск",
        "country": "Россия",
        "region": "Novosibirsk",
        "lat": "55.041",
        "lon": "82.934",
        "timezone_id": "Asia/Novosibirsk",
        "localtime": "2020-01-24 22:24",
        "localtime_epoch": 1579904640,
        "utc_offset": "7.0"
    },
    "current": {
        "observation_time": "03:24 PM",
        "temperature": -1,
        "weather_code": 368,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0027_light_snow_showers_night.png"
        ],
        "weather_descriptions": [
            "Light Snow Shower, Low Drifting Snow"
        ],
        "wind_speed": 26,
        "wind_degree": 190,
        "wind_dir": "S",
        "pressure": 1005,
        "precip": 0.5,
        "humidity": 93,
        "cloudcover": 100,
        "feelslike": -7,
        "uv_index": 1,
        "visibility": 3,
        "is_day": "no"
    }
}
  return(
    <div className={'info-location'}>
      <div className={'titelInfo'}><h2>{info.location.name}</h2><img src={info.current.weather_icons}/></div>
      <div><lable>Температура:</lable> <lable>{info.current.temperature} градусов</lable></div>
      <div><lable>Сила ветра:</lable> <lable>{info.current.wind_speed}км/ч</lable></div>
      <div><lable>Направление ветра:</lable> <lable>{info.current.wind_dir}</lable></div>
      <div><lable>Давление:</lable> <lable>{info.current.pressure} MB</lable></div>
      <div><lable>Влажность:</lable> <lable>{info.current.humidity}%</lable></div>
    </div>
  )
}


export default React.memo(SecondPage);