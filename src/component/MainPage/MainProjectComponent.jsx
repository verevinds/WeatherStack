import React from 'react';
import ListLocation from './ListLocation/ListLocation.jsx'
import '@styles/MainProjectComponent/MainProjectComponent.css'

const city = [
    {
      "city": "Москва"
    },
    {
      "city": "Санкт-Петербург"
    },
    {
      "city": "Екатеренбург"
    },
    {
      "city": "Новосибирск"
    },
    {
      "city": "Новокузнецк"
    },
    {
      "city": "Самара"
    },
    {
      "city": "Ижевск"
    },
    {
      "city": "Омск"
    },
]
const MainProjectComponent = () => (
    <div>
        <div className={'search'}>
            <input placeholder="Введите название локации" className={'search__input'} type={'search'}/>
        </div>
        <ListLocation list={city} />
    </div>
);


export default React.memo(MainProjectComponent);