const initialState={
    cart:[],
    count:0
}

const cart=(state=initialState,action)=>
{
    const {type,payload}=action;
    switch (type) {
        case 'ADD':
            const product=state.cart.map(product=>product.name)
            console.log("CART",state.cart);
            
            if(!product.includes(payload.name))
            {
                let count=state.count+1;
                   console.log("CART",state.cart);
                return {cart:[...state.cart,payload], count:count}

            }
            return {cart:state.cart, count:state.count};


            case 'delete':
                const deleteproduct = state.cart.filter(product => {
                        return product.name !== payload.name;
                });
                let count=state.count-1;
                return {cart:[...deleteproduct], count:count}  
                
        default:
            return state;
    };
}
export default cart;