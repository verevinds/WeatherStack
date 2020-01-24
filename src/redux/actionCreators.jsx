import{
    CHANGE_SEARCH,
    CLICK_LOCATION
} from './constants'

export const changeSearch = text => ({ type: CHANGE_SEARCH, text })
export const clickLocation = text => ({type: CLICK_LOCATION, text })