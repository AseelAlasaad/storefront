
const initialState = {
    categories: [
        {
            name: 'food',
            displayName: 'food',
            description: 'categories Description Goes Here ',
        },
        {
            name: 'electronics',
            displayName: 'electronics',
            description: 'categories Description Goes Here',
        }
        ,
        {
            name: 'clothing',
            displayName: 'clothing',
            description: 'categories Description Goes Here',
        }
    ],
    active:''
  
}

const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const categories = state.categories;
            const active = payload;
            return {categories,active};
        default:
            return state;
    }
};

export default categoriesReducer;
  