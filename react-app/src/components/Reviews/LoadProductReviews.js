import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { thunkGetProductReviews } from "../../store/reviews"
import CreateReviewModal from "./CreateReviewModal"


const LoadProductReviews = () => { //pass in productId props
  console.log("COMPONENT - LOADPRODUCTREVIEWS STARTS")
  const dispatch = useDispatch()
  const { productId } = useParams() //delete
  const productReviews = useSelector((state)=>state.reviews.product) //normalized obj
  const reviewsArr = Object.values(productReviews) //array
  console.log("REVIEWSARR FROM USE SELECTOR:", reviewsArr)

  useEffect(() => {
    console.log("LOADPRODUCTREVIEWS USE EFFECT RUNNING: DISPATCH THUNK")
    dispatch(thunkGetProductReviews(productId))
  }, [dispatch, productId]) //add reviews dependency to reflect of new review

  //------create review button-----
  //verify if currentUser is owner of product
  // const product = useSelector((state) => state.products.seller_id) //need products state
  // const currentUser = useSelector((state) => state.session.user)
  // let owner = false
  // if (currentUser?.id === product.ownerId) owner = true
  //------create review button-----

  if (!reviewsArr.length) return null

  return (
    <>
      {/* [{},{}], each {} is:
      { id, userId, productId, review, stars,
        User: { id, firstName, lastName } } */}

      {/* ideally only show "create review" button to NON-owner of product */}
      <div>
        {
          // currentUser &&
          // !owner &&
          <CreateReviewModal productId={productId}/>
        }
      </div>

      {
        reviewsArr.map((review)=>(
          <div className="single-review">
            <h3>{review.User.first_name}{" "}{review.User.last_name}</h3>
            <p className="single-review-date">
              {new Date(review.createdAt).toString().slice(3,-42)}
            </p>

            <p className="single-review-stars">
              {
                [...Array(review.stars)].map((star) => (<i className="fa-solid fa-star"></i>))
              }
            </p>

            <p className="single-review-review">
              {/* <i className="fa fa-quote-left fa-lg" aria-hidden="true"></i> */}
              <span>
                {review.review}
              </span>
              {/* <i className="fa fa-quote-right fa-lg" aria-hidden="true"></i> */}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default LoadProductReviews

// eventually add product reviews component to <load one product component>
// return: product info xxxx
// <div className="one-product-reviews-container">
//    <LoadProductReviews productId={productId} />
// </div>
// (get rid of test path & useParams & pass {productId} in parameter)
