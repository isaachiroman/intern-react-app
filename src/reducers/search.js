import { SEARCH, SEARCH_STARTED, SEARCH_FAILUE, LIST_SUGGESTION } from '../constants/index';
const initState = {
    listSearch: [],
    payload: [],
    listSuggesstion: []
}
/**
 * 
 * @param {*} state 
 * @param {*} action { type: '', payload: {} }
 */
export default function searchReducer(state = initState, action) {
    switch(action.type) {
        case SEARCH_STARTED: 
            return {
                ...state,
                loading: true
            }
        case SEARCH:
            console.log(action)
            return {
                ...state,
                // listInfo: action.payload
                loading: false,
                error: null,
                listSearch: [...action.payload] 
            };
        case SEARCH_FAILUE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case LIST_SUGGESTION:
            return {
                ...state,
                loading:false,
                error: null,
                listSuggesstion: [...state.listSuggesstion, action.payload]
            }
        default:
            return state;
    }
}