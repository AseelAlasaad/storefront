import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoriesReducer from './categories';
import cart from './cart';
import thunk from 'redux-thunk';
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart:cart
});
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();