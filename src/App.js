import React from "react";
import Header from './components/Header/Header'
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import {If} from 'react-if';
import { useSelector } from 'react-redux';

export default function  App(props){
    const state = useSelector((state) => state);

    
        return(
            <>           
           
            <Header/>
            <Categories/>
            <Products/>
            <If  condition={state.cart.count>0}>
            <Cart/>
            </If>
            <Footer/>
          
            </>
            
        )
   
}