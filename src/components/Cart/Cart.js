import React from 'react';
import {ADD} from '../../store/Action';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
// import {useSelctor} from 'react'

function Cart(props)
{
    console.log('Cart From Cart',props.cart);
   return(
       <>
           <Card     style={{
               borderRadius: '10px',
               width: '30rem',
               height: '300px',
               marginTop: '10%',
               marginBottom: '200px',
               border: '1px solid gray',
             }}>
       {props.cart.map(item=>{

           return (
           
            <CardContent >
                {item}
            {/* <Button > Delete</Button> */}
                <br>
                </br>
            </CardContent>

);
})}
</Card> 

       
       </>
   );


}

const mapStateToProps = (state) => {
 
    return { cart: state.cart.cart, count:state.count};
  
  }
  const mapDispatchToProps = {ADD};
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);
