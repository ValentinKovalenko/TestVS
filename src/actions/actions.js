import {store} from '../store/indexStore'
import axios from "axios";
import {actionsTypes} from "../store/reducer/isReducer";

export const getUser = () => {
    const apiUrl = 'http://localhost:3000/user';
    axios.get(apiUrl).then((resp) => {
        const allUser = resp.data;
        console.log(allUser)
        store.dispatch({type: actionsTypes.AXIOS_USER, payload: allUser})
    })
}

export const getCity = () => {
    const apiUrl = 'http://localhost:3000/country';
    axios.get(apiUrl).then((resp) => {
        const allCity = resp.data;
        console.log(allCity)
        store.dispatch({type: actionsTypes.AXIOS_CITY, payload: allCity})
    })
}

export const setUser = (user) => {
    store.dispatch({type: actionsTypes.SET_USER, payload: user})
}

export const setCity = (city) => {
    store.dispatch({type: actionsTypes.SET_CITY, payload: city})
}
const headers = {
    'Content-Type': 'application/json'
}
export const sendRequest = async (user) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        body: JSON.stringify({
            ...user
        }),
        headers: headers
    })
    const res = await response.json()
    store.dispatch({type: actionsTypes.SET_NEW_USER, payload: res})
    return res
}
