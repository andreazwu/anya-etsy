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
    <div className="my-reviews-main">
      <div className="my-reviews-upper">
        <div className="my-reviews-header">My Reviews</div>
        {currentUser?.firstName &&
          <div className="my-reviews-name">
              <span>{currentUser?.firstName}{" "}{currentUser?.lastName}</span>
              &nbsp;
              {/* <i className="fa-solid fa-angle-right"></i> */}
          </div>
        }
      </div>
      {/* <div>
        {
          reviewsArr.length === 0 ?
          (<>
            <h4>You Don't Have Any Reviews!</h4>
          </>):
          <h1></h1>
        }
      </div> */}

      <div className="my-reviews-outer">
        <div className="my-reviews-inner">
          {
            reviewsArr.map((review) => (
              <MyReview key={review.id} review={review} user={currentUser}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LoadUserReviews
