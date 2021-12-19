import React from "react";
import Header from './components/Header/Header'
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer/Footer'
export default class App extends React.Component{

    render(){
        return(
            <>           
            <Provider store={store}>
            <Header/>
            <Categories/>
            <Products/>
            <Footer/>
            </Provider>
            </>
            
        )
    }
}