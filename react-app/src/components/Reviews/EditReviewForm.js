import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkEditReview } from "../../store/reviews"

// import "./EditReview.css"

const EditReviewForm = ({myreview, showEditReview, setShowEditReview}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  // const {productId} = useParams()

  const [editreview, setEditReview] = useState(myreview.review)
  const [stars, setStars] = useState(myreview.stars)
  const [errors, setErrors] = useState([])

  const [hasSubmitted, setHasSubmitted] = useState(false)

  // const currentUser = useSelector((state) => state.session.user)


  // useEffect(() => {
  //   if (currentUser) setErrors([])
  //   else setErrors(["You must be logged in to leave a review"])
  // }, [currentUser])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    setHasSubmitted(true)

    const errorsArr = []

    if (editreview.length > 2000) errorsArr.push("please enter a valid review fewer than 2000 characters long")

    setErrors(errorsArr)

    if (errorsArr.length) return

    const reviewInfo = { editreview, stars }

    const newReview = await dispatch(thunkEditReview(reviewInfo, myreview.Product.id))
      .catch(async (res) => {
        const message = await res.json()
        const messageErrors = []
        if (message) {
          messageErrors.push(message.message)
          setErrors(messageErrors)
        }
      })

    // if (newReview) setShowModal(false)
    reset()
    // history.push(`/products/${myreview.Product.id}`) //<<<<<
    history.push(`/my-reviews`) //<<<<<
  }

  const reset = () => {
    setEditReview("")
    setStars(5)
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
              Rating:&nbsp;
              <select
                type="number"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              >
                {[1,2,3,4,5].map((num)=>(<option>{num}</option>))}
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
        onClick={()=>{
          if (!errors.length) setShowEditReview(false)
        }}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default EditReviewForm
