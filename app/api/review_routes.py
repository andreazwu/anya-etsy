from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages


review_routes = Blueprint('reviews', __name__)

#line 10
# @review_routes.route("/current")
# def get_my_reviews():
#   pass




































#line 50
@review_routes.route("/<int:review_id>", methods=["PUT"])
@login_required
def edit_review(review_id):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies["csrf_token"]
  # review = Review.query.get(review_id)
  review = Review.query.filter(Review.id == review_id).first()
  print(current_user)
  if review.user_id == current_user.id:
    if form.validate_on_submit():
      review.review = form.data['review']
      review.srars = form.data['stars']

      db.session.commit()

      return review.to_dict(), 201
    else:
      return {'errors': validation_errors_to_error_messages(form.errors)}, 400
  else:
    return {'errors': ['Unauthorized! This is not your review']}, 403
  # return "edit review"


















#line 90
@review_routes.route("/<int:review_id>", methods=["DELETE"])
def delete_review():
  pass
