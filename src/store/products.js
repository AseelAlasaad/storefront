export const initialState = {
    products: [],
    showLoading:true
}



const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // case 'ACTIVE':
        //     const product = state.products.filter(product => product.category === payload);

        //     return {...state, product: product};
        case 'GET':
            console.log('props.products.', payload)
            // return payload.products;
            return { ...state, products: payload.products, showLoading:false };

            case 'GET_PRODUCTS_PENDING':{
                return { 
                  ...state, 
                  showLoading: true, 
                }
              }

        case 'Decrement':
            let Updatedproducts = state.products.map(product => {
                if (product.name=== payload.name) {
                    console.log('product._id',product._id)
                    if(product.inStock>0)
                    {
                       return payload;

                    }
                    return product;
                }
                return product;

            });
            return {...state,products:Updatedproducts};

       
        default:
            return state;
    }



};

export default productsReducer;