from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Review, User
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages


review_routes = Blueprint('reviews', __name__)

#line 10
@review_routes.route("/current")
@login_required
def get_my_reviews():
  """
  load all the reviews of the current user
  """
  filtered_reviews = Review.query.filter(Review.user_id == current_user.id).all()

  if filtered_reviews is not None:
    return {"Reviews": [review.to_dict_my_reviews()
                        for review in filtered_reviews]}, 200

# fetch("http://localhost:3000/api/reviews/current", {
#   method: 'GET',
#   headers: {
#     'Content-type': 'application/json'
#   }
# })
# .then(res => res.json())
# .then(console.log)



















#line 50
@review_routes.route("/<int:review_id>", methods=["PUT"])
def edit_review():
  pass




































#line 90
@review_routes.route("/<int:review_id>", methods=["DELETE"])
@login_required
def delete_review(review_id):
  """
  logged in user can delete a review by review_id
  """
  review = Review.query.get(review_id)

  if review is None:
    return {"errors":"Review couldn't be found"}, 404

  else:
    db.session.delete(review)
    db.session.commit()
    return {"message":"Successfully deleted"}, 200


# fetch("http://localhost:3000/api/reviews/1", {
#   method: 'DELETE',
#   headers: {
#     'Content-type': 'application/json'
#   }
# })
# .then(res => res.json())
# .then(console.log)
