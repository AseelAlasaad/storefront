export const initialState={
    cart:[],
    count:0
}

const cart=(state=initialState,action)=>
{
    let {type,payload}=action;
    switch (type) {
        case 'ADD':
            // console.log("CART",state.cart);
            
            // let count=state.count+1;
            // let cart=[...state.cart];
            // let addToIdx=cart.findIndex((product)=> product.name===payload.name);
            // console.log('addToIdx',addToIdx)
            // console.log("CART",state.cart);
            // if(addToIdx>-1)
            // {
            //     cart[addToIdx].count++
            // }
            // else{
            //     cart.push({...payload,count:1});
            // }
            // return {...state,count,cart};

            const product=state.cart.map(product=>product.name)
            console.log("CART",product);
            
            if(!product.includes(payload))
            {
                let count=state.count+1;
                
                console.log("CART",state.cart);
                return {cart:[...state.cart,payload], count:count}
            }
            return {...state};
            
    
     
                


            // case 'delete':
            //     const deleteproduct = state.cart.filter(product => {
            //             return product.name !== payload.name;
            //     });
            //     let count=state.count-1;
            //     return {cart:[...deleteproduct], count:count}  
                
        default:
            return state;
    };
}
export default cart;