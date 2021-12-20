const initialState={
    product:[],
    numofProduct:0
}

const cart=(state=initialState,action)=>
{
    const {type,payload}=action;
    switch (type) {
        case 'ACTIVE':
            return {...state,product:state.product,numofProduct:state.numofProduct+1 }
            
        default:
            return state;
    }
}
export default cart;