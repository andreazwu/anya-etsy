import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkGetProductReviews, thunkEditReview, thunkRemoveReview } from "../../store/reviews"
import EditReviewForm from "./EditReviewForm"

const LoadProductReviews = ({ productId, user }) => {
  const dispatch = useDispatch()
  const productReviews = useSelector((state)=>state.reviews.product) //normalized obj
  const reviewsArr = Object.values(productReviews) //array
  const [showEditReview, setShowEditReview] = useState(false)

  useEffect(() => {
    dispatch(thunkGetProductReviews(productId))
  }, [dispatch, productId])

  if (!reviewsArr.length) return null

  return (
    <>
      {/* [{},{}], each {} is:
      { id, userId, productId, review, stars,
        User: { id, firstName, lastName } } */}

      {
        reviewsArr.map((review)=>(
          <div className="single-review">
            <div className="single-review-name" >{review.User.first_name}{" "}{review.User.last_name}</div>
            <div className="my-single-review-date">
              {new Date(review.createdAt).toString().slice(3,-42)}
            </div>

            <div className="single-review-stars">
              {
                [...Array(review.stars)].map((star) => (<i className="fa-solid fa-star"></i>))
              }
            </div>

            <p className="single-review-review">
              {/* <i className="fa fa-quote-left fa-lg" aria-hidden="true"></i> */}
              <span>
                {review?.review}
              </span>
              {/* <i className="fa fa-quote-right fa-lg" aria-hidden="true"></i> */}
            </p>

            {
              review?.userId==user?.id &&
              <div className="product-review-button-wrap">
                {/* <span>
                  <button
                  className="product-review-button"
                  onClick={()=>setShowEditReview(!showEditReview)}
                  >
                    Edit
                  </button>
                </span> */}
                {/* <span>
                  <button
                  className="product-review-button"
                  onClick={async () => {
                    if (window.confirm("Are you sure you want to remove this review?")){
                      await dispatch(thunkRemoveReview(review?.id))
                    }
                  }}
                  >
                    Delete
                  </button>
                </span> */}
              </div>
              }
              {/* {
                showEditReview &&
                review?.userId==user.id &&
                <EditReviewForm
                  myreview={review}
                  showEditReview={showEditReview}
                  setShowEditReview={setShowEditReview}
                />
              } */}
          </div>
        ))
      }
    </>
  )
}

export default LoadProductReviews
