import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkRemoveReview } from "../../store/reviews"
// import EditReviewModal from "./EditReviewModal"
import EditReviewForm from "./EditReviewForm"
import "./Reviews.css"

const MyReview = ({review, user}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [showEditReview, setShowEditReview] = useState(false)

  const deleteReviewHandleClick = async () => {
    if (window.confirm("Are you sure you want to remove this review?")){
      await dispatch(thunkRemoveReview(review.id))
    }
  }

  return (
    <div className="myproducts-product-container">

      <div div className="myproducts-product-image-container">
        <Link style={{ textDecoration: "none", color: "black" }} to={`/products/${review.Product.id}`}>
          {/* {review.Product.previewImage ?
            (<img src={review.Product.previewImage} />) :
            (<img src={noimage} alt="noimage" />)
          } */}
          <img src={review.Product.previewImage} />
        </Link>
      </div>

<div className="my-single-info">
      <div className="my-single-header">
        Review For:
        <div className="my-single-product-name">
          {review.Product.name.split(",")[0].split("|")[0]}
        </div>
      </div>


      <div className="my-single-stats">
        <p className="my-single-review-date">
            {new Date(review.createdAt).toString().slice(3,-42)}
        </p>
        <div className="my-single-rating">
            {
              [...Array(review.stars)].map((star) => (<i className="fa-solid fa-star"></i>))
            }
        </div>

        <div className="my-single-review">
          {/* <i className="fa fa-quote-left fa-lg" aria-hidden="true"></i> */}
          <span>{" "}</span>
          <span>
            {review.review}
          </span>
          <span>{" "}</span>
          {/* <i className="fa fa-quote-right fa-lg" aria-hidden="true"></i> */}
        </div>

        {/* <span>
          <div>
            <EditReviewModal productId={review.Product.id}/>
          </div>
        </span> */}
        <div>
          <button
          className="edit-review-button"
          // onClick={()=>history.push(`/products/${review.Product.id}/edit-review`)}>
          onClick={()=>setShowEditReview(true)}>
            Edit Review
          </button>
        </div>

        {showEditReview &&
          <EditReviewForm
            myreview={review}
            showEditReview={showEditReview}
            setShowEditReview={setShowEditReview}
            />
        }
        <div>
          <button
          className="delete-review-button"
          onClick={deleteReviewHandleClick}>
            Delete Review
          </button>
        </div>
</div>
      </div>
    </div>
  )
}

export default MyReview

  // review prop looks like this:

  // { id, userId, ProductId, review, stars,
  //   User: { id, firstName, lastName },
  //   Product: { id, ownerId, add, city, state, coun,
  //           lat, lng, name, price,
  //           previewImage },
  //   ReviewImages: [ { id, url }, {}, {} ] }
