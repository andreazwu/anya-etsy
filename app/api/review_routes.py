from flask import Blueprint, jsonify, request
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


@review_routes.route("/<int:review_id>", methods=["PUT"])
@login_required
def edit_review(review_id):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies["csrf_token"]
  # review = Review.query.get(review_id)
  review = Review.query.filter(Review.id == review_id).first()
  if review.user_id == current_user.id:
    if form.validate_on_submit():
      review.review = form.data['review']
      review.stars = form.data['stars']

      db.session.commit()

      return review.to_dict_my_reviews(), 201
    else:
      return {'errors': validation_errors_to_error_messages(form.errors)}, 400
  else:
    return {'errors': ['Unauthorized! This is not your review']}, 403
  # return "edit review"


@review_routes.route("/<int:review_id>", methods=["DELETE"])
@login_required
def delete_review(review_id):
  """
  logged in user can delete a review by review_id
  """
  review = Review.query.get(review_id)

  if review.user_id is not current_user.id:
    return {
      "errors": "Unauthorized! You are not the owner of this review!"
    }, 403

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
