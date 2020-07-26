import { takeEvery, put, call } from 'redux-saga/effects'
import {LOAD_POST, requestPost} from './action'
import {sortRequestData} from '../utils'

const apiKey = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
const fetchPhoto = () => {
    return fetch(`https://api.unsplash.com/photos?client_id=${apiKey}`)
        .then(response => response.json())
}

export function* followPost() {
    yield takeEvery(LOAD_POST, waitingLoadPost)
}

function* waitingLoadPost() {
    const data = sortRequestData(yield call(fetchPhoto))
    console.log(data)
    yield put(requestPost(data))
}
