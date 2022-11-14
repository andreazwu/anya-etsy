
const LOAD_ALL_PRODUCTS = 'products/loadallproducts';
const LOAD_ONE_PRODUCTS = 'products/loadoneproduct';
const CREATE_PRODUCTS = 'products/createproduct';
const ADD_IMG = 'products/addimg';
const UPDATE_PRODUCTS = 'products/updateproduct';
const REMOVE_PRODUCTS = 'products/deleteproduct';
const MY_PRODUCTS = 'products/myproduct';


///// line 11 action
// LOAD_ALL_PRODUCTS








//line 21 LOAD_ONE_PRODUCTS









// line 31CREATE_PRODUCTS









//line 41 ADD_IMG









//line 51UPDATE_PRODUCTS









//line 61 REMOVE_PRODUCTS









//line 71 MY_PRODUCTS









/////line 81 thunk
// LOAD_ALL_PRODUCTS

















//line 100 LOAD_ONE_PRODUCTS



















//line 120 CREATE_PRODUCTS






























//line 151 ADD_IMG








//line 160 UPDATE_PRODUCTS



















//line 180 REMOVE_PRODUCTS













//line 194 MY_PRODUCTS















// line 210
const initialState = {
    allProducts: {},
    singleProduct: {},
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_PRODUCTS:











            return state
        // line 231
        case LOAD_ONE_PRODUCTS:







            return state
             // line 241
        case CREATE_PRODUCTS:







            return state
             // line 251
        case UPDATE_PRODUCTS:







            return state
             // line 261
        case REMOVE_PRODUCTS:




            return state
             // line 268
        case MY_PRODUCTS:



        
            return state
        default:
            return state;
    }
}

export default productsReducer
