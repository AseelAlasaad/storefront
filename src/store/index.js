// import { createStore, combineReducers } from "redux";
// import {composeWithDevTools} from 'redux-devtools-extension';
// import categoryReducer from './categories';
// import productReducer from './products';


// const reducers= combineReducers({
//     categories: categoryReducer,
//     products: productReducer
// });

// const store=()=>{
//     return createStore(reducers,composeWithDevTools());
// };

// export default store();

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoriesReducer from './categories';

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});
const store = () => {
    return createStore(reducers, composeWithDevTools());
    // return createStore(peopleReducer, composeWithDevTools());
};

export default store();