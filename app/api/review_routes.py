from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Review
from app.forms import ReviewForm


review_routes = Blueprint('reviews', __name__)


#line 10
@review_routes.route("/current")
def get_my_reviews():
  pass




































#line 50
@review_routes.route("/<int:review_id>", methods=["PUT"])
def edit_review():
  pass




































#line 90
@review_routes.route("/<int:review_id>", methods=["DELETE"])
def delete_review():
  pass
