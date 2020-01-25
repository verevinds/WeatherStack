import{
    delay,
    put,
    call,
    takeLatest
} from 'redux-saga/effects'
import * as axios from 'axios'
import{
    requestWeatherstack,
    onRequestSuccess
} from './actionCreators.jsx'
import { 
    FETCH_LOCATION,
    FETCH_LOCATION_FUTURE
} from './constants'

export function* watchFetch() {
    yield takeLatest( FETCH_LOCATION, fetchAsync )
    yield takeLatest( FETCH_LOCATION_FUTURE, fetchAsyncFuture )
}

function* fetchAsync( props ){
    try{
        yield delay(2000)
        yield put( requestWeatherstack() )
        const response = yield call( () => axios.get( `http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}` ))
        yield put( onRequestSuccess( response ) )
    }catch( error ){
        console.log( error )
    }
}

function* fetchAsyncFuture( props ){
    try{
        yield delay(100)
        yield put( requestWeatherstack() )
        const response = yield call( () => axios.get( `http://api.weatherstack.com/current?access_key=e65fcbdb6b7edea6d370e4fd261bf357&query=${props.search}&forecast_days=1&hourly=1` ))
        yield put( onRequestSuccess( response ) )
    }catch( error ){
        console.log( error )
    }
}

