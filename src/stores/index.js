// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// export default createStore(rootReducer);

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const initState  = { };
const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(rootReducer, initState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

export default store;