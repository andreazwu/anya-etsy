import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { thunkGetUserReviews } from "../../store/reviews"
import MyReview from "./MyReview"

const LoadUserReviews = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=>state.session.user)
  const reviewsObj = useSelector((state) => state.reviews.user) // {1:{x}, 2:{y}, 3:{z}}
  const reviewsArr = Object.values(reviewsObj) // [{x}, {y}, {z}]

  useEffect(()=>{
    dispatch(thunkGetUserReviews())
  }, [dispatch, currentUser,
    // reviewsObj])
    reviewsArr.length])

  if (!currentUser) return <Redirect to="/" />

  return (
    <>
      <div>
        {
          reviewsArr.length === 0 ?
          (<>
            <h1>My Reviews</h1>
            <h4>You Don't Have Any Reviews!</h4>
          </>):
          <h1>My Reviews</h1>
        }
      </div>

      <div className="wrapper-center">
        <div className="my-reviews-container">
          {
            <div className="my-reviews-wrapper-wrapper">
              <div className="my-reviews-wrapper">
                {reviewsArr.map((review) => (
                  <MyReview key={review.id} review={review} user={currentUser}/>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default LoadUserReviews
