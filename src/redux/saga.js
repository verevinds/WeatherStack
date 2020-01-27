import{
    put,
    call,
    takeLatest
} from 'redux-saga/effects'
import * as axios from 'axios'
import{
    requestWeatherstack,
    onRequestSuccess,
    onRequestError,
    onRequestSuccessHistory
} from './actionCreators.jsx'
import { 
    FETCH_LOCATION,
    FETCH_LOCATION_FUTURE,
    CLICK_LOCATION
} from './constants'
const querystring =  require('querystring');

export function* watchFetch() {
    yield takeLatest( FETCH_LOCATION, fetchAsync )
    yield takeLatest( FETCH_LOCATION_FUTURE, fetchAsyncFuture )
    yield takeLatest( CLICK_LOCATION, fetchAsyncHistory )
}

function* fetchAsync( props ){
    try{
        yield put( requestWeatherstack() )
        const response = yield call( () => axios.get( `http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}`))
        yield put( response.data.error ? onRequestError(response.data.error) : onRequestSuccess( response ) )

    }catch( error ){
        console.log(error.json())
    }
}

function* fetchAsyncFuture( props ){
    try{
        yield put( requestWeatherstack() )
        const response = yield call( () => axios.get( `http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}&forecast_days=1&hourly=1` ))
        yield put( response.data.error ? onRequestError(response.data.error) : onRequestSuccessHistory( response ) )
    }catch( error ){
        console.log( error.message )
    }
}

function* fetchAsyncHistory( props ){
    try{
        yield put( requestWeatherstack() )
        const response = yield call( () => axios.get( `http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}` ))
        yield put( response.data.error ? onRequestError(response.data.error) : onRequestSuccessHistory( response ) )

    }catch( error ){
        console.log(error.message)
    }
}
