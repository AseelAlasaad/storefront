const initialState = {
    products: [
        {
            name: 'MacBook',
            category: 'Electronics',
            price: '1300$',
            image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445',
            votes: 0
        },
        {
            name: 'Pizza',
            category: 'Food',
            price: '5$',
            image: 'https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg'
            ,votes: 0
        },
        {
            name: 'Electronic Devices',
            category: 'Electronics',
            price: '2000$',
            image:"https://image.shutterstock.com/image-photo/communicator-mockup-tablet-similar-ipad-260nw-306237590.jpg",
            votes: 0
        },
  
        {
            name: 'pasta',
            category: 'Food',
            price:'20$',
           image:"https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
           votes: 0
        }
    ]
}



const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const product = state.products.filter(product => product.category === payload ? product.category : null);

            return { ...state, product: product,votes:product.votes+1 };
     

        default:
            return state;
    }
};

export default productsReducer;