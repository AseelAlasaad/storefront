import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoriesReducer from './categories';
import cart from './cart';
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart:cart
});
const store = () => {
    return createStore(reducers, composeWithDevTools());
    // return createStore(peopleReducer, composeWithDevTools());
};

export default store();