import { combineReducers } from 'redux'
import { 
  CHANGE_SEARCH,
  CLICK_LOCATION,
  REQUESTED,
  REQUESTED_SUCCEEDED
} from './constants'

const initialState = {
  isLoading: false,
  params: {
    access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
    query: ''
  },
  city: [
    {
      "city": "Москва"
    },
    {
      "city": "Санкт-Петербург"
    },
    {
      "city": "Екатеринбург"
    },
    {
      "city": "Новосибирск"
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
}
const reducer = (state = initialState, action) => {
  switch( action.type ){
    case CHANGE_SEARCH:
    return {
      ...state,
      params: {
        ...state.params,
        query: action.text
      }
    }
    case CLICK_LOCATION:
      return {
        ...state,
        params: {
          ...state.params,
          query: action.text
        }
      }
    case REQUESTED:
      return {
        ...state,
        isLoading: false
      }
    case REQUESTED_SUCCEEDED:
      return {
        ...state,
        location: action.data.data.location,
        current: action.data.data.current,
        isLoading: true
      }
  }
  return state;
};
const CombineReducers = combineReducers({
  initialState: reducer
});

export default CombineReducers
