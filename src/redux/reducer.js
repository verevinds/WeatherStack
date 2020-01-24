import { combineReducers } from 'redux';

const initialState = {
  search: '',
  uploadData: false,
  params: {
    access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
    query: 'Новосибирск'
  },
  city: [
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
};
const reducer = (state = initialState, action) => {
  return state;
};
const CombineReducers = combineReducers({
  initialState: reducer
});

export default CombineReducers;
