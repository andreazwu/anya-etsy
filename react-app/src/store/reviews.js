
//---------------------------------------------------
// ACTION TYPES:
const LOAD_PRODUCT_REVIEWS = "REVIEWS/LOAD_PRODUCT_REVIEWS"
const LOAD_USER_REVIEWS = "REVIEWS/LOAD_USER_REVIEWS"
// const CREATE_REVIEW = "REVIEWS/CREATE_REVIEW"
// const UPDATE_REVIEW = "REVIEWS/UPDATE_REVIEW"
const DELETE_REVIEW = "REVIEWS/DELETE_REVIEW"
// const ADD_REVIEW_IMAGE = "REVIEWS/ADD_REVIEW_IMAGE"


//---------------------------------------------------
// ACTION CREATORS:
const acLoadProductReviews = (reviews) => {
  return {
    type: LOAD_PRODUCT_REVIEWS,
    reviews
  }
}

const acLoadUserReviews = (reviews) => {
  return {
    type: LOAD_USER_REVIEWS,
    reviews
  }
}

// const acCreateReview

// const acUpdateReview

const acDeleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

// const acAddReviewImage

//---------------------------------------------------
// THUNK ACs:
// load all Product reviews thunk
export const thunkGetProductReviews = (ProductId) => async (dispatch) => {
  console.log("THUNK STARTS RUNNING, BEFORE FETCH FROM BACKEND")
  const response = await fetch(`/api/products/${ProductId}/reviews`)
  console.log("THUNK STARTS RUNNING, AFTER FETCH FROM BACKEND")

  if (response.ok) {
    console.log("THUNK, BEFORE DISPATCH ACTION CREATOR")
    // {
    //   "Reviews": [
    //     {
    //       "id": 1,
    //       "userId": 1,
    //       "ProductId": 1,
    //       "review": "This was an awesome Product!",
    //       "stars": 5,
    //       "createdAt": "Mon, 14 Nov 2022 14:46:18 GMT"
    //       "User": {"id":, "firstName":, "lastName": },
    //       // "ReviewImages": [{"id": ,"url": }, {}, {}],
    //     }
    //   ]
    // }
    const data = await response.json() //object
    const reviewsArr = data.Reviews //array [{}, {}]
    dispatch(acLoadProductReviews(reviewsArr))
    console.log("THUNK, AFTER DISPATCH ACTION CREATOR -- CYCLE ENDS")
    return data
  }
}

// load all user reviews thunk
export const thunkGetUserReviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews/current")
  if (response.ok) {
    /*
    {"Reviews": [
      {
        "id": 1,
        "userId": 1,
        "ProductId": 1,
        "review": "This was an awesome Product!",
        "stars": 5,
        "createdAt": "Mon, 14 Nov 2022 14:46:18 GMT"
        "User": {"id":, "firstName":, "lastName": },
        "Product": { id, ownerId, add, city, state, coun, lat, lng,    name, price, previewImage: url },
        // "ReviewImages": [{"id": ,"url": }, {}, {}]
      }
    ]}
    */
    const data = await response.json() //object
    const reviewsArr = data.Reviews //array [{}, {}]
    dispatch(acLoadUserReviews(reviewsArr))
    return data
  }
}

// // create new review thunk
// export const thunkCreateNewReview = () => async (dispatch) => { }

// // update review thunk
// export const thunkEditreview = () => async (dispatch) => {  }

// delete review thunk
export const thunkRemoveReview = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {method: "DELETE"})
  if (response.ok){
    dispatch(acDeleteReview(reviewId))
  }
}

// // add image thunk
// export const thunkAddReviewImage = () => async (dispatch) => { }


//---------------------------------------------------
// REDUCER:

const initialState = {
  product:{},
  user:{}
}

const reviews = (state = initialState, action) => {
  let newState
  switch (action.type){
    case LOAD_PRODUCT_REVIEWS:
      console.log("REVIEWSREDUCER LOAD Product REVIEWS BEGIN:", state)
      newState = {...state}
      const normalizedReviews = {}
      //payload = reviews = [{}, {}]
      action.reviews.forEach((review) => normalizedReviews[review.id] = review)
      newState.product = normalizedReviews
      newState.user = {}
      console.log("REVIEWSREDUCER LOAD Product REVIEWS BEGIN:", newState)
      return newState

    case LOAD_USER_REVIEWS:
      // console.log("REVIEWSREDUCER LOAD USER REVIEWS BEGIN:", state)
      newState = {...state}
      const normalizedUserReviews = {}
      //payload = reviews = [{}, {}]
      action.reviews.forEach((review) => normalizedUserReviews[review.id] = review)
      newState.user = normalizedUserReviews
      newState.product = {}
      // console.log("REVIEWSREDUCER LOAD USER REVIEWS BEGIN:", newState)
      return newState

    // case CREATE_REVIEW:
    //   return newState

    case DELETE_REVIEW:
      newState = {...state}
      newState.product = {...state.product}
      newState.user = {...state.user}
      delete newState.spot[action.reviewId]
      delete newState.user[action.reviewId]
      return newState

    // case ADD_REVIEW_IMAGE:
    //   return newState

    default:
      return state
  }
}


export default reviews

// reviews: {
//   Product: {
//     [reviewId]: { id, userId, ProductId, review, stars, createdAt
//                   User: { id, firstName, lastName },
//                   ReviewImages: [ { id, url }, {}, {} ] }
//   },
//   user: {
//     [reviewId]: { id, userId, ProductId, review, stars, createdAt
//                   User: { id, firstName, lastName },
//                   Product: { id, ownerId, add, city, state, coun,
//                           lat, lng, name, price,
//                           previewImage },
//                   ReviewImages: [ { id, url }, {}, {} ] }
//   }
// }
