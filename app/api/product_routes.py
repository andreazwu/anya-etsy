from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

product = Blueprint('products', __name__)


#line 10
@product.route("/")
def get_all_products():
  return "<h1>product homepage</h1>"


























#line 40: query filter







































# line 80
@product.route("/current")
def get_my_products():
  pass














































#line 130
@product.route("/<int:product_id>")
def get_one_product():
  pass
























































#line 190
@product.route("", methods=["POST"])
@login_required
def create_product():
  """
  Logged in user can create a new product listing
  """
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    data = Product(
      seller_id = current_user.id,
      category= form.data['category'],
      name = form.data['name'],
      description = form.data['description'],
      price = form.data['price'],
      stock = form.data['stock'],

    )
    db.session.add(data)
    db.session.commit()
    return data.to_dict(), 201
  else:
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400











































#line 240
@product.route("/<int:product_id>/images", methods=["POST"])
def add_product_image():
  pass




































#line 280
@product.route("/<int:product_id>", methods=["PUT"])
@login_required
def update_product(product_id):
   form = ProductForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   edit_product = Product.query.get(product_id)
   if edit_product is None:
      return {"errors" : "Product couldn't be found"}, 404
   if edit_product.seller_id != current_user.id:
      return {"errors" : "You are not the owner"}, 403
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
@product.route("/<int:product_id>", methods=["DELETE"])
def delete_product():
  pass
















#line 350
@product.route("/<int:product_id>/reviews")
def get_product_reviews():
  pass


























#line 380
@product.route("/<int:product_id>/reviews", methods=["POST"])
def create_review():
  pass


























#line 410 (add product<id> to cart)
@product.route("/<int:product_id>/cart_items", methods=["POST"])
def create_cart_item():
  pass
