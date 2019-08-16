import { URL_COUNT_BY_KEYWORD, URL_FETCH_LIST_ALL_RESULT, SEARCH, SEARCH_STARTED, COUNT_SEARCH_RESULT } from '../constants';
// import STORE from '../stores';
import Axios from 'axios';

export const search = (keyword) => {
    console.log(keyword)
    return dispatch => {
        dispatch(searchStarted());
        const URL = `${URL_FETCH_LIST_ALL_RESULT}?keyword=${keyword}`;
        Axios.get(URL)
            .then(resp => {
                let respt = resp.data;
                dispatch({
                    type: SEARCH,
                    payload: respt
                });
            } )
            .catch( err => console.log({ err: err.message }) )
    }
}

export const countSearchResult = (keyword, type='') => {
    console.log(keyword, type)
    return dispatch => {
        const URL = `${URL_COUNT_BY_KEYWORD}?keyword=${keyword}&type=${type}`;
        Axios.get(URL)
            .then(resp => {
                let respt = resp.data;
                dispatch({
                    type: COUNT_SEARCH_RESULT,
                    totalResult: respt[0]
                });
            })
            .catch( err => console.log({ err: err.message }))
    }
    // console.log(params)
    // return async dispatch => {
        
    //     try {
    //         const response = await Axios.get(URL_COUNT_BY_KEYWORD, { params })
    //         dispatch({
    //             type: COUNT_SEARCH_RESULT,
    //             totalResult: response.data[0]
    //         })
    //     } catch (error) {

    //     }
    // }
}

const searchStarted = () => ({
    type: SEARCH_STARTED
});
  