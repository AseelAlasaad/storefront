const axios = require('axios');
const url = "https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa";

export const activeCategory = name => {
    return {
        type: 'ACTIVE',
        payload: name,
    }
};
export const LoadingData=()=>{
    return {type:'GET_PRODUCTS_PENDING'}
}

//  Get products from Api 

//Mock api from  "https://designer.mocky.io/design";
export const Get = () => dispatch => {
    dispatch(LoadingData());
    return axios.get(url)
        .then(res => {
            console.log("Data from api", res.data);
            dispatch(actualData(res.data));
        })
        .catch(err => console.log('ErrOOOOOOORrr'))


}

function actualData(products) {
    return {
        type: 'GET',
        payload: products
    }
}




export const Decrease = products => {
    return {
        type: 'decrease',
        payload: products,
    }


}

export const Delete = name => {
    return {
        type: 'delete',
        payload: name,
    }


}



export const updateInStock = (_id, reqBody) => dispatch => {


    reqBody.inStock = reqBody.inStock - 1;
    console.log('update inStock', reqBody.inStock)
    return axios.put(`${url}/${_id}`, reqBody)
        .then(res => {
            // console.log("update",res.data);
            dispatch(decrementInStock(res.data));
        })
        .catch(err => console.log('ErrOOOOOOOrrR UPDATE inStock'))


}



export function decrementInStock(products) {
    return {
        type: 'Decrement',
        payload: products
    }
}
export const updateCount= (_id, reqBody) => dispatch => {


    reqBody.count = reqBody.count + 1;
    console.log('update inStock', reqBody.count)
    return axios.put(`${url}/${_id}`, reqBody)
        .then(res => {
            // console.log("update",res.data);
            dispatch(incrementCount(res.data));
        })
        .catch(err => console.log('ErrOOOOOOOrrR increment Count'))


}

export const ADD = name => {
    return {
        type: 'ADD',
        payload: name,
    }
};

export const incrementCount = name => {
    return {
        type: 'increment',
        payload: name,
    }
};







