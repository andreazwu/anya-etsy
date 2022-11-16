import React, { useState, useEffect, Component } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkEditReview } from "../../store/reviews"
import LoadUserReviews from "./LoadUserReviews"

// import "./EditReview.css"

const EditReviewForm = ({myreview, showEditReview, setShowEditReview}) => {
  console.log("EDIT REVIEW FORM COMPONENT STARTS, myreview:", myreview)
  const dispatch = useDispatch()
  const history = useHistory()

  const [editreview, setEditReview] = useState(myreview.review)
  const [stars, setStars] = useState(myreview.stars)
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const reviewId = myreview?.id

  console.log("to be edited: stars:", stars, "review:", editreview, "reviewId:", reviewId)

  const handleSubmit = async (e) => {
    {console.log("HANDLE SUBMIT")}
    e.preventDefault()
    setErrors([])
    setHasSubmitted(true)

    const errorsArr = []

    if (editreview.length > 2000) errorsArr.push("please enter a valid review fewer than 2000 characters long")

    setErrors(errorsArr)

    if (errorsArr.length) return

    setShowEditReview(false)

    const reviewInfo = { editreview, stars }
    console.log("before dispatch thunk, reviewInfo:", reviewInfo)
    const editedReview = await dispatch(thunkEditReview(reviewInfo, reviewId))
      .then(()=>history.push(`/my-reviews`))
      // .catch(async (res) => {
      //   const message = await res.json()
      //   const messageErrors = []
      //   if (message) {
      //     messageErrors.push(message.message)
      //     setErrors(messageErrors)
      //   }
      // })
    if (editedReview) history.push(`/my-reviews`)
    reset()
  }

  const reset = () => {
    setEditReview("")
    setStars(5)
    setErrors([])
    setHasSubmitted(false)
  }

  return (
    <div className="edit-review-form">
      {console.log("EDIT REVIEW FORM RETURN, BEFORE FORM")}
      <div className="validation-errors">
        {
        hasSubmitted &&
        errors &&
        errors.map((error)=>(<div key={error}>{error}</div>))
        }
      </div>

      <form onSubmit={handleSubmit}>
      <div className="form-input-wrapper">
      {console.log("EDIT REVIEW FORM RETURN, INSIDE FORM")}

            <label className="review-field">
              Rating:&nbsp;
              <select
                type="number"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              >
                {[1,2,3,4,5].map((num)=>(<option key={num}>{num}</option>))}
              </select>
            </label>
            <div className="form-input-break"></div>
            <label className="review-field">
              Review:
              <textarea
                type="text"
                placeholder="Optional"
                value={editreview}
                onChange={(e) => setEditReview(e.target.value)}
              />
            </label>
        </div>

        <button
        // disabled={
        //   hasSubmitted &&
        //   errors.length > 0 ? true : false
        // }
        className="modal-submit-button"
        onClick={handleSubmit}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default EditReviewForm
