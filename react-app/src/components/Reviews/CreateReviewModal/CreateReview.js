import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { thunkCreateNewReview } from "../../../store/reviews"
import HoverStars from "../HoverStars"

import "./CreateReview.css"

const CreateReview = ({productId, setShowNewReviewModal}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [review, setReview] = useState("")
  const [stars, setStars] = useState(null)
  const [errors, setErrors] = useState([])

  const [hasSubmitted, setHasSubmitted] = useState(false)

  const currentUser = useSelector((state) => state.session.user)

  useEffect(() => {
    if (currentUser) setErrors([])
    else setErrors(["You must be logged in to leave a review"])
  }, [currentUser])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    setHasSubmitted(true)

    const errorsArr = []
    if (stars <= 0) errorsArr.push("please enter a star rating between 1 and 5")
    if (review.length > 2000) errorsArr.push("please enter a valid review fewer than 2000 characters long")

    setErrors(errorsArr)

    if (errorsArr.length) return

    const reviewInfo = { review, stars }

    const newReview = await dispatch(thunkCreateNewReview(reviewInfo, productId, currentUser))
      .catch(async (res) => {
        const message = await res.json()
        const messageErrors = []
        if (message) {
          messageErrors.push(message.message)
          setErrors(messageErrors)
        }
      })

    if (newReview) setShowNewReviewModal(false)
    reset()
    // history.push(`/products/${productId}`) //<<<<<
  }

  const reset = () => {
    setReview("")
    setStars(5)
    setErrors([])
    setHasSubmitted(false)
  }

  return (
    <div className="create-review-modal-whole">
      <div className="review-modal-subheader">Did you enjoy this product?</div>

      <div className="validation-errors">
        {
        hasSubmitted &&
        errors &&
        errors.map((error)=>(<div key={error}>{error}</div>))
        }
      </div>

      {/* <div className="create-review-form"> */}
      <form onSubmit={handleSubmit}>
      <div className="create-form-input-wrapper">

            <label className="create-review-field">
              Rating:&nbsp;
              {/* <select
                type="number"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              >
                {[1,2,3,4,5].map((num)=>(<option>{num}</option>))}
              </select> */}
              <div className="create-hover">
                <HoverStars stars={stars} setStars={setStars}/>
              </div>
            </label>
            <div className="form-input-break"></div>
            <label className="review-field">
              Review:
              <textarea
                type="text"
                value={review}
                placeholder="Optional"
                onChange={(e) => setReview(e.target.value)}
              />
            </label>
        </div>
        <div className="create-modal-button-wrap">
        <button
        // disabled={
        //   hasSubmitted &&
        //   errors.length > 0 ? true : false
        // }
        className="modal-submit-button"
        >
          Create Review
        </button>
        </div>

      </form>
      </div>
    // </div>
  )
}

export default CreateReview
