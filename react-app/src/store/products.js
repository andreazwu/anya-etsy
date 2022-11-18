
const LOAD_ALL_PRODUCTS = 'products/loadallproducts';
const LOAD_ONE_PRODUCT = 'products/loadoneproduct';
const CREATE_PRODUCT = 'products/createproduct';
const ADD_IMG = 'products/addimg';
const UPDATE_PRODUCT = 'products/updateproduct';
const REMOVE_PRODUCT = 'products/deleteproduct';
const MY_PRODUCTS = 'products/myproduct';
const RESET_PRODUCTS = 'products/RESET_PRODUCTS'
const SEARCH_PRODUCTS = 'products/searchedProducts';

export const acResetProducts = () => {
    return { type: RESET_PRODUCTS }
  }

// LOAD_ALL_PRODUCTS
const allProducts = (products) => ({
    type: LOAD_ALL_PRODUCTS,
    products
})

// LOAD_ONE_PRODUCT
const loadOneProduct = (product) => {
    return {
        type: LOAD_ONE_PRODUCT,
        product
    }
}


// line 31 CREATE_PRODUCT
const createOneProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        product
    }
}



//line 41 ADD_IMG
const addImg = (imgData) => {
    return {
        type: ADD_IMG,
        imgData
    }
}



//line 51UPDATE_PRODUCT
const updateOneProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}



//line 61 REMOVE_PRODUCT
const acRemoveProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}



//line 71 MY_PRODUCTS
const acLoadMyProducts = (products) => {
    return {
        type: MY_PRODUCTS,
        products
    }
}



//line 81 SEARCH_PRODUCTS
const loadSearchProducts = (products) => {
    return {
        type: SEARCH_PRODUCTS,
        products
    }
}



/////line 91 thunk
// LOAD_ALL_PRODUCTS
export const getAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');

    if (response.ok) {
        const products = await response.json();
        dispatch(allProducts(products))
        return products;
    }
}








//line 110 LOAD_ONE_PRODUCT
export const getOneProduct = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}`)

    if (response.ok) {
        const product = await response.json()
        dispatch(loadOneProduct(product))
        return product
    }
}








//line 130 CREATE_PRODUCT
export const createProduct = (product) => async dispatch => {
    try {
        const response = await fetch(`/api/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            const newProduct = await response.json();
            dispatch(createOneProduct(newProduct));
            return newProduct
        }

    } catch(error) {
        throw error
    }
}

// line 154 Add_IMG
export const addImgs = (url, productId) => async dispatch => {

    const response = await fetch(`/api/products/${productId}/images`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({url: url})
    });

    if (response.ok) {
        const newImg = await response.json();
        dispatch(addImg(newImg));
        return newImg
    }
}

//line 170 UPDATE_PRODUCT
export const editProduct = (product, productId) => async dispatch => {
    try {
        const response = await fetch(`/api/products/${productId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(product)
        });
        if (response.ok) {
            const newProduct = await response.json();
            dispatch(updateOneProduct(newProduct));
            return newProduct
        }
    } catch(error) {
        throw error
    }
}

//line 190 REMOVE_PRODUCT
export const thunkRemoveProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(acRemoveProduct(productId))
    }
}





//line 204 MY_PRODUCTS
export const thunkGetMyProducts = () => async (dispatch) => {
    const response = await fetch("/api/products/current")
    if (response.ok) {
        const products = await response.json()
        dispatch(acLoadMyProducts(products))
    }
}








// line 230 SEARCH_PRODUCTS Thunk
export const getProductsBySearch = (keyword) => async (dispatch) => {
    const response = await fetch(`/api/products/search/${keyword}`);
    if (response.ok) {
        const products = await response.json();
        dispatch(loadSearchProducts(products));
        return products;
    }
}



// line 245
const initialState = {
    allProducts: {},
    singleProduct: {},
    searchedProducts: {},
}

const products = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case LOAD_ALL_PRODUCTS:
            newState = {...state, allProducts: {...state.allProducts}}
            action.products.Products.forEach(product => {
                newState.allProducts[product.id] = product;
            })
            newState.singleProduct={}
            return newState

        case LOAD_ONE_PRODUCT:
            newState = { ...state, singleProduct: { ...action.product } };
            return newState

        case CREATE_PRODUCT:
            newState = { ...state, allProducts: { ...state.allProducts, [action.product.id]: action.product} };
            return newState
        case ADD_IMG:
            newState = { ...state, singleProduct: { ...state.singleProduct, productImages:[action.imgData]}}
            return newState
        case UPDATE_PRODUCT:
            newState = { ...state, allProducts:{ ...state.allProducts, [action.product.id]: action.product}};
            return newState

        case SEARCH_PRODUCTS:
            newState = {...state, searchedProducts: {}};
            action.products.Products.forEach(product => {
                newState.searchedProducts[product.id] = product
            })
            return newState

        case REMOVE_PRODUCT:
            newState = {...state}
            newState.allProducts = {...state.allProducts}
            newState.singleProduct = {...state.singleProduct}
            delete newState.allProducts[action.productId]
            if (newState.singleProduct.id === action.productId) newState.singleProduct = {}
            return newState

        case MY_PRODUCTS:
            newState = {...state}
            const normalizedProducts = {}
            action.products.Products.forEach(product => normalizedProducts[product.id] = product)
            newState.allProducts = normalizedProducts
            // newState.singleProduct = {}
            return newState

        case RESET_PRODUCTS:
            newState = {...state}
            newState.allProducts = {}
            newState.singleProduct = {}
            return newState

        default:
            return state;
    }
}

export default products
