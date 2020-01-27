import { combineReducers } from 'redux'
import { 
  CHANGE_SEARCH,
  CLICK_LOCATION,
  REQUESTED,
  REQUESTED_SUCCEEDED,
  REQUESTED_ERROR,
  REQUESTED_SUCCEEDED_HISTORY
} from './constants'

const initialState = {
  isLoading: false,
  params: {
    access_key: 'e65fcbdb6b7edea6d370e4fd261bf357',
    query: undefined
  },
  city: [
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
          query: action.search
        }
      }
    case REQUESTED:
      return {
        ...state,
        error: undefined,
        location: undefined,
        current: undefined,
        isLoading: false
      }
    case REQUESTED_SUCCEEDED:
      return {
        ...state,
        location: action.data.data.location,
        current: action.data.data.current,
        city: [
          ...state.city,
          action.data.data.location
        ],
        isLoading: true
      }
      case REQUESTED_SUCCEEDED_HISTORY:
        return {
          ...state,
          location: action.data.data.location,
          current: action.data.data.current,
          isLoading: true
        }
    case REQUESTED_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
  }
  return state;
};
const CombineReducers = combineReducers({
  initialState: reducer
});

export default CombineReducers
