import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkEditReview } from "../../store/reviews"
import LoadUserReviews from "./LoadUserReviews"
import HoverStars from "./HoverStars"
import "./Reviews.css"

const EditReviewForm = ({myreview, showEditReview, setShowEditReview}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [editReview, setEditReview] = useState(myreview.review)
  const [editStars, setEditStars] = useState(myreview.stars)
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const reviewId = myreview?.id


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    setHasSubmitted(true)

    const errorsArr = []

    if (editReview.length > 2000) errorsArr.push("please enter a valid review fewer than 2000 characters long")

    setErrors(errorsArr)

    if (errorsArr.length) return

    setShowEditReview(false)

    const reviewInfo = { "review": editReview, "stars": editStars }
    const editedReview = await dispatch(thunkEditReview(reviewInfo, reviewId))
      .then(()=>history.push(`/my-reviews`))
      .catch(async (res) => {
        const message = await res.json()
        const messageErrors = []
        if (message) {
          messageErrors.push(message.message)
          setErrors(messageErrors)
        }
      })
    if (editedReview) history.push(`/my-reviews`)
    reset()
  }

  const reset = () => {
    setEditReview("")
    setEditStars(5)
    setErrors([])
    setHasSubmitted(false)
  }

  return (
    <div className="edit-review-form">
      <div className="validation-errors">
        {
        hasSubmitted &&
        errors &&
        errors.map((error)=>(<div key={error}>{error}</div>))
        }
      </div>

      <form onSubmit={handleSubmit}>
      <div className="form-input-wrapper">

            <label className="review-field">
              {/* Rating:&nbsp; */}
              {/* <select
                type="number"
                value={editStars}
                onChange={(e) => setEditStars(e.target.value)}
              >
                {[1,2,3,4,5].map((num)=>(<option key={num}>{num}</option>))}
              </select> */}
              <HoverStars stars={editStars} setStars={setEditStars}/>
            </label>
            <div className="form-input-break"></div>
            <label className="review-field">
              {/* Review: */}
              <textarea
                type="text"
                placeholder="Optional"
                value={editReview}
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
          Update Review
        </button>

      </form>
    </div>
  )
}

export default EditReviewForm
