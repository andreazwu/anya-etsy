from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Review
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages


review = Blueprint('reviews', __name__)


#line 10
@review.route("/current")
def get_my_reviews():
  pass




































#line 50
@review.route("/<int:review_id>", methods=["PUT"])
def edit_review():
  pass




































#line 90
@review.route("/<int:review_id>", methods=["DELETE"])
def delete_review():
  pass
