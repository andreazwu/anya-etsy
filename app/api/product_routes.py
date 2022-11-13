from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, Review, Image, User
from app.forms import ProductForm, ReviewForm, ImageForm
from datetime import datetime
import random
from .auth_routes import validation_errors_to_error_messages
product_routes = Blueprint('products', __name__)

#line 10
@product_routes.route("")
def get_all_products():
  products = Product.query.all()

  products_result = []

  if products is not None:
    for product in products:
      product = product.to_dict()

      product_id = product["id"]
      preview_img = db.session.query(Image).filter(Image.product_id == product_id).first()
      if preview_img is not None:
        product["previewImage"] = preview_img.url

      product['price'] = str(product['price'])

      products_result.append(product)

    return jsonify({"Products": products_result}), 200









#line 40: query filter







































# line 80
@product_routes.route("/current")
@login_required
def get_my_products():
  print(current_user)
  user_id = current_user.id
  products = Product.query.filter(Product.seller_id == user_id).all()

  products_result = []

  if products is not None:
    for product in products:
      product = product.to_dict()

      product_id = product["id"]
      preview_img = db.session.query(Image).filter(Image.product_id == product_id).first()
      if preview_img is not None:
        product["previewImage"] = preview_img.url

      product['price'] = str(product['price'])

      products_result.append(product)

    return jsonify({"Products": products_result}), 200


























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
@login_required
def create_product():
  """
  Logged in user can create a new product listing
  """
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    data = Product(
      seller_id=current_user.id, #flask_login
      category=form.data["category"],
      name=form.data["name"],
      description=form.data["description"],
      price=form.data["price"],
      stock=form.data["stock"]
    )

    db.session.add(data)
    db.session.commit()

    return data.to_dict(), 201

  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# fetch("http://localhost:3000/api/products", {
#   method: 'POST',
#   body: JSON.stringify({
#    "category": "Christmas",
#    "name": "Christmas Tree",
#    "description": "This is a very pretty Christmas Tree",
#    "price": 123.00,
#    "stock": 50
#   }),
#   headers: {
#     'Content-type': 'application/json'
#   }
# })
# .then(res => res.json())
# .then(console.log)






#line 240
@product_routes.route("/<int:product_id>/images", methods=["POST"])
@login_required
def add_product_image(product_id):
  """
  logged in user can add images to their product listing
  """
  product = Product.query.get(product_id)
  form = ImageForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if product is None:
    return {"errors" : "Product couldn't be found"}, 404
  if product.seller_id != current_user.id:
    return {"errors" : "You are not the seller of this product"}, 403
  if form.validate_on_submit():
    new_image = Image(
      url=form.data["url"],
      product_id=product_id
    )
    db.session.add(new_image)
    db.session.commit()
    return new_image.to_dict(), 200
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# fetch("http://localhost:3000/api/products/1/images", {
#   method: 'POST',
#   body: JSON.stringify({
#    "url": "https://i.etsystatic.com/16985177/r/il/6ca93a/3417627453/il_794xN.3417627453_omqu.jpg"
#   }),
#   headers: {
#     'Content-type': 'application/json'
#   }
# })
# .then(res => res.json())
# .then(console.log)



#line 280
@product_routes.route("/<int:product_id>", methods=["PUT"])
@login_required
def update_product(product_id):
    """
    logged in user can edit their product listing
    """
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    edit_product = Product.query.get(product_id)
    if edit_product is None:
      return {"errors" : "Product couldn't be found"}, 404
    if edit_product.seller_id != current_user.id:
      return {"errors" : "You are not the seller of this product"}, 403
    if form.validate_on_submit():
      edit_product = Product.query.get(product_id)
      edit_product.category = form.data['category']
      edit_product.name = form.data['name']
      edit_product.description = form.data['description']
      edit_product.price = form.data['price']
      edit_product.stock = form.data['stock']

      db.session.commit()
      return edit_product.to_dict(), 200
    else:
      return {"errors" : validation_errors_to_error_messages(form.errors)}, 400
























#line 330
@product_routes.route("/<int:product_id>", methods=["DELETE"])
@login_required
def delete_product(product_id):
  product = Product.query.get(product_id)
  print(product.seller_id)

  if product.seller_id == current_user.id:
    db.session.delete(product)
    db.session.commit()

    return jsonify({
      "message": "Product successfully deleted!",
      "status_code": 200
    }), 200

  else:
    return jsonify({
      "errors": "Unauthorized! You are not the owner of this product!"
    }), 403
#line 350
@product_routes.route("/<int:product_id>/reviews")
def get_product_reviews(product_id):
  """
  load all the reviews of a product by product_id
  """
  product = Product.query.get(product_id)

  if product is None:
    return {"errors": "Product couldn't be found"}, 404

  filtered_reviews = Review.query.filter(Review.product_id == product_id).all()

  if filtered_reviews is not None:
    return {"Reviews": [review.to_dict()
                        for review in filtered_reviews]}, 200

# fetch("http://localhost:3000/api/products/3/reviews", {
#   method: 'GET',
#   headers: {
#     'Content-type': 'application/json'
#   }
# })
# .then(res => res.json())
# .then(console.log)





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
