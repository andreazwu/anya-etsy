from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, Review, Image, User
from app.forms import ProductForm, ReviewForm
from datetime import datetime
import random
from .auth_routes import validation_errors_to_error_messages
product_routes = Blueprint('products', __name__)

#line 10
@product_routes.route("")
def get_all_products():
  pass


























#line 40: query filter







































# line 80
@product_routes.route("/current")
def get_my_products():
  pass














































#line 130
@product_routes.route("/<int:product_id>")
def get_one_product(product_id):
  product = Product.query.get(product_id)
  reviews = Review.query.filter(Review.product_id == product_id).all()
  images = Image.query.filter(Image.product_id == product_id).all()
  seller = ""
  if product:
    user_id = product.seller_id
    seller = User.query.get(user_id)
  print ("product in get_one_product", product)
  print ("review in get_one_product", reviews)
  print ("images in get_one_product", images)
  print ("seller in get_one_product", seller)

  if reviews:
    numReviews = len(reviews)
    total_stars = 0
    for review in reviews:
      total_stars += review.to_dict()["stars"]
    avgRating = total_stars / numReviews

  else:
    numReviews = 0
    avgRating = 0

  if product:
    product_details = []
    product = product.to_dict()
    decimal_price = product["price"]
    str_price = str(round(decimal_price, 2))
    product["price"] = str_price
    product["numReviews"] = numReviews
    product["avgRating"] = avgRating
    product["salesNumber"] = random.randint(1,1000)
    product["productImages"] = [image.url for image in images]
    product["seller"] = seller.username
    product_details.append(product)

    print ("product_details in get_one_product", product_details)

    return jsonify(product_details)
  else:
    return {"error": "Product couldn't be found", "statusCode": 404}
















#line 190
@product_routes.route("", methods=["POST"])
def create_product():
  pass














































#line 240
@product_routes.route("/<int:product_id>/images", methods=["POST"])
def add_product_image():
  pass




































#line 280
@product_routes.route("/<int:product_id>", methods=["PUT"])
def edit_product():
  pass














































#line 330
@product_routes.route("/<int:product_id>", methods=["DELETE"])
def delete_product():
  pass
















#line 350
@product_routes.route("/<int:product_id>/reviews")
def get_product_reviews(product_id):
  pass


























#line 380
@product_routes.route("/<int:product_id>/reviews", methods=["POST"])
@login_required
def create_review(product_id):
  form = ReviewForm()
  form["csrf_token"].data = request.cookies["csrf_token"]
  print("form in create_review", form.data)
  print("current_user in create_review", current_user.id)

  if form.validate_on_submit():
    new_review = Review(
      user_id = current_user.id,
      product_id = product_id,
      review = form.data["review"],
      stars = form.data["stars"],
      created_at = datetime.now()
    )
    print("new_review in create_review", new_review)

    db.session.add(new_review)
    db.session.commit()

    return new_review.to_dict(), 201
  else:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400






#line 410 (add product<id> to cart)
@product_routes.route("/<int:product_id>/cart_items", methods=["POST"])
def create_cart_item():
  pass
