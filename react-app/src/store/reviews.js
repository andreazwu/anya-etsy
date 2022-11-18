
//---------------------------------------------------
// ACTION TYPES:
const LOAD_PRODUCT_REVIEWS = "REVIEWS/LOAD_PRODUCT_REVIEWS"
const LOAD_USER_REVIEWS = "REVIEWS/LOAD_USER_REVIEWS"
const CREATE_REVIEW = "REVIEWS/CREATE_REVIEW"
const UPDATE_REVIEW = "REVIEWS/UPDATE_REVIEW"
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

const acCreateReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
}

const acUpdateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

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
  const response = await fetch(`/api/products/${ProductId}/reviews`)

  if (response.ok) {
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

// create new review thunk
export const thunkCreateNewReview = (newreview, productId, user) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}/reviews`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newreview)
  })
  if (response.ok){
    // from backend route "create_review":
    // {'id': self.id,
    // 'userId': self.user_id,
    // 'productId': self.product_id,
    // 'review': self.review,
    // 'stars': self.stars,
    // 'createdAt': self.created_at,
    // 'User': {
    //     "id": self.user.id,
    //     "first_name": self.user.first_name,
    //     "last_name": self.user.last_name
    // }}
    const review = await response.json()
    dispatch(acCreateReview(review))
    return review

  } else {
    const err = await response.json()
    return err
  }
}

// update review thunk
export const thunkEditReview = (myreview, reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(myreview)
  })
  if (response.ok) {
    const review = await response.json()
    dispatch(acUpdateReview(review))
    return review
  }
}

// delete review thunk
export const thunkRemoveReview = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })
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
      newState = {...state}
      const normalizedReviews = {}
      //payload = reviews = [{}, {}]
      action.reviews.forEach((review) => normalizedReviews[review.id] = review)
      newState.product = normalizedReviews
      newState.user = {}
      return newState

    case LOAD_USER_REVIEWS:
      newState = {...state}
      const normalizedUserReviews = {}
      //payload = reviews = [{}, {}]
      action.reviews.forEach((review) => normalizedUserReviews[review.id] = review)
      newState.user = normalizedUserReviews
      // newState.product = {}
      return newState

    case CREATE_REVIEW:
      newState = {...state}
      newState.product = {...state.product}
      newState.user = {...state.user}
      newState.product[action.review.id] = action.review
      newState.user[action.review.id] = action.review
      return newState

    case UPDATE_REVIEW:
      newState = {...state}
      newState.product = {...state.product}
      newState.user = {...state.user}
      newState.product[action.review.id] = action.review
      newState.user[action.review.id] = action.review
      return newState

    case DELETE_REVIEW:
      newState = {...state}
      newState.product = {...state.product}
      newState.user = {...state.user}
      delete newState.product[action.reviewId]
      delete newState.user[action.reviewId]
      return newState

    // case ADD_REVIEW_IMAGE:
    //   return newState

    default:
      return state
  }
}


export default reviews
