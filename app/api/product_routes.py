from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, User, Review, Image
from app.forms import ProductForm, ImageForm
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
def get_one_product():
  pass
























































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
def delete_product():
  pass
















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
def create_review():
  pass


























#line 410 (add product<id> to cart)
@product_routes.route("/<int:product_id>/cart_items", methods=["POST"])
def create_cart_item():
  pass
