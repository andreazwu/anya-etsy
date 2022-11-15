
const LOAD_ALL_PRODUCTS = 'products/loadallproducts';
const LOAD_ONE_PRODUCT = 'products/loadoneproduct';
const CREATE_PRODUCT = 'products/createproduct';
const ADD_IMG = 'products/addimg';
const UPDATE_PRODUCT = 'products/updateproduct';
const REMOVE_PRODUCT = 'products/deleteproduct';
const MY_PRODUCTS = 'products/myproduct';


///// line 11 action
// LOAD_ALL_PRODUCTS








//line 21 LOAD_ONE_PRODUCT
const loadOneProduct = (product) => {
    return {
        type: LOAD_ONE_PRODUCT,
        product
    }
}



// line 31CREATE_PRODUCT
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









//line 61 REMOVE_PRODUCT









//line 71 MY_PRODUCT









/////line 81 thunk
// LOAD_ALL_PRODUCTS

















//line 100 LOAD_ONE_PRODUCT
export const getOneProduct = (productId) => async dispatch => {
    console.log("in thunk----productId", productId)
    const response = await fetch(`/api/products/${productId}`)

    if (response.ok) {
        const product = await response.json()
        console.log("in thunk----product", product)
        dispatch(loadOneProduct(product))
        return product
    }
}

//line 120 CREATE_PRODUCT
export const createProduct = (product) => async dispatch => {
    console.log("in createProduct thunk----product", product)
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
            console.log("in createProduct thunk----newproduct", newProduct)
            dispatch(createOneProduct(newProduct));
            return newProduct
        }

    } catch(error) {
        throw error
    }
}

// Add_IMG
export const addImgs = (imgDatas, productId) => async dispatch => {
    console.log("in addImg thunk----product", imgDatas, productId)
    for (const imgData of imgDatas) {
        try {
                const response = await fetch(`/api/products/${productId}/images`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(imgData)
                });

            if (response.ok) {
                const newImg = await response.json();
                console.log("in createProduct thunk----newImg", newImg)
                dispatch(createOneProduct(newImg));
                return newImg
            }

        } catch(error) {
            throw error
        }
    }
}





























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











            return state
        // line 231
        case LOAD_ONE_PRODUCT:
            const newState = { ...state, singleProduct: { ...action.product } };
            console.log("in load_one_product reducer, newState:", newState)
            return newState





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
