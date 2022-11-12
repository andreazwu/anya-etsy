from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product
from app.forms import ProductForm


product = Blueprint('products', __name__)


#line 10
@product.route("")
def get_all_products():
  pass


























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
def create_product():
  pass














































#line 240
@product.route("/<int:product_id>/images", methods=["POST"])
def add_product_image():
  pass




































#line 280
@product.route("/<int:product_id>", methods=["PUT"])
def edit_product():
  pass














































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
@product.route("/<int:product_id/cart_items>", methods=["POST"])
def create_cart_item():
  pass
