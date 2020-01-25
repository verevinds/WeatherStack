import{
    CHANGE_SEARCH,
    CLICK_LOCATION,
    REQUESTED,
    REQUESTED_SUCCEEDED,
    FETCH_LOCATION_FUTURE,
    FETCH_LOCATION
} from './constants'

export const changeSearch = text => ({ type: CHANGE_SEARCH, text })
export const clickLocation = text => ({ type: CLICK_LOCATION, text })
export const requestWeatherstack = () => ({ type: REQUESTED })
export const onRequestSuccess = data => ({ type: REQUESTED_SUCCEEDED, data })
export const fetchLocationFuture = search => ({ type: FETCH_LOCATION_FUTURE, search });
export const fetchLocation = search => ({ type: FETCH_LOCATION, search });