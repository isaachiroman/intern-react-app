import axios from 'axios';
import { URL_FETCH_LIST_ALL_RESULT, SEARCH, SEARCH_STARTED } from '../constants';
import STORE from '../stores';
import Axios from 'axios';

export const search = (keyword) => {
    return (dispatch, getState) => {
        dispatch(searchStarted());
        // console.log('current state: ', getState());
        const URL = `${URL_FETCH_LIST_ALL_RESULT}/?keyword=${keyword}`;
        Axios.get(URL)
            .then( resp => {
                let respt = resp.data;
                // console.log({ respt });
                dispatch({
                    type: SEARCH,
                    payload: respt
                });
            } )
            .catch( err =>  console.log({err: err.message }) )
    }
    
}
// export const suggestion = (keyword, name) =>{
//     return dispatch => {
//         const URL = `${URL_FETCH_LIST_ALL_RESULT}/?keyword=${keyword}`;
//         Axios.get(URL)
//             .then( resp => {
//                 let respt = resp.data;
//                 console.log({ respt });
                
//             })
//             .catch( err => console.log({ err: err.message }));
//     }
// }
const searchStarted = () => ({
    type: SEARCH_STARTED
  });
  