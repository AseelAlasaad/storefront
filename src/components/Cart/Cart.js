import React from 'react';
import {Delete} from '../../store/Active';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

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
                {item.name}
            <Button onDelete={() => props.Delete(item)}> Delete</Button>
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
 
    return { cart: state.cart.cart};
  
  }
  const mapDispatchToProps = {Delete};
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);
