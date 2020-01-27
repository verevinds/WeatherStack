import{
    CHANGE_SEARCH,
    CLICK_LOCATION,
    REQUESTED,
    REQUESTED_SUCCEEDED,
    REQUESTED_ERROR,
    FETCH_LOCATION_FUTURE,
    FETCH_LOCATION,
    REQUESTED_SUCCEEDED_HISTORY
} from './constants'

export const changeSearch = text => ({ type: CHANGE_SEARCH, text })
export const clickLocation = search => ({ type: CLICK_LOCATION, search })
export const requestWeatherstack = () => ({ type: REQUESTED })
export const onRequestSuccess = data => ({ type: REQUESTED_SUCCEEDED, data })
export const onRequestSuccessHistory = data => ({ type: REQUESTED_SUCCEEDED_HISTORY, data })
export const fetchLocationFuture = search => ({ type: FETCH_LOCATION_FUTURE, search });
export const fetchLocation = search => ({ type: FETCH_LOCATION, search });
export const onRequestError = error => ({ type: REQUESTED_ERROR, error });