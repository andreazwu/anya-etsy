import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkRemoveReview } from "../../store/reviews"
import EditReviewModal from "./EditReviewModal"
import "./Reviews.css"

const MyReview = ({review}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const deleteReviewHandleClick = async () => {
    if (window.confirm("Are you sure you want to remove this review?")){
      await dispatch(thunkRemoveReview(review.id))
    }
  }

  return (
    <div>

      <div className="my-single-header">
        Review For {" "}
        {/* <Link to={`/Products/${review.Product.id}`}> */}
        <Link to={`/Products/${review.Product.id}`}>
          {review.Product.name.split(",")[0].split("|")[0]}
        </Link>:
      </div>


      <div className="my-single-stats">
        <p className="my-single-review-date">
            {new Date(review.createdAt).toString().slice(3,-42)}
        </p>
        <div className="my-single-rating">
          {/* <i className="fa-solid fa-star"></i>
          <span className="my-single-rating-number">
            {" "}{review.stars}
          </span> */}
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

        <span>
          <div>
            <EditReviewModal productId={review.Product.id}/>
          </div>
        </span>

        <div>
          <button
          className="delete-review-button"
          onClick={deleteReviewHandleClick}>
            Delete Review
          </button>
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
