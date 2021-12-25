import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Button,Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Get,updateInStock,ADD,LoadingData} from  '../../store/Action';
import LoadProducts from './LoadProducts';
function Products(props) {
  const {products}= useSelector(state=>state.products);


  console.log('props.products',products)
  const state = useSelector((state) => state);
  console.log('showLoading',state.showLoading);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(Get())
  },[])
  function decrement(id,payload) {
    dispatch(updateInStock(id,payload));
  }
  function addTocart(payload) {
    dispatch(ADD(payload));
  }



  
  return (
    <div>
      {props.showLoading && <LoadProducts/> }
      {/* <p style={{ marginLeft: '46%', fontSize: '25px' }}>{state.categories.active.toUpperCase()|| 'ALL PRODUCTS'}</p> */}
      <Typography style={{ marginLeft: '46%', fontSize: '25px' }} className="page-header"variant="h3" gutterBottom>{state.categories.active.toUpperCase() || 'ALL PRODUCTS'}</Typography>
      <Grid
        item
        sm={5}
        style={{
          display: 'grid',
          gridColumnGap: '50px',
          gridTemplateColumns: 'auto auto auto',
        }}
      >
     
      
        {products.map((product,idx) => {
            {console.log('props.products',product)}     
          if(state.categories.active  !== '' && product.category !==state.categories.active ) return;
            return (
              <Card
                style={{
                  borderRadius: '10px',
                  width: '18rem',
                  height: '400px',
                  marginTop: '5px',
                  marginLeft: '80px',
                  marginBottom: '200px',
                  border: '1px solid gray',
                }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardMedia className={'img'} image={product.url} />
                <img
                  alt={product.name}
                  src={product.url}
                  width='120'
                  height='100'
                  style={{ marginLeft: '80px', marginTop: '10px' }}
                ></img>
                <CardContent>
                  <h2>{product.name}</h2>
                </CardContent>
                <CardContent >
                  Price : {product.price}
                  <br></br>
                  inStock  : {product.inStock}
                </CardContent>

                 <section className='btnn'>
                  <Button key={product.name}
                  variant='light' style={{ border: '1px solid gray' }} 
                   onClick={() => {
                     if(product.inStock)
                     {
                        decrement(product._id,product)
                        addTocart(product.name)
          
                     }
                     else alert("OUT OF STOCK")

                  }}>
                    ADD TO CART
                  </Button>
                  <Button variant='light' style={{ border: '1px solid gray' }}>
                    VIEW DETAILS
                  </Button>
                </section> 
              </Card>
            );
          
        }
        )}
      </Grid>
    </div >


  );
}
const mapStateToProps = (state) => {
    
  return { showLoading: state.products.showLoading};

}
const mapDispatchToProps = { LoadingData };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default Products;