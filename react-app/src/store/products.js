
const LOAD_ALL_PRODUCTS = 'products/loadallproducts';
const LOAD_ONE_PRODUCT = 'products/loadoneproduct';
const CREATE_PRODUCT = 'products/createproduct';
const ADD_IMG = 'products/addimg';
const UPDATE_PRODUCT = 'products/updateproduct';
const REMOVE_PRODUCT = 'products/deleteproduct';
const MY_PRODUCTS = 'products/myproduct';


///// line 11 action
// LOAD_ALL_PRODUCTS
const allProducts = (products) => ({
    type: LOAD_ALL_PRODUCTS,
    products
})




//line 21 LOAD_ONE_PRODUCT









// line 31CREATE_PRODUCT









//line 41 ADD_IMG









//line 51UPDATE_PRODUCT









//line 61 REMOVE_PRODUCT









//line 71 MY_PRODUCTS









/////line 81 thunk
// LOAD_ALL_PRODUCTS
export const getAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');

    if (response.ok) {
        const products = await response.json();
        dispatch(allProducts(products))
        return products;
    }
}








//line 100 LOAD_ONE_PRODUCT



















//line 120 CREATE_PRODUCT






























//line 151 ADD_IMG








//line 160 UPDATE_PRODUCT



















//line 180 REMOVE_PRODUCT













//line 194 MY_PRODUCTS















// line 210
const initialState = {
    allProducts: {},
    singleProduct: {},
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_PRODUCTS:
            let newState = {...state, allProducts: {...state.allProducts}}
            action.products.Products.forEach(product => {
                newState.allProducts[product.id] = product;
            })
            newState.singleProduct={}
            return newState






            // line 231
        case LOAD_ONE_PRODUCT:







            return state
             // line 241
        case CREATE_PRODUCT:







            return state
             // line 251
        case UPDATE_PRODUCT:







            return state
             // line 261
        case REMOVE_PRODUCT:




            return state
             // line 268
        case MY_PRODUCTS:




            return state
        default:
            return state;
    }
}

export default products
