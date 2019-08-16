import { SEARCH, SEARCH_STARTED, SEARCH_FAILUE, LIST_SUGGESTION, COUNT_SEARCH_RESULT } from '../constants/index';
const initState = {
    listSearch: [],
    payload: [],
    listSuggesstion: [],
    totalResult: 0,
    isShowPopup: false
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
            // console.log(action)
            return {
                ...state,
                loading: false,
                error: null,
                listSearch: [...action.payload],
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
        case COUNT_SEARCH_RESULT:
            // console.log(action.totalResult)
            return {
                ...state,
                loading: true,
                error: null,
                totalResult: action.totalResult
            }
        default:
            return state;
    }
}